import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate WhatsApp API link with pre-filled message template
 * @param template - The message template type
 * @param lang - Language ('en' or 'id')
 * @param planName - Optional plan/package name to include in the message
 * @returns WhatsApp API link with encoded message
 */
export function getWhatsAppLink(template: string, lang: 'en' | 'id' = 'id', planName?: string): string {
  const phoneNumber = '6281225974393';
  const baseUrl = `https://wa.me/${phoneNumber}`;
  
  const templates: Record<string, Record<string, string>> = {
    navbar: {
      en: 'Hello! I\'m interested in getting started with your services. Can we discuss my project?',
      id: 'Halo! Saya tertarik untuk memulai dengan layanan Anda. Bisakah kita diskusikan proyek saya?'
    },
    hero: {
      en: 'Hello! I want to build my software. Can we discuss the details?',
      id: 'Halo! Saya ingin membangun software saya. Bisakah kita diskusikan detailnya?'
    },
    about: {
      en: 'Hello! I want to start my project with you. Let\'s discuss how we can work together.',
      id: 'Halo! Saya ingin memulai proyek saya dengan Anda. Mari diskusikan bagaimana kita bisa bekerja sama.'
    },
    services: {
      en: 'Hello! I\'m interested in your services. Can you tell me more about what you offer?',
      id: 'Halo! Saya tertarik dengan layanan Anda. Bisakah Anda memberi tahu saya lebih lanjut tentang apa yang Anda tawarkan?'
    },
    pricing: {
      en: 'Hello! I\'m interested in your pricing packages. Can we discuss which package would be best for my needs?',
      id: 'Halo! Saya tertarik dengan paket harga Anda. Bisakah kita diskusikan paket mana yang terbaik untuk kebutuhan saya?'
    },
    footer: {
      en: 'Hello! I\'d like to talk about my project. When would be a good time to discuss?',
      id: 'Halo! Saya ingin berbicara tentang proyek saya. Kapan waktu yang baik untuk berdiskusi?'
    },
    gallery: {
      en: 'Hello! I\'m interested in your services. Can we discuss how you can help with my project?',
      id: 'Halo! Saya tertarik dengan layanan Anda. Bisakah kita diskusikan bagaimana Anda dapat membantu dengan proyek saya?'
    }
  };
  
  let message = templates[template]?.[lang] || templates[template]?.['id'] || 'Halo! Saya tertarik dengan layanan Anda.';
  
  // If planName is provided and template is pricing, customize the message
  if (planName && template === 'pricing') {
    if (lang === 'en') {
      message = `Hello! I'm interested in the "${planName}" package. Can we discuss the details and pricing?`;
    } else {
      message = `Halo! Saya tertarik dengan paket "${planName}". Bisakah kita diskusikan detail dan harganya?`;
    }
  }
  
  const encodedMessage = encodeURIComponent(message);
  
  return `${baseUrl}?text=${encodedMessage}`;
}
