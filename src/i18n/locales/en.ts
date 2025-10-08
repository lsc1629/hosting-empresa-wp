export const en = {
  // Navigation
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    support: 'Support',
    about: 'About',
    cta: 'Get Started Now'
  },

  // Hero Section - Using P.A.S. Framework
  hero: {
    // Problem
    problem: 'Tired of Slow Loading Times?',
    // Agitation
    agitation: 'Every second your website takes to load, you\'re losing visitors, sales, and Google rankings. Studies show 53% of mobile users abandon sites that take over 3 seconds to load.',
    // Solution
    solution: 'Get Lightning-Fast Hosting with SiteGround',
    description: 'Join over 2.8 million websites powered by SiteGround\'s premium infrastructure. 99.9% uptime guarantee, free SSL, daily backups, and 24/7 expert support.',
    cta: 'Start Your Website Today',
    ctaSecondary: 'See Plans & Pricing',
    trustBadge: 'Trusted by 2.8M+ websites worldwide',
    guarantee: '30-Day Money-Back Guarantee'
  },

  // Problems Section (P.A.S. - Problem)
  problems: {
    title: 'Are These Web Hosting Nightmares Keeping You Up at Night?',
    subtitle: 'You\'re not alone. Thousands of website owners struggle with these critical issues every day',
    list: [
      {
        title: 'Slow Loading Speeds',
        description: 'Visitors leave before your page even loads. Your bounce rate is skyrocketing and conversions are plummeting.',
        icon: 'zap-off'
      },
      {
        title: 'Constant Downtime',
        description: 'Your site goes down during peak hours. Lost sales, frustrated customers, and damaged reputation.',
        icon: 'server-crash'
      },
      {
        title: 'Security Vulnerabilities',
        description: 'Hackers are constantly probing for weaknesses. One breach could destroy years of hard work.',
        icon: 'shield-alert'
      },
      {
        title: 'Poor Customer Support',
        description: 'When problems arise, you\'re left waiting hours or days for a response. Your business can\'t afford that.',
        icon: 'message-square-x'
      },
      {
        title: 'Hidden Fees & Price Hikes',
        description: 'What started as "cheap hosting" turns into a nightmare of unexpected charges and renewal price shocks.',
        icon: 'dollar-sign'
      },
      {
        title: 'Complicated Management',
        description: 'You need a PhD just to perform basic tasks. Time wasted on technical issues instead of growing your business.',
        icon: 'settings'
      }
    ],
    bottomHint: 'Sound familiar? You\'re not alone in this struggle...'
  },

  // Agitation Section (P.A.S. - Agitation)
  agitation: {
    title: 'Every Day You Wait, You\'re Losing Money',
    subtitle: 'Here\'s what bad hosting is REALLY costing you',
    stats: [
      {
        number: '53%',
        label: 'Of users abandon sites that take over 3 seconds to load',
        impact: 'Are you losing half your potential customers?'
      },
      {
        number: '$5,600',
        label: 'Average cost of 1 hour of downtime for small businesses',
        impact: 'How many times has your site gone down this month?'
      },
      {
        number: '32%',
        label: 'Drop in SEO rankings from poor site performance',
        impact: 'Your competitors are climbing while you\'re falling'
      },
      {
        number: '$200,000',
        label: 'Average cost of a security breach for small businesses',
        impact: 'Is your current host protecting you?'
      }
    ],
    callout: 'The longer you stay with unreliable hosting, the more it\'s costing you in lost revenue, damaged reputation, and missed opportunities.'
  },

  // Solution Section (P.A.S. - Solution)
  solution: {
    title: 'Introducing SiteGround: The Hosting Solution That Actually Works',
    subtitle: 'Everything you need for a fast, secure, and reliable website',
    intro: 'SiteGround isn\'t just another hosting provider. It\'s the complete solution to every hosting problem you\'ve ever faced.',
    features: [
      {
        title: 'Ultra-Fast Loading Speeds',
        description: 'Lightning-fast SSD storage, free CDN, and advanced caching make your site 3x faster',
        benefit: 'Lower bounce rates, higher conversions, better SEO'
      },
      {
        title: '99.9% Uptime Guarantee',
        description: 'Enterprise-grade infrastructure ensures your site is always online when your customers need it',
        benefit: 'No more lost sales from downtime'
      },
      {
        title: 'Military-Grade Security',
        description: 'Free SSL, daily backups, proactive monitoring, and automatic updates keep hackers out',
        benefit: 'Sleep peacefully knowing your site is protected'
      },
      {
        title: '24/7 Expert Support',
        description: 'Real humans (not bots) available via chat, phone, and tickets. Average response time: under 10 minutes',
        benefit: 'Get help when you need it, not hours later'
      },
      {
        title: 'Transparent Pricing',
        description: 'No hidden fees, no surprise charges. What you see is what you pay.',
        benefit: 'Budget with confidence'
      },
      {
        title: 'Easy Management',
        description: 'User-friendly control panel, one-click WordPress install, and automated maintenance',
        benefit: 'Focus on your business, not technical headaches'
      }
    ]
  },

  // Features
  features: {
    title: 'Premium Features Included',
    subtitle: 'Everything you need to succeed online',
    list: [
      { title: 'Free SSL Certificate', icon: 'lock' },
      { title: 'Free Daily Backups', icon: 'database' },
      { title: 'Free CDN', icon: 'globe' },
      { title: 'Free Email', icon: 'mail' },
      { title: 'WordPress Optimized', icon: 'wordpress' },
      { title: 'SSD Storage', icon: 'hard-drive' },
      { title: 'HTTP/2 & PHP 8', icon: 'code' },
      { title: 'Free Site Migration', icon: 'move' }
    ]
  },

  // Pricing
  pricing: {
    title: 'Choose Your Perfect Plan',
    subtitle: 'All plans include our 30-day money-back guarantee',
    currency: '$',
    period: '/month',
    save: 'Save {{amount}}%',
    mostPopular: 'Most Popular',
    plans: [
      {
        name: 'StartUp',
        price: '2.99',
        originalPrice: '17.99',
        description: 'Perfect for getting started',
        features: [
          '1 Website',
          '10 GB SSD Storage',
          '~10,000 Visits Monthly',
          'Free SSL & Daily Backup',
          'Free CDN',
          'Free Email',
          '24/7 Support'
        ],
        cta: 'Get StartUp Plan'
      },
      {
        name: 'GrowBig',
        price: '4.99',
        originalPrice: '27.99',
        description: 'For growing websites',
        features: [
          'Unlimited Websites',
          '20 GB SSD Storage',
          '~100,000 Visits Monthly',
          'Everything in StartUp',
          'On-Demand Backup',
          '30% Speed Boost',
          'Free Site Migration',
          'Priority Support'
        ],
        cta: 'Get GrowBig Plan',
        popular: true
      },
      {
        name: 'GoGeek',
        price: '7.99',
        originalPrice: '39.99',
        description: 'For high-traffic sites',
        features: [
          'Unlimited Websites',
          '40 GB SSD Storage',
          '~400,000 Visits Monthly',
          'Everything in GrowBig',
          'Advanced Performance',
          'White-Label Options',
          'Git Integration',
          'Highest Priority Support'
        ],
        cta: 'Get GoGeek Plan'
      }
    ]
  },

  // Testimonials
  testimonials: {
    title: 'Join 2.8 Million Happy Customers',
    subtitle: 'See why website owners choose SiteGround',
    items: [
      {
        name: 'Sarah Johnson',
        role: 'E-commerce Owner',
        content: 'My site speed increased by 300% after switching to SiteGround. Sales are up 45% and my SEO rankings have never been better.',
        rating: 5
      },
      {
        name: 'Michael Chen',
        role: 'Digital Agency',
        content: 'We migrated 50+ client sites to SiteGround. The performance improvement is remarkable and support is outstanding.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Blogger',
        content: 'After years of hosting nightmares, SiteGround is a breath of fresh air. Fast, reliable, and the support team actually cares.',
        rating: 5
      }
    ]
  },

  // FAQ
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know',
    items: [
      {
        question: 'Can I migrate my existing website for free?',
        answer: 'Yes! With our GrowBig and GoGeek plans, we\'ll migrate your website completely free. Our experts handle everything so you can relax.'
      },
      {
        question: 'What if I\'m not satisfied?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied, we\'ll refund your payment, no questions asked.'
      },
      {
        question: 'How fast is SiteGround really?',
        answer: 'Our clients see average speed improvements of 200-300%. We use SSD storage, HTTP/2, PHP 8, free CDN, and advanced caching to ensure lightning-fast performance.'
      },
      {
        question: 'Is my website secure with SiteGround?',
        answer: 'Absolutely. We provide free SSL certificates, daily backups, proactive security monitoring, automatic updates, and 24/7 security scanning to keep your site safe.'
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. We\'ll handle the transition smoothly without any downtime.'
      }
    ]
  },

  // CTA
  cta: {
    title: 'Ready to Transform Your Website?',
    subtitle: 'Join millions of successful websites powered by SiteGround',
    button: 'Get Started Now',
    guarantee: '30-Day Money-Back Guarantee • No Risk • Cancel Anytime',
    urgency: 'Limited time offer - Save up to 83%'
  },

  // Footer
  footer: {
    tagline: 'Premium web hosting for businesses that care about performance',
    copyright: '© 2024 SiteGround Hosting Promotion. All rights reserved.',
    affiliate: 'This is an affiliate website. We may earn a commission when you sign up through our links.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us'
    }
  }
};
