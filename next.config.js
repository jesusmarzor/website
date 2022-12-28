const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.URL],
  }
}
const nextTranslate = require('next-translate')

module.exports = nextTranslate(nextConfig)
