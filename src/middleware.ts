import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	// Get the response from next middleware/handler
	const response = await next();
	
	// Set X-Robots-Tag header
	// Default to 'index, follow' unless it's a 404 page or other special pages
	const pathname = context.url.pathname;
	
	// Determine robots tag value
	const robotsTag = (pathname === '/404' || pathname.endsWith('/404')) 
		? 'noindex, nofollow' 
		: 'index, follow';
	
	// Clone response and add headers
	const existingHeader = response.headers.get('X-Robots-Tag');
	
	const newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
	
	// Set X-Robots-Tag
	if (!existingHeader) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	} else if (existingHeader !== robotsTag) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	}
	
	// Add cache headers for static assets
	const url = context.url.pathname;
	if (url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$/i)) {
		// Cache static assets for 1 year
		newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (url.match(/\.(html|htm)$/i)) {
		// Cache HTML for shorter period
		newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	}
	
	// Enable compression
	if (!newResponse.headers.get('Content-Encoding')) {
		newResponse.headers.set('Accept-Encoding', 'gzip, deflate, br');
	}
	
	return newResponse;
};

