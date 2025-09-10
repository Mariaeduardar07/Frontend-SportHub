/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.menin.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sorting.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'diariodonordeste.verdesmares.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gov.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.todamateria.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cob.org.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.cob.org.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.olympics.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hojepr.com',
        pathname: '/**',
      },
      // Configuração mais permissiva para imagens externas
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig