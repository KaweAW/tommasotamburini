/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        // Keep links to the previous CV file name working.
        source: "/cv-tommaso-tamburini.pdf",
        destination: "/Tommaso-Tamburini-Resume.pdf",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
