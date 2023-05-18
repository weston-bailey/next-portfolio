/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // do not use https://
    // array of whitelisted image domains
    domains: ["placekitten.com"]
  }
}

module.exports = nextConfig
