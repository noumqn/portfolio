const siteMetadata = {
  title: 'Syed Nouman',
  author: 'Syed Nouman',
  headerTitle: 'syednouman',
  description: 'Game Designer at Vincell Studios',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'noumanafzal4@gmail.com',
  github: 'https://github.com/noumqn',
  twitter: 'https://twitter.com/noumqn',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/in/noumqn/',
  spotify: 'https://open.spotify.com/',
  steam: 'https://steamcommunity.com/id/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
