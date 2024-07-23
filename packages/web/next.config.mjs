/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native': 'react-native-web'
      };
      return config;
    },
  };
  
  export default nextConfig;
  