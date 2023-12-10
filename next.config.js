/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    // Variables needs to be here to be fetched first
    prependData: `@import "src/variables.scss";`,
  },

  i18n: {
    locales: ['__default', 'en', 'sv'],
    defaultLocale: 'sv',
    //defaultLocale: '__default',
    // Ask for consent and set to true if consent is given
    localeDetection: false,
  },

  /*
  async redirects() {
    return [
      {
        source: '/sida9',
        destination: '/sida10',
        permanent: true,
      },
      {
        source: '/sida11',
        destination: '/sida12',
        permanent: true,
      },
    ]
  },
  */
}

module.exports = nextConfig
