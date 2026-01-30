export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: string;
}

export interface BlogData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

export const blogData: Record<string, BlogData> = {
  en: {
    title: "Blog",
    subtitle: "Insights, tips, and updates from Gilabs",
    posts: [
      {
        slug: "why-choose-astro-for-your-next-website",
        title: "Why Choose Astro for Your Next Website: Speed Meets Modern Development",
        excerpt: "Discover why Astro is becoming the go-to framework for fast, SEO-friendly websites. Learn how it combines the best of static and dynamic rendering.",
        content: "Astro is revolutionizing web development by offering a unique approach that combines static site generation with component islands. This means you get the speed of static sites with the flexibility of modern frameworks when needed. For businesses looking to build fast, SEO-optimized websites, Astro provides an excellent foundation that ensures your site loads quickly and ranks well in search engines.",
        author: "Gilabs Team",
        date: "2025-01-15",
        category: "Web Development",
        tags: ["Astro", "Web Development", "Performance", "SEO"],
        readTime: "5 min read"
      },
      {
        slug: "mobile-app-development-with-flutter",
        title: "Mobile App Development with Flutter: One Codebase, Multiple Platforms",
        excerpt: "Explore how Flutter enables rapid cross-platform mobile development, allowing you to build beautiful apps for iOS and Android from a single codebase.",
        content: "Flutter has transformed mobile app development by enabling developers to create native-like experiences across iOS and Android with a single codebase. This approach significantly reduces development time and costs while maintaining high performance and beautiful UI. At Gilabs, we leverage Flutter's capabilities to deliver mobile applications that feel native on every platform.",
        author: "Gilabs Team",
        date: "2025-01-20",
        category: "Mobile Development",
        tags: ["Flutter", "Mobile Development", "Cross-Platform", "App Development"],
        readTime: "6 min read"
      },
      {
        slug: "seo-best-practices-for-modern-websites",
        title: "SEO Best Practices for Modern Websites in 2025",
        excerpt: "Learn the essential SEO strategies that can help your website rank higher in search engines and attract more organic traffic.",
        content: "Search Engine Optimization remains crucial for any business with an online presence. Modern SEO goes beyond keyword stuffing—it's about creating valuable content, ensuring fast page loads, mobile responsiveness, and providing excellent user experience. We'll cover the latest SEO trends and best practices that can help your website perform better in search results.",
        author: "Gilabs Team",
        date: "2025-01-25",
        category: "SEO",
        tags: ["SEO", "Digital Marketing", "Web Performance", "Content Strategy"],
        readTime: "7 min read"
      },
      {
        slug: "ui-ux-design-principles-for-better-conversions",
        title: "UI/UX Design Principles That Drive Better Conversions",
        excerpt: "Discover how thoughtful design can improve user experience and increase conversion rates on your website or application.",
        content: "Great UI/UX design is not just about aesthetics—it's about creating intuitive experiences that guide users toward their goals. From clear navigation to strategic use of whitespace, every design decision impacts how users interact with your product. We'll explore key design principles that can help you create interfaces that users love and that drive business results.",
        author: "Gilabs Team",
        date: "2025-02-01",
        category: "Design",
        tags: ["UI/UX", "Design", "User Experience", "Conversion Optimization"],
        readTime: "5 min read"
      },
      {
        slug: "nextjs-vs-astro-choosing-the-right-framework",
        title: "Next.js vs Astro: Choosing the Right Framework for Your Project",
        excerpt: "Compare Next.js and Astro to understand which framework best suits your project needs, from static sites to dynamic applications.",
        content: "Choosing between Next.js and Astro depends on your project requirements. Next.js excels at building dynamic, full-stack applications with server-side rendering and API routes. Astro, on the other hand, shines for content-focused sites that prioritize speed and SEO. Understanding the strengths of each framework helps you make informed decisions for your projects.",
        author: "Gilabs Team",
        date: "2025-02-05",
        category: "Web Development",
        tags: ["Next.js", "Astro", "Framework Comparison", "Web Development"],
        readTime: "8 min read"
      },
      {
        slug: "cost-effective-web-development-solutions",
        title: "Cost-Effective Web Development Solutions for Small Businesses",
        excerpt: "Learn how small businesses can get professional websites without breaking the bank, with practical tips and budget-friendly approaches.",
        content: "Starting a business doesn't mean you need to spend a fortune on web development. There are many cost-effective solutions that can help small businesses establish a strong online presence. From choosing the right technology stack to understanding what features you actually need, we'll guide you through building a website that fits your budget and business goals.",
        author: "Gilabs Team",
        date: "2025-02-10",
        category: "Business",
        tags: ["Small Business", "Web Development", "Budget", "Cost-Effective Solutions"],
        readTime: "6 min read"
      }
    ]
  },
  id: {
    title: "Blog",
    subtitle: "Wawasan, tips, dan update dari Gilabs",
    posts: [
      {
        slug: "why-choose-astro-for-your-next-website",
        title: "Mengapa Memilih Astro untuk Website Anda: Kecepatan Bertemu Pengembangan Modern",
        excerpt: "Temukan mengapa Astro menjadi framework pilihan untuk website yang cepat dan ramah SEO. Pelajari bagaimana Astro menggabungkan yang terbaik dari rendering statis dan dinamis.",
        content: "Astro merevolusi pengembangan web dengan menawarkan pendekatan unik yang menggabungkan static site generation dengan component islands. Ini berarti Anda mendapatkan kecepatan situs statis dengan fleksibilitas framework modern saat dibutuhkan. Untuk bisnis yang ingin membangun website cepat dan dioptimalkan untuk SEO, Astro menyediakan fondasi yang sangat baik yang memastikan situs Anda dimuat dengan cepat dan berperingkat baik di mesin pencari.",
        author: "Tim Gilabs",
        date: "2025-01-15",
        category: "Web Development",
        tags: ["Astro", "Web Development", "Performance", "SEO"],
        readTime: "5 menit"
      },
      {
        slug: "mobile-app-development-with-flutter",
        title: "Pengembangan Aplikasi Mobile dengan Flutter: Satu Codebase, Banyak Platform",
        excerpt: "Jelajahi bagaimana Flutter memungkinkan pengembangan mobile lintas platform yang cepat, memungkinkan Anda membangun aplikasi yang indah untuk iOS dan Android dari satu codebase.",
        content: "Flutter telah mengubah pengembangan aplikasi mobile dengan memungkinkan developer membuat pengalaman seperti native di iOS dan Android dengan satu codebase. Pendekatan ini secara signifikan mengurangi waktu dan biaya pengembangan sambil mempertahankan performa tinggi dan UI yang indah. Di Gilabs, kami memanfaatkan kemampuan Flutter untuk memberikan aplikasi mobile yang terasa native di setiap platform.",
        author: "Tim Gilabs",
        date: "2025-01-20",
        category: "Mobile Development",
        tags: ["Flutter", "Mobile Development", "Cross-Platform", "App Development"],
        readTime: "6 menit"
      },
      {
        slug: "seo-best-practices-for-modern-websites",
        title: "Praktik Terbaik SEO untuk Website Modern di 2025",
        excerpt: "Pelajari strategi SEO penting yang dapat membantu website Anda berperingkat lebih tinggi di mesin pencari dan menarik lebih banyak traffic organik.",
        content: "Search Engine Optimization tetap penting untuk bisnis apa pun yang memiliki kehadiran online. SEO modern melampaui keyword stuffing—ini tentang membuat konten yang berharga, memastikan halaman dimuat cepat, responsif mobile, dan memberikan pengalaman pengguna yang sangat baik. Kami akan membahas tren dan praktik terbaik SEO terbaru yang dapat membantu website Anda tampil lebih baik di hasil pencarian.",
        author: "Tim Gilabs",
        date: "2025-01-25",
        category: "SEO",
        tags: ["SEO", "Digital Marketing", "Web Performance", "Content Strategy"],
        readTime: "7 menit"
      },
      {
        slug: "ui-ux-design-principles-for-better-conversions",
        title: "Prinsip Desain UI/UX yang Meningkatkan Konversi",
        excerpt: "Temukan bagaimana desain yang dipikirkan dengan baik dapat meningkatkan pengalaman pengguna dan meningkatkan tingkat konversi di website atau aplikasi Anda.",
        content: "Desain UI/UX yang hebat bukan hanya tentang estetika—ini tentang menciptakan pengalaman intuitif yang membimbing pengguna menuju tujuan mereka. Dari navigasi yang jelas hingga penggunaan whitespace yang strategis, setiap keputusan desain memengaruhi cara pengguna berinteraksi dengan produk Anda. Kami akan mengeksplorasi prinsip desain utama yang dapat membantu Anda membuat antarmuka yang disukai pengguna dan mendorong hasil bisnis.",
        author: "Tim Gilabs",
        date: "2025-02-01",
        category: "Design",
        tags: ["UI/UX", "Design", "User Experience", "Conversion Optimization"],
        readTime: "5 menit"
      },
      {
        slug: "nextjs-vs-astro-choosing-the-right-framework",
        title: "Next.js vs Astro: Memilih Framework yang Tepat untuk Proyek Anda",
        excerpt: "Bandingkan Next.js dan Astro untuk memahami framework mana yang paling sesuai dengan kebutuhan proyek Anda, dari situs statis hingga aplikasi dinamis.",
        content: "Memilih antara Next.js dan Astro tergantung pada kebutuhan proyek Anda. Next.js unggul dalam membangun aplikasi dinamis full-stack dengan server-side rendering dan API routes. Astro, di sisi lain, bersinar untuk situs yang berfokus konten yang memprioritaskan kecepatan dan SEO. Memahami kekuatan masing-masing framework membantu Anda membuat keputusan yang tepat untuk proyek Anda.",
        author: "Tim Gilabs",
        date: "2025-02-05",
        category: "Web Development",
        tags: ["Next.js", "Astro", "Framework Comparison", "Web Development"],
        readTime: "8 menit"
      },
      {
        slug: "cost-effective-web-development-solutions",
        title: "Solusi Pengembangan Web yang Hemat Biaya untuk Bisnis Kecil",
        excerpt: "Pelajari bagaimana bisnis kecil dapat mendapatkan website profesional tanpa menghabiskan banyak uang, dengan tips praktis dan pendekatan yang ramah anggaran.",
        content: "Memulai bisnis tidak berarti Anda perlu menghabiskan banyak uang untuk pengembangan web. Ada banyak solusi hemat biaya yang dapat membantu bisnis kecil membangun kehadiran online yang kuat. Dari memilih teknologi yang tepat hingga memahami fitur apa yang benar-benar Anda butuhkan, kami akan memandu Anda melalui pembangunan website yang sesuai dengan anggaran dan tujuan bisnis Anda.",
        author: "Tim Gilabs",
        date: "2025-02-10",
        category: "Business",
        tags: ["Small Business", "Web Development", "Budget", "Cost-Effective Solutions"],
        readTime: "6 menit"
      }
    ]
  }
};

