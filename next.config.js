module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  env: {
    MONGODB_CLIENT: process.env.MONGODB_CLIENT,
  }
}
