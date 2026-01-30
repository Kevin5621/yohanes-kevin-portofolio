
export interface PricingPackage {
  title: string;
  description: string;
  price: string;
  revisions: string[];
  features: string[];
  addons: string[];
}

export interface PricingData {
  hero: {
    title: string;
    subtitle: string[];
    cta: string;
  };
  features: {
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    body: string[];
  };
  process: {
    title: string;
    subtitle: string;
    body: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      body: string[];
      tagline: string;
    }[];
  };
  energy: {
    title: string;
    subtitle: string;
    body: string[];
  };
  ctaSection: {
    title: string;
    subtitle: string[];
    button: string;
  };
  packages: PricingPackage[];
  revisionSystem: {
    title: string;
    small: {
      title: string;
      items: string[];
    };
    large: {
      title: string;
      items: string[];
    };
    extra: string[];
  };
  blog: {
    title: string;
    options: {
      name: string;
      price: string;
    }[];
    addons: string[];
  };
  store: {
    title: string;
    options: {
      name: string;
      details?: string[];
      price: string;
    }[];
  };
  erpCrm: {
    title: string;
    description: string;
    cta?: {
      title: string;
      subtitle: string;
      timeline: string;
      description: string;
      button: string;
    };
    crm: {
      title: string;
      description: string;
      packages: {
        name: string;
        features: string[];
        price: string;
        revisions?: string[];
      }[];
    };
    erp: {
      title: string;
      description: string;
      modules: string[];
      fullPackage: string;
      revisions: string[];
    };
  };
  maintenance: {
    title: string;
    items: string[];
  };
  recurringRevenue: {
    title: string;
    subtitle: string;
    description: string;
    maintenance: {
      title: string;
      label: string;
      description: string;
      packages: {
        name: string;
        price: string;
        features: string[];
        sla?: string;
      }[];
    };
    licensing: {
      title: string;
      label: string;
      description: string;
      packages: {
        name: string;
        setupPrice: string;
        monthlyPrice: string;
        features: string[];
        bestFor: string;
      }[];
    };
  };
  recommendations: {
    title: string;
    items: {
      name: string;
      price: string;
      desc: string;
    }[];
  };
  aiAddons: {
    tabLabel: string;
    headline: string;
    eyebrow: string;
    narrative: string;
    impacts: {
      stat: string;
      label: string;
      description: string;
    }[];
    useCases: {
      title: string;
      items: string[];
    };
    pricingNote: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  customSoftware: {
    title: string;
    subtitle: string;
    description: string;
    packages: {
      name: string;
      description: string;
      price: string;
      features: string[];
      revisions?: string[];
      bestFor: string;
    }[];
  };
}

