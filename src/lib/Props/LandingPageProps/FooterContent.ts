// lib/FooterProps/footerContent.ts
const footerContent = {
  productLinks: {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Templates', href: '/templates' },
    ],
  },
  companyLinks: {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  copyrightText: '© 2025 JournalMind. All rights reserved.',
  socialLinks: [
    { 
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: 'Instagram'
    },
    { 
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: 'Twitter'
    },
    // { 
    //   name: 'Spotify',
    //   href: 'https://spotify.com',
    //   icon: 'Music' // Using Music icon for Spotify
    // }
]
};

export default footerContent;