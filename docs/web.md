# Web
Créer le projet web
```console
    npx create-next-app@latest web
```

```console
    npm install react-native-web
```

```package.json
(...)
  "app": "0.0.1"
(...)
```

```nextConfig.mjs
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
```
