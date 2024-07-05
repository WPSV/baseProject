import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:locale/oportunidades",
        destination: '/:locale/auth/register/opportunities',
      }
    ]
  }
};

export default withNextIntl(nextConfig);