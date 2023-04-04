/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    CONTENTFUL_SPACE_ID: 'zlug9c53a7am',
    CONTENTFUL_ACCESS_KEY: 'p83Ibcax1fUDK3devhMo9jwCZ2B6Yk8JI6ZnfnWTo8o'
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '',
  //       port: '3000',
  //       pathname: '',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