export const pricingData: Record<string, PricingData> = {
  id: {
    hero: {
      title: "Kami Cepat. Dan Kami Bangun Hal yang Bertahan Lama.",
      subtitle: [
        "Kami tidak punya pengalaman puluhan tahun.",
        "Yang kami punya adalah kecepatan, kerja tim, dan energi yang baik.",
        "Kami coding cepat — dan kami peduli dengan apa yang kami kirim."
      ],
      cta: "Mari Bangun Sesuatu",
    },
    features: {
      items: [
        {
          title: "Strategic-Driven Development.",
          description: "Kami tidak hanya membuat fitur — kami membangun solusi yang relevan dengan tujuan bisnis Anda."
        },
        {
          title: "Enterprise-Ready Architecture.",
          description: "Teknologi dan struktur aplikasi dirancang untuk performa jangka panjang."
        },
        {
          title: "Reliable Communication.",
          description: "Progress jelas, laporan rutin, dan keputusan cepat di setiap tahap pengembangan."
        },
        {
          title: "No Overpromise — Just Results.",
          description: "Kami bekerja berdasarkan scope dan timeline realistis untuk menghindari revisi berulang."
        }
      ]
    },
    about: {
      title: "Kami bukan perusahaan besar.",
      subtitle: "Kami tim kecil yang suka membangun sesuatu.",
      body: [
        "Kami mulai karena kami suka membuat hal-hal bekerja — dan membuatnya cepat.",
        "Kami tidak bersembunyi di balik kata-kata manis atau profesionalisme palsu.",
        "Hanya orang-orang nyata, memecahkan masalah nyata, dengan kode dan kopi."
      ]
    },
    process: {
      title: "Kami bergerak cepat. Kami tetap dalam alur.",
      subtitle: "Cara Kami Bekerja",
      body: [
        "**PRD** dulu. Baru kami membangun.",
        "Tidak ada rapat panjang. Tidak ada penantian tanpa akhir.",
        "Hanya fokus, suasana yang baik, dan menyelesaikan pekerjaan.",
        "Ketika **PRD** jelas, kami membangun. Ketika kami mengirim, kami bergerak maju."
      ]
    },
    services: {
      title: "Apa yang Kami Lakukan — dan Kami Lakukan dengan Cepat.",
      subtitle: "Kami membangun produk digital yang benar-benar berfungsi. Tanpa basa-basi, tanpa proses berbelit — hanya fokus, kecepatan, dan peduli pada kualitas.",
      items: [
        {
          title: "Web Development",
          body: [
            "Website modern untuk company profile, landing page, atau marketing site. Fokus pada informasi dan branding bisnis Anda.",
            "Dari website sederhana hingga platform full-stack dengan backend, database, dan fitur kompleks.",
            "Kami memastikan semuanya berjalan lancar, cepat, dan terlihat solid di setiap layar."
          ],
          tagline: "→ Rp 5.000.000 – 80.000.000+"
        },
        {
          title: "Mobile App Development",
          body: [
            "Aplikasi mobile cross-platform yang dirancang khusus untuk workflow bisnis Anda.",
            "Dirancang untuk berkinerja baik, mudah diperbarui, dan tumbuh bersama produk Anda.",
            "Satu basis kode untuk iOS & Android — lancar di mana saja."
          ],
          tagline: "→ Rp 20.000.000 – 80.000.000"
        },
        {
          title: "System & Integration",
          body: [
            "Sistem enterprise lengkap dengan multiple modules dan integrasi kompleks.",
            "Kami menghubungkan alat, database, dan API Anda sehingga semuanya berjalan bersama seperti satu sistem.",
            "Lebih sedikit pekerjaan manual, lebih sedikit menunggu, lebih banyak otomatisasi."
          ],
          tagline: "→ Rp 150.000.000 – 800.000.000+"
        },
        {
          title: "Maintenance & Support",
          body: [
            "Kami tidak menghilang setelah peluncuran.",
            "Jaminan aplikasi Anda selalu berjalan optimal dengan support berkelanjutan.",
            "Dari basic maintenance hingga enterprise support dengan SLA guarantee.",
            "Anggap kami sebagai kru pit teknologi Anda."
          ],
          tagline: "→ Rp 2.000.000 – 20.000.000/bulan"
        }
      ]
    },
    energy: {
      title: "Vibe dulu. Code kemudian.",
      subtitle: "Energi Kami",
      body: [
        "Kami percaya pekerjaan hebat datang dari energi yang baik.",
        "Proyek kami tumbuh dari rasa ingin tahu, candaan, debugging larut malam, dan playlist bersama.",
        "Kami serius tentang hasil, bukan tentang berpura-pura menjadi korporat."
      ]
    },
    ctaSection: {
      title: "Ingin membangun sesuatu dengan cepat bersama kami?",
      subtitle: [
        "Kirim pesan pada kami. Ceritakan ide Anda.",
        "Kita lihat seberapa jauh kita bisa membawanya — bersama."
      ],
      button: "Mari Bicara"
    },
    packages: [
      {
        title: "Website Development",
        description: "Website modern untuk company profile, landing page, atau marketing site. Fokus pada informasi dan branding bisnis Anda.",
        price: "Rp 5.000.000 – 20.000.000",
        revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"],
        features: [
          "Modern tech stack (Next.js / Astro)",
          "SEO optimized",
          "Mobile responsive",
          "Fast loading (< 1 detik)",
          "CMS integration (opsional)",
          "Contact form & basic integrations"
        ],
        addons: []
      },
      {
        title: "Mobile App Development",
        description: "Aplikasi mobile cross-platform yang dirancang khusus untuk workflow bisnis Anda.",
        price: "Rp 20.000.000 – 80.000.000",
        revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"],
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Backend API integration",
          "Push notifications",
          "Offline capability",
          "App store deployment"
        ],
        addons: []
      },
      {
        title: "Custom Software Development",
        description: "Software custom yang dibuat khusus sesuai kebutuhan unik bisnis Anda.",
        price: "Rp 15.000.000 – 200.000.000+",
        revisions: ["Revisi termasuk dalam development", "Dedicated project manager"],
        features: [
          "Full-stack development",
          "Custom architecture",
          "Database design",
          "API development",
          "Integration dengan sistem existing",
          "Scalable & maintainable code"
        ],
        addons: []
      },
    ],
    revisionSystem: {
      title: "Development Process",
      small: {
        title: "Included in Development",
        items: [
          "Revisi UI/UX selama development",
          "Bug fixes & adjustments",
          "Performance optimization",
          "Responsive design refinement"
        ]
      },
      large: {
        title: "Post-Launch Support",
        items: [
          "Maintenance packages available",
          "Feature updates (separate quote)",
          "Ongoing support & monitoring",
          "Custom development requests"
        ]
      },
      extra: []
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Static Blog",
          price: "Rp 300.000 – 800.000"
        },
        {
          name: "Dynamic Blog (SSG/SSR)",
          price: "Rp 500.000 – 1.500.000"
        }
      ],
      addons: [
        "Pagination → +150.000",
        "Kategori/tag → +200.000",
        "Panel admin sederhana → +800.000 – 2.000.000"
      ]
    },
    store: {
      title: "Tambahan Halaman Toko",
      options: [
        {
          name: "Katalog Produk (tanpa checkout)",
          price: "Rp 800.000 – 1.500.000"
        },
        {
          name: "Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "Rp 3.000.000 – 8.000.000"
        }
      ]
    },
    erpCrm: {
      title: "Enterprise System Development",
      description: "Sistem enterprise lengkap dengan multiple modules dan integrasi kompleks. Dikembangkan melalui konsultasi mendalam untuk memahami kebutuhan bisnis Anda.",
      cta: {
        title: "By Consultation Only",
        subtitle: "Typical budget: Rp 150.000.000 – 1.500.000.000",
        timeline: "Timeline: 3–12 bulan",
        description: "Hubungi kami untuk proposal custom sesuai kebutuhan bisnis Anda.",
        button: "Request Proposal"
      },
      crm: {
        title: "CRM & Sales Management System",
        description: "Sistem untuk mengelola customer, sales pipeline, dan workflow tim.",
        packages: []
      },
      erp: {
        title: "ERP & Business Management System",
        description: "Sistem manajemen bisnis terintegrasi dengan multiple modules.",
        modules: [],
        fullPackage: "Enterprise solutions dikembangkan melalui discovery phase & custom proposal",
        revisions: []
      }
    },
    maintenance: {
      title: "Maintenance & Support",
      items: [
        "Basic maintenance → Rp 150.000/bulan",
        "Maintenance + upload konten → Rp 250.000 – 400.000/bulan",
        "SLA 24 jam support → Rp 500.000 – 1.000.000/bulan"
      ]
    },
    recommendations: {
      title: "Rekomendasi Paket Paling Laku",
      items: [
        {
          name: "Starter Package – Astro Basic",
          price: "Rp 2 juta-an",
          desc: "Untuk company profile biasa."
        },
        {
          name: "Business Package – Astro Profesional",
          price: "Rp 3,5 juta-an",
          desc: "Dengan animasi & visual premium."
        },
        {
          name: "Premium Package – Next.js Scale Ready",
          price: "Rp 7–12 juta",
          desc: "Untuk perusahaan besar."
        },
        {
          name: "CRM Starter Package",
          price: "Rp 15–25 juta",
          desc: ""
        }
      ]
    },
    aiAddons: {
      tabLabel: "Otomatisasi Cerdas",
      headline: "Bagaimana jika operasional Anda berjalan tanpa follow-up manual?",
      eyebrow: "Lapisan Kecerdasan",
      narrative: "Kami membantu tim menghilangkan tugas berulang dengan mengotomatisasi persetujuan, pelaporan, dan sinkronisasi data antar sistem. Dari routing lead dan invoicing hingga pemeriksaan compliance dan notifikasi — otomatisasi kami menyesuaikan dengan cara kerja tim Anda, bukan sebaliknya.",
      impacts: [
        { stat: "60%", label: "Pengurangan operasi manual", description: "Otomatisasi tugas berulang dan bebaskan tim Anda" },
        { stat: "Nol", label: "Kesalahan manusia dalam workflow", description: "Minimalisir kesalahan dalam proses persetujuan & pelaporan" },
        { stat: "Semua", label: "Integrasi sistem", description: "Hubungkan ERP, CRM, tools internal, dan API pihak ketiga" },
        { stat: "∞", label: "Otomatisasi yang scalable", description: "Otomatisasi yang tumbuh bersama bisnis Anda" }
      ],
      useCases: {
        title: "Apa yang bisa diotomatisasi?",
        items: ["Routing & scoring lead", "Pembuatan invoice", "Workflow persetujuan", "Pemeriksaan compliance", "Penjadwalan laporan", "Sinkronisasi data", "Sistem notifikasi", "Update pipeline"]
      },
      pricingNote: "Harga ditentukan setelah memahami kebutuhan workflow dan integrasi Anda.",
      cta: {
        primary: "Jelajahi Peluang Otomasi",
        secondary: "Konsultasi gratis untuk mengidentifikasi use case otomasi"
      }
    },
    customSoftware: {
      title: "Custom Software Development",
      subtitle: "Solusi Software yang Dibuat Khusus untuk Bisnis Anda",
      description: "Kami membangun software custom yang disesuaikan dengan kebutuhan unik bisnis Anda. Dari aplikasi web hingga mobile, dari sistem manajemen hingga integrasi kompleks — semua dibuat khusus untuk Anda.",
      packages: [
        {
          name: "Custom Software Development",
          description: "Aplikasi web & mobile yang disesuaikan dengan proses bisnis Anda. Untuk bisnis yang berkembang, sistem internal, atau tools operasional.",
          price: "Rp 20.000.000 – 120.000.000",
          bestFor: "Bisnis yang berkembang, sistem internal, MVP & tools operasional",
          features: [
            "Web & Mobile applications",
            "Tailored to your business processes",
            "Internal systems & dashboards",
            "MVP development",
            "Operational tools",
            "Custom integrations",
            "Dedicated project manager"
          ],
          revisions: ["Revisi termasuk dalam development", "Post-launch support tersedia"]
        },
        {
          name: "Enterprise Software Solution",
          description: "Sistem enterprise lengkap dengan multiple modules dan integrasi kompleks.",
          price: "Rp 150.000.000 – 800.000.000+",
          bestFor: "Perusahaan besar yang butuh sistem terintegrasi dan scalable",
          features: [
            "Multiple modules & features",
            "Complex integrations",
            "Scalable architecture",
            "Advanced security & compliance",
            "Custom reporting & analytics",
            "Team collaboration tools",
            "Dedicated project manager",
            "SLA guarantee",
            "Security audit & certification",
            "Training & documentation"
          ],
          revisions: ["Unlimited revisi kecil selama development", "10x revisi besar"]
        }
      ]
    },
    recurringRevenue: {
      title: "Recurring Revenue Solutions",
      subtitle: "Revenue Berkelanjutan untuk Bisnis yang Stabil",
      description: "Bangun revenue yang stabil dan berkelanjutan dengan paket maintenance dan licensing. Anda membayar untuk mengurangi risiko, bukan untuk menambah fitur.",
      maintenance: {
        title: "Maintenance & Support Plans",
        label: "Maintenance & Support",
        description: "Jaminan aplikasi Anda selalu berjalan optimal dengan support berkelanjutan.",
        packages: [
          {
            name: "Basic Maintenance",
            price: "Rp 2.000.000/bulan",
            features: [
              "Bug fixes & security updates",
              "Server monitoring",
              "Email support (5 hari kerja)",
              "Update minor (bulanan)"
            ],
            sla: "Response time: 48 jam"
          },
          {
            name: "Pro Maintenance",
            price: "Rp 5.000.000/bulan",
            features: [
              "Semua fitur Basic",
              "Performance optimization",
              "Feature updates kecil",
              "Priority support (24/7)",
              "Monthly health check",
              "Uptime monitoring & alerts"
            ],
            sla: "Response time: 4 jam"
          },
          {
            name: "Enterprise Maintenance",
            price: "Rp 10.000.000 – 20.000.000/bulan",
            features: [
              "Semua fitur Pro",
              "Dedicated support team",
              "Custom feature development",
              "SLA guarantee (99.9% uptime)",
              "Quarterly strategy review",
              "Security audit & compliance",
              "On-site support (opsional)"
            ],
            sla: "Response time: 1 jam, 99.9% uptime SLA"
          }
        ]
      },
      licensing: {
        title: "Software Licensing (White-label)",
        label: "Licensing Plans",
        description: "Akses ke sistem base + customization. Bayar sekali untuk setup, lalu monthly license untuk akses berkelanjutan.",
        packages: [
          {
            name: "CRM Base License",
            setupPrice: "Rp 50.000.000",
            monthlyPrice: "Rp 3.000.000 – 5.000.000/bulan",
            bestFor: "Perusahaan yang butuh CRM dengan customization terbatas",
            features: [
              "Base CRM system (ready-to-use)",
              "Custom branding & logo",
              "Basic customization (5 modul)",
              "User management (hingga 50 users)",
              "Monthly updates & bug fixes",
              "Email support"
            ]
          },
          {
            name: "Enterprise License",
            setupPrice: "Rp 100.000.000 – 200.000.000",
            monthlyPrice: "Rp 10.000.000 – 20.000.000/bulan",
            bestFor: "Perusahaan besar yang butuh sistem lengkap dengan customization penuh",
            features: [
              "Full system access (CRM + ERP modules)",
              "Unlimited customization",
              "Unlimited users",
              "Priority development queue",
              "Dedicated account manager",
              "Custom integrations",
              "White-label support",
              "Source code access (opsional)"
            ]
          }
        ]
      }
    }
  },
  en: {
    hero: {
      title: "We’re Fast. And We Build Things That Last.",
      subtitle: [
        "We don’t have decades of experience.",
        "What we have is speed, teamwork, and good energy.",
        "We code fast — and we care about what we ship."
      ],
      cta: "Let's Build Something",
    },
    features: {
      items: [
        {
          title: "Strategic-Driven Development.",
          description: "We don't just build features — we build solutions that align with your business goals."
        },
        {
          title: "Enterprise-Ready Architecture.",
          description: "Technology and application structure designed for long-term performance."
        },
        {
          title: "Reliable Communication.",
          description: "Clear progress, regular reports, and quick decisions at every development stage."
        },
        {
          title: "No Overpromise — Just Results.",
          description: "We work based on realistic scope and timeline to avoid repeated revisions."
        }
      ]
    },
    about: {
      title: "We're not a big company.",
      subtitle: "We’re a small team that loves building stuff.",
      body: [
        "We started because we like making things work — and making them fast.",
        "We don’t hide behind buzzwords or fake professionalism.",
        "Just real people, solving real problems, with code and coffee."
      ]
    },
    process: {
      title: "We move quick. We stay in flow.",
      subtitle: "How We Work",
      body: [
        "**PRD** first. Then we build.",
        "No long meetings. No endless waiting.",
        "Just focus, good vibe, and getting things done.",
        "When **PRD** is clear, we build. When we ship, we move on."
      ]
    },
    services: {
      title: "What We Do — and What We Do Fast.",
      subtitle: "We build digital products that actually work. No buzzwords, no endless process — just focus, speed, and care for quality.",
      items: [
        {
          title: "Web Development",
          body: [
            "Modern websites for company profile, landing page, or marketing site. Focus on information and business branding.",
            "From simple websites to full-stack platforms with backend, database, and complex features.",
            "We make sure everything runs smooth, fast, and looks solid on every screen."
          ],
          tagline: "→ IDR 5,000,000 – 80,000,000+"
        },
        {
          title: "Mobile App Development",
          body: [
            "Cross-platform mobile applications designed specifically for your business workflow.",
            "Designed to perform well, update easily, and grow with your product.",
            "One codebase for iOS & Android — smooth everywhere."
          ],
          tagline: "→ IDR 20,000,000 – 80,000,000"
        },
        {
          title: "System & Integration",
          body: [
            "Complete enterprise systems with multiple modules and complex integrations.",
            "We connect your tools, databases, and APIs so everything runs together like a single system.",
            "Less manual work, less waiting, more automation."
          ],
          tagline: "→ IDR 150,000,000 – 800,000,000+"
        },
        {
          title: "Maintenance & Support",
          body: [
            "We don't disappear after launch.",
            "Ensure your application always runs optimally with ongoing support.",
            "From basic maintenance to enterprise support with SLA guarantee.",
            "Think of us as your tech pit-crew."
          ],
          tagline: "→ IDR 2,000,000 – 20,000,000/month"
        }
      ]
    },
    energy: {
      title: "Vibe first. Code second.",
      subtitle: "Our Energy",
      body: [
        "We believe great work comes from good energy.",
        "Our projects grow from curiosity, jokes, late-night debugging, and shared playlists.",
        "We’re serious about results, not about pretending to be corporate."
      ]
    },
    ctaSection: {
      title: "Wanna build something fast with us?",
      subtitle: [
        "Drop us a message. Tell us your idea.",
        "We’ll see how far we can take it — together."
      ],
      button: "Let's Talk"
    },
    packages: [
      {
        title: "Website Development",
        description: "Modern websites for company profile, landing page, or marketing site. Focus on information and business branding.",
        price: "IDR 5,000,000 – 20,000,000",
        revisions: ["Revisions included in development", "Post-launch support available"],
        features: [
          "Modern tech stack (Next.js / Astro)",
          "SEO optimized",
          "Mobile responsive",
          "Fast loading (< 1 second)",
          "CMS integration (optional)",
          "Contact form & basic integrations"
        ],
        addons: []
      },
      {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications designed specifically for your business workflow.",
        price: "IDR 20,000,000 – 80,000,000",
        revisions: ["Revisions included in development", "Post-launch support available"],
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Backend API integration",
          "Push notifications",
          "Offline capability",
          "App store deployment"
        ],
        addons: []
      },
      {
        title: "Custom Software Development",
        description: "Custom software built specifically according to your unique business needs.",
        price: "IDR 15,000,000 – 200,000,000+",
        revisions: ["Revisions included in development", "Dedicated project manager"],
        features: [
          "Full-stack development",
          "Custom architecture",
          "Database design",
          "API development",
          "Integration with existing systems",
          "Scalable & maintainable code"
        ],
        addons: []
      },
    ],
    revisionSystem: {
      title: "Development Process",
      small: {
        title: "Included in Development",
        items: [
          "UI/UX revisions during development",
          "Bug fixes & adjustments",
          "Performance optimization",
          "Responsive design refinement"
        ]
      },
      large: {
        title: "Post-Launch Support",
        items: [
          "Maintenance packages available",
          "Feature updates (separate quote)",
          "Ongoing support & monitoring",
          "Custom development requests"
        ]
      },
      extra: []
    },
    blog: {
      title: "Blog Setup",
      options: [
        {
          name: "Static Blog",
          price: "IDR 300,000 – 800,000"
        },
        {
          name: "Dynamic Blog (SSG/SSR)",
          price: "IDR 500,000 – 1,500,000"
        }
      ],
      addons: [
        "Pagination → +150,000",
        "Category/tag → +200,000",
        "Simple admin panel → +800,000 – 2,000,000"
      ]
    },
    store: {
      title: "Store Add-ons",
      options: [
        {
          name: "Product Catalog (no checkout)",
          price: "IDR 800,000 – 1,500,000"
        },
        {
          name: "Mini Ecommerce",
          details: ["Cart + checkout", "CMS / database"],
          price: "IDR 3,000,000 – 8,000,000"
        }
      ]
    },
    erpCrm: {
      title: "Enterprise System Development",
      description: "Complete enterprise systems with multiple modules and complex integrations. Developed through in-depth consultation to understand your business needs.",
      cta: {
        title: "By Consultation Only",
        subtitle: "Typical budget: IDR 150,000,000 – 1,500,000,000",
        timeline: "Timeline: 3–12 months",
        description: "Contact us for a custom proposal tailored to your business needs.",
        button: "Request Proposal"
      },
      crm: {
        title: "CRM & Sales Management System",
        description: "Systems for managing customers, sales pipeline, and team workflow.",
        packages: []
      },
      erp: {
        title: "ERP & Business Management System",
        description: "Integrated business management systems with multiple modules.",
        modules: [],
        fullPackage: "Enterprise solutions developed through discovery phase & custom proposal",
        revisions: []
      }
    },
    maintenance: {
      title: "Maintenance & Support",
      items: [
        "Basic maintenance → IDR 150,000/month",
        "Maintenance + content upload → IDR 250,000 – 400,000/month",
        "SLA 24-hour support → IDR 500,000 – 1,000,000/month"
      ]
    },
    recommendations: {
      title: "Recommended Best Sellers",
      items: [
        {
          name: "Starter Package – Astro Basic",
          price: "~IDR 2 million",
          desc: "For standard company profiles."
        },
        {
          name: "Business Package – Astro Professional",
          price: "~IDR 3.5 million",
          desc: "With premium animation & visuals."
        },
        {
          name: "Premium Package – Next.js Scale Ready",
          price: "IDR 7–12 million",
          desc: "For large companies."
        },
        {
          name: "CRM Starter Package",
          price: "IDR 15–25 million",
          desc: ""
        }
      ]
    },
    aiAddons: {
      tabLabel: "Smart Automation",
      headline: "What if your operations run without manual follow-ups?",
      eyebrow: "Intelligence Layer",
      narrative: "We help teams eliminate repetitive tasks by automating approvals, reporting, and data synchronization across systems. From lead routing and invoicing to compliance checks and notifications — our automation adapts to how your team works, not the other way around.",
      impacts: [
        { stat: "60%", label: "Reduction in manual operations", description: "Automate repetitive tasks and free up your team" },
        { stat: "Zero", label: "Human errors in workflows", description: "Minimize mistakes in approval & reporting processes" },
        { stat: "Any", label: "System integration", description: "Connect ERP, CRM, internal tools, and third-party APIs" },
        { stat: "∞", label: "Scalable automation", description: "Automation that grows with your business" }
      ],
      useCases: {
        title: "What can be automated?",
        items: ["Lead routing & scoring", "Invoice generation", "Approval workflows", "Compliance checks", "Report scheduling", "Data synchronization", "Notification systems", "Pipeline updates"]
      },
      pricingNote: "Pricing is determined after understanding your workflow and integration needs.",
      cta: {
        primary: "Explore Automation Opportunities",
        secondary: "Free consultation to identify automation use cases"
      }
    },
    customSoftware: {
      title: "Custom Software Development",
      subtitle: "Tailored Software Solutions Built for Your Business",
      description: "We build custom software tailored to your unique business needs. From web to mobile applications, from management systems to complex integrations — all built specifically for you.",
      packages: [
        {
          name: "Custom Software Development",
          description: "Web & Mobile applications tailored to your business processes. For growing businesses, internal systems, or operational tools.",
          price: "IDR 20,000,000 – 120,000,000",
          bestFor: "Growing businesses, internal systems, MVP & operational tools",
          features: [
            "Web & Mobile applications",
            "Tailored to your business processes",
            "Internal systems & dashboards",
            "MVP development",
            "Operational tools",
            "Custom integrations",
            "Dedicated project manager"
          ],
          revisions: ["Revisions included in development", "Post-launch support available"]
        },
        {
          name: "Enterprise Software Solution",
          description: "Complete enterprise system with multiple modules and complex integrations.",
          price: "IDR 150,000,000 – 800,000,000+",
          bestFor: "Large companies needing integrated and scalable systems",
          features: [
            "Multiple modules & features",
            "Complex integrations",
            "Scalable architecture",
            "Advanced security & compliance",
            "Custom reporting & analytics",
            "Team collaboration tools",
            "Dedicated project manager",
            "SLA guarantee",
            "Security audit & certification",
            "Training & documentation"
          ],
          revisions: ["Unlimited small revisions during development", "10x major revisions"]
        }
      ]
    },
    recurringRevenue: {
      title: "Recurring Revenue Solutions",
      subtitle: "Sustainable Revenue for Stable Business",
      description: "Build stable and sustainable revenue with maintenance and licensing packages. You pay to reduce risk, not to add features.",
      maintenance: {
        title: "Maintenance & Support Plans",
        label: "Maintenance & Support",
        description: "Ensure your application always runs optimally with ongoing support.",
        packages: [
          {
            name: "Basic Maintenance",
            price: "IDR 2,000,000/month",
            features: [
              "Bug fixes & security updates",
              "Server monitoring",
              "Email support (5 business days)",
              "Minor updates (monthly)"
            ],
            sla: "Response time: 48 hours"
          },
          {
            name: "Pro Maintenance",
            price: "IDR 5,000,000/month",
            features: [
              "All Basic features",
              "Performance optimization",
              "Small feature updates",
              "Priority support (24/7)",
              "Monthly health check",
              "Uptime monitoring & alerts"
            ],
            sla: "Response time: 4 hours"
          },
          {
            name: "Enterprise Maintenance",
            price: "IDR 10,000,000 – 20,000,000/month",
            features: [
              "All Pro features",
              "Dedicated support team",
              "Custom feature development",
              "SLA guarantee (99.9% uptime)",
              "Quarterly strategy review",
              "Security audit & compliance",
              "On-site support (optional)"
            ],
            sla: "Response time: 1 hour, 99.9% uptime SLA"
          }
        ]
      },
      licensing: {
        title: "Software Licensing (White-label)",
        label: "Licensing Plans",
        description: "Access to base system + customization. Pay once for setup, then monthly license for ongoing access.",
        packages: [
          {
            name: "CRM Base License",
            setupPrice: "IDR 50,000,000",
            monthlyPrice: "IDR 3,000,000 – 5,000,000/month",
            bestFor: "Companies needing CRM with limited customization",
            features: [
              "Base CRM system (ready-to-use)",
              "Custom branding & logo",
              "Basic customization (5 modules)",
              "User management (up to 50 users)",
              "Monthly updates & bug fixes",
              "Email support"
            ]
          },
          {
            name: "Enterprise License",
            setupPrice: "IDR 100,000,000 – 200,000,000",
            monthlyPrice: "IDR 10,000,000 – 20,000,000/month",
            bestFor: "Large companies needing complete system with full customization",
            features: [
              "Full system access (CRM + ERP modules)",
              "Unlimited customization",
              "Unlimited users",
              "Priority development queue",
              "Dedicated account manager",
              "Custom integrations",
              "White-label support",
              "Source code access (optional)"
            ]
          }
        ]
      }
    }
  }
};
