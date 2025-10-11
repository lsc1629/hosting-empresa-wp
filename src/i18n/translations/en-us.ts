// 🇺🇸 TRADUCCIONES ESPECÍFICAS PARA ESTADOS UNIDOS
// Optimizado para mercado empresarial estadounidense

export const enUS = {
  // 🏠 Navegación y estructura
  nav: {
    home: 'Home',
    wordpressHosting: 'WordPress Hosting',
    woocommerceHosting: 'WooCommerce Hosting',
    businessHosting: 'Business Hosting',
    compareHosting: 'Compare Hosting',
    blog: 'Blog',
    contact: 'Contact',
    language: 'Language',
    getStarted: 'Get Started'
  },

  // 🦸‍♂️ Hero Section
  hero: {
    title: 'Enterprise Hosting Solutions that Scale with Your Business - 99.9% Uptime',
    subtitle: 'Lightning-fast SSD web hosting with 24/7 expert support and complete SOC2 compliance',
    description: 'Join 2M+ businesses that trust SiteGround for managed enterprise hosting. From startups to Fortune 500 companies with dedicated server solutions.',
    cta: 'Start Enterprise Hosting',
    ctaSecondary: 'View Hosting Plans & Pricing',
    trustBadges: {
      soc2: 'SOC2 Compliant Hosting',
      hipaa: 'HIPAA Ready Infrastructure',
      pci: 'PCI-DSS Certified Security',
      uptime: '99.9% Uptime SLA Guaranteed'
    }
  },

  // 💼 Business Features
  businessFeatures: {
    title: 'Built for American Businesses',
    subtitle: 'Everything your enterprise needs to succeed online',
    features: [
      {
        title: 'Enterprise Performance',
        description: 'Lightning-fast speeds with Google Cloud Platform and enterprise-grade CDN',
        icon: '🚀'
      },
      {
        title: 'Advanced Security',
        description: 'SOC2, HIPAA, and PCI-DSS compliant hosting with advanced threat protection',
        icon: '🔒'
      },
      {
        title: '24/7 Expert Support',
        description: 'US-based support team with average response time under 10 minutes',
        icon: '📞'
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Auto-scaling resources to handle traffic spikes from 1K to 10M+ visitors',
        icon: '📈'
      },
      {
        title: 'Developer Tools',
        description: 'Git integration, staging environments, and WP-CLI for development teams',
        icon: '⚙️'
      },
      {
        title: 'Backup & Recovery',
        description: 'Daily automated backups with 30-day retention and one-click restore',
        icon: '💾'
      }
    ]
  },

  // 💰 Pricing
  pricing: {
    title: 'Enterprise Pricing Plans',
    subtitle: 'Choose the perfect plan for your business growth',
    currency: 'USD',
    currencySymbol: '$',
    period: '/month',
    plans: {
      startup: {
        name: 'StartUp',
        price: '2.99',
        originalPrice: '14.99',
        description: 'Perfect for small businesses and startups',
        features: [
          '10 GB Web Space',
          '~10,000 Monthly Visits',
          '1 Website',
          'Free SSL Certificate',
          'Daily Backups',
          'Email Accounts',
          '24/7 Support'
        ],
        cta: 'Start Growing',
        popular: false
      },
      growbig: {
        name: 'GrowBig',
        price: '4.99',
        originalPrice: '24.99',
        description: 'Ideal for growing businesses and agencies',
        features: [
          '20 GB Web Space',
          '~100,000 Monthly Visits',
          'Unlimited Websites',
          'Free SSL Certificate',
          'Daily Backups',
          'Staging Environment',
          'Advanced Caching',
          'Priority Support'
        ],
        cta: 'Scale Your Business',
        popular: true
      },
      gogeek: {
        name: 'GoGeek',
        price: '7.99',
        originalPrice: '39.99',
        description: 'For high-traffic sites and enterprises',
        features: [
          '40 GB Web Space',
          '~400,000 Monthly Visits',
          'Unlimited Websites',
          'Free SSL Certificate',
          'Daily Backups',
          'Staging Environment',
          'Advanced Caching',
          'White-label Options',
          'Priority Support'
        ],
        cta: 'Go Enterprise',
        popular: false
      }
    },
    guarantee: '30-Day Money-Back Guarantee',
    note: 'All plans include free domain, SSL certificate, and daily backups'
  },

  // 🏆 WordPress Specific
  wordpress: {
    title: 'WordPress Hosting for US Businesses',
    subtitle: 'Optimized for WordPress with enterprise-grade performance',
    features: [
      'WordPress Pre-installed',
      'Automatic WordPress Updates',
      'WordPress Staging',
      'WP-CLI Access',
      'WordPress Multisite',
      'Advanced WordPress Security'
    ],
    cta: 'Launch WordPress Site'
  },

  // 🛒 WooCommerce Specific
  woocommerce: {
    title: 'WooCommerce Hosting for US E-commerce',
    subtitle: 'Power your online store with optimized WooCommerce hosting',
    features: [
      'WooCommerce Pre-installed',
      'E-commerce Optimizations',
      'SSL Certificate Included',
      'PCI-DSS Compliance',
      'Shopping Cart Recovery',
      'Payment Gateway Integration'
    ],
    cta: 'Start Selling Online'
  },

  // 💬 Testimonials
  testimonials: {
    title: 'Trusted by American Businesses',
    subtitle: 'See what our enterprise customers say about us',
    items: [
      {
        name: 'Sarah Johnson',
        title: 'CTO',
        company: 'TechStart Inc.',
        location: 'San Francisco, CA',
        quote: 'SiteGround helped us scale from 10K to 1M users seamlessly. Their enterprise support is unmatched.',
        rating: 5,
        avatar: '/images/testimonials/sarah-johnson.jpg'
      },
      {
        name: 'Michael Chen',
        title: 'IT Director',
        company: 'FinanceFlow',
        location: 'New York, NY',
        quote: 'The SOC2 compliance and security features gave us confidence to migrate our financial platform.',
        rating: 5,
        avatar: '/images/testimonials/michael-chen.jpg'
      },
      {
        name: 'Emily Rodriguez',
        title: 'Founder',
        company: 'E-commerce Plus',
        location: 'Austin, TX',
        quote: 'Our WooCommerce store handles Black Friday traffic without any issues. Amazing performance!',
        rating: 5,
        avatar: '/images/testimonials/emily-rodriguez.jpg'
      }
    ]
  },

  // 📊 Case Studies
  caseStudies: {
    title: 'Success Stories from US Companies',
    subtitle: 'Real results from real businesses',
    featured: {
      title: 'How TechCorp Scaled to 10M Users',
      company: 'TechCorp',
      industry: 'SaaS Platform',
      location: 'Seattle, WA',
      description: 'Learn how TechCorp used SiteGround enterprise hosting to handle massive growth while maintaining 99.99% uptime.',
      metrics: [
        { value: '300%', label: 'Performance Increase' },
        { value: '99.99%', label: 'Uptime Achieved' },
        { value: '50%', label: 'Cost Reduction' }
      ],
      cta: 'Read Full Case Study'
    }
  },

  // 🔒 Security & Compliance
  security: {
    title: 'Enterprise-Grade Security',
    subtitle: 'Built for businesses that can\'t afford downtime',
    features: [
      {
        title: 'SOC2 Type II Compliance',
        description: 'Audited security controls for enterprise customers',
        icon: '🛡️'
      },
      {
        title: 'HIPAA Ready Infrastructure',
        description: 'Healthcare-compliant hosting for medical businesses',
        icon: '🏥'
      },
      {
        title: 'PCI-DSS Certified',
        description: 'Secure payment processing for e-commerce sites',
        icon: '💳'
      },
      {
        title: 'Advanced DDoS Protection',
        description: 'Multi-layer protection against cyber attacks',
        icon: '🔐'
      }
    ]
  },

  // 📞 Support
  support: {
    title: '24/7 US-Based Expert Support',
    subtitle: 'Get help when you need it from WordPress experts',
    features: [
      'Average response time: 10 minutes',
      'US-based support team',
      'WordPress certified experts',
      'Phone, chat, and ticket support',
      'Proactive monitoring',
      'Free site migrations'
    ],
    cta: 'Contact Support'
  },

  // 🚀 Performance
  performance: {
    title: 'Blazing Fast Performance',
    subtitle: 'Speed that converts visitors into customers',
    metrics: [
      { value: '<1.5s', label: 'Average Load Time' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '6', label: 'Global Data Centers' },
      { value: '24/7', label: 'Performance Monitoring' }
    ],
    features: [
      'Google Cloud Platform',
      'Enterprise CDN',
      'SSD Storage',
      'HTTP/2 & HTTP/3',
      'Advanced Caching',
      'Image Optimization'
    ]
  },

  // 🌐 Global Infrastructure
  infrastructure: {
    title: 'Global Infrastructure, US Focus',
    subtitle: 'Powered by Google Cloud with US data centers',
    locations: [
      'Iowa (us-central1)',
      'South Carolina (us-east1)',
      'Oregon (us-west1)',
      'Northern Virginia (us-east4)',
      'Los Angeles (us-west2)',
      'Salt Lake City (us-west3)'
    ]
  },

  // 📈 Analytics & Insights
  analytics: {
    title: 'Business Intelligence Built-in',
    subtitle: 'Make data-driven decisions with built-in analytics',
    features: [
      'Google Analytics Integration',
      'Performance Monitoring',
      'Visitor Analytics',
      'Conversion Tracking',
      'SEO Insights',
      'Custom Reports'
    ]
  },

  // 🔄 Migration
  migration: {
    title: 'Free Website Migration',
    subtitle: 'We handle the technical details, you focus on your business',
    process: [
      'Contact our migration team',
      'We analyze your current setup',
      'Migration performed with zero downtime',
      'Full testing and optimization',
      'Go live with confidence'
    ],
    cta: 'Start Free Migration'
  },

  // 📱 Mobile & Responsive
  mobile: {
    title: 'Mobile-First Hosting',
    subtitle: 'Optimized for mobile users and Google Core Web Vitals',
    features: [
      'Mobile-optimized servers',
      'AMP support',
      'Progressive Web App ready',
      'Core Web Vitals optimization',
      'Mobile caching',
      'Responsive design tools'
    ]
  },

  // 🎯 Industries
  industries: {
    title: 'Trusted by US Industries',
    subtitle: 'Specialized solutions for different business sectors',
    sectors: [
      {
        name: 'Healthcare',
        description: 'HIPAA-compliant hosting for medical practices',
        icon: '🏥',
        features: ['HIPAA Ready', 'Secure Patient Data', 'Compliance Monitoring']
      },
      {
        name: 'Financial Services',
        description: 'SOC2 compliant hosting for fintech companies',
        icon: '🏦',
        features: ['SOC2 Type II', 'PCI-DSS', 'Advanced Security']
      },
      {
        name: 'E-commerce',
        description: 'High-performance hosting for online stores',
        icon: '🛒',
        features: ['WooCommerce Optimized', 'SSL Included', 'Payment Security']
      },
      {
        name: 'SaaS',
        description: 'Scalable infrastructure for software companies',
        icon: '💻',
        features: ['Auto-scaling', 'API Ready', 'Developer Tools']
      }
    ]
  },

  // 📞 Contact
  contact: {
    title: 'Ready to Get Started?',
    subtitle: 'Talk to our enterprise specialists today',
    phone: '+1 (866) 606-2606',
    email: 'enterprise@hostingempresa.com',
    hours: 'Available 24/7/365',
    cta: 'Contact Sales Team',
    form: {
      name: 'Full Name',
      email: 'Business Email',
      company: 'Company Name',
      phone: 'Phone Number',
      message: 'Tell us about your project',
      submit: 'Get Enterprise Quote'
    }
  },

  // 🔍 SEO
  seo: {
    title: 'SEO-Optimized Hosting',
    subtitle: 'Built for search engine success',
    features: [
      'Fast loading speeds',
      'SSL certificates included',
      'CDN for global reach',
      'Core Web Vitals optimization',
      'Schema markup support',
      'SEO tools integration'
    ]
  },

  // 🎓 Resources
  resources: {
    title: 'Enterprise Resources',
    subtitle: 'Everything you need to succeed online',
    items: [
      {
        title: 'WordPress Enterprise Guide',
        description: 'Complete guide to WordPress for businesses',
        type: 'Guide',
        cta: 'Download Free'
      },
      {
        title: 'Security Best Practices',
        description: 'Protect your business website from threats',
        type: 'Whitepaper',
        cta: 'Get Whitepaper'
      },
      {
        title: 'Performance Optimization',
        description: 'Speed up your website for better conversions',
        type: 'Checklist',
        cta: 'Download Checklist'
      }
    ]
  },

  // 🏅 Guarantees
  guarantees: {
    title: 'Our Promises to You',
    items: [
      {
        title: '99.9% Uptime SLA',
        description: 'We guarantee your site stays online',
        icon: '⏰'
      },
      {
        title: '30-Day Money Back',
        description: 'Not satisfied? Get your money back',
        icon: '💰'
      },
      {
        title: 'Free Migration',
        description: 'We move your site for free',
        icon: '🔄'
      },
      {
        title: '24/7 Support',
        description: 'Expert help whenever you need it',
        icon: '📞'
      }
    ]
  },

  // 📊 Comparison
  comparison: {
    title: 'Why Choose SiteGround?',
    subtitle: 'See how we compare to other hosting providers',
    competitors: ['GoDaddy', 'Bluehost', 'HostGator', 'WP Engine'],
    features: [
      'Google Cloud Platform',
      'Free SSL Certificate',
      'Daily Backups',
      'Staging Environment',
      'WordPress Optimization',
      '24/7 Expert Support',
      'Free Migration',
      'Money-Back Guarantee'
    ]
  },

  // 🎉 Special Offers
  offers: {
    title: 'Limited Time Offer',
    subtitle: 'Save up to 80% on your first year',
    discount: 'UP TO 80% OFF',
    expires: 'Offer expires in:',
    cta: 'Claim This Deal',
    terms: 'Terms and conditions apply. Renewal at regular price.'
  },

  // 🤖 FAQ AEO Optimized for AI
  faqAEO: {
    title: 'Enterprise Hosting Frequently Asked Questions',
    subtitle: 'Direct answers optimized for search engines and AI',
    questions: [
      {
        question: 'What is enterprise hosting?',
        answer: 'Enterprise hosting is a web hosting service designed for businesses requiring superior performance, security, and specialized support. It includes features like 99.9% uptime, 24/7 support, free SSL, and compliance with regulations like SOC2 and HIPAA.',
        keywords: ['enterprise hosting', 'web hosting', 'business', 'performance', 'security']
      },
      {
        question: 'What\'s the difference between shared and enterprise hosting?',
        answer: 'Enterprise hosting provides dedicated resources, faster speeds, advanced security, and priority support, while shared hosting shares resources among multiple websites, which can impact performance.',
        keywords: ['shared hosting', 'enterprise hosting', 'dedicated resources', 'speed', 'performance']
      },
      {
        question: 'Why choose SiteGround for enterprise hosting?',
        answer: 'SiteGround offers enterprise hosting with Google Cloud technology, guaranteed 99.9% uptime, 24/7 expert support, SOC2 compliance, and specific optimizations for WordPress and WooCommerce.',
        keywords: ['SiteGround', 'Google Cloud', 'uptime', 'expert support', 'SOC2', 'WordPress']
      },
      {
        question: 'How much does enterprise hosting cost?',
        answer: 'SiteGround enterprise plans start from $6.99/month with all professional features included: free SSL, daily backups, 24/7 support, and advanced optimizations.',
        keywords: ['hosting cost', 'enterprise plans', 'SiteGround', 'free SSL', 'backups']
      },
      {
        question: 'What does managed WordPress hosting include?',
        answer: 'Managed WordPress hosting includes WordPress-specific optimizations, advanced caching, free staging, automatic updates, WordPress security, and specialized WP support.',
        keywords: ['managed WordPress hosting', 'WordPress optimizations', 'caching', 'staging', 'WordPress security']
      },
      {
        question: 'Is SiteGround enterprise hosting secure?',
        answer: 'Yes, SiteGround offers advanced security with free SSL, malware protection, enterprise firewall, automatic daily backups, and compliance with SOC2, HIPAA, and PCI-DSS regulations.',
        keywords: ['hosting security', 'free SSL', 'malware protection', 'firewall', 'SOC2', 'HIPAA']
      },
      {
        question: 'What is cloud hosting for enterprises?',
        answer: 'Enterprise cloud hosting uses multiple connected servers to ensure maximum availability, automatic scalability, and superior performance. Ideal for businesses with variable traffic.',
        keywords: ['cloud hosting', 'scalability', 'availability', 'performance', 'variable traffic']
      },
      {
        question: 'Does enterprise hosting include free migration?',
        answer: 'Yes, SiteGround includes free website migration from your current host with zero downtime. Our technical team handles the entire migration process.',
        keywords: ['free migration', 'website migration', 'zero downtime', 'technical team']
      }
    ]
  },

  // 🔗 Footer
  footer: {
    company: {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Partners', 'Affiliates']
    },
    hosting: {
      title: 'Hosting',
      links: ['WordPress Hosting', 'WooCommerce Hosting', 'Business Hosting', 'VPS Hosting', 'Dedicated Servers']
    },
    support: {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'System Status', 'Report Abuse', 'Terms of Service']
    },
    resources: {
      title: 'Resources',
      links: ['Blog', 'Tutorials', 'Webinars', 'Case Studies', 'White Papers']
    },
    copyright: '© 2025 Hosting Empresas. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  }
};
