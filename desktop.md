Set up desktop

```console
mkdir -p packages/
npm init electron-app@latest desktop -- --template=webpack-typescript
npm install --save-dev copy-webpack-plugin @types/copy-webpack-plugin
```

```forge.config.ts
        entryPoints: [
          {
            remove index.html
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
```

```webpack.main.config
import CopyPlugin from "copy-webpack-plugin";
(...)
  plugins: [
    ...plugins,
    new CopyPlugin({
      patterns: [
        { from: "../web/out", to: "./public" },
      ],
      options: {
        concurrency: 100,
      },
    }),
```

Port dynamic = 0



```console
mkdir -p packages/
npm init electron-app@latest desktop -- --template=vite-typescript
```

```console
npm install express
```


"scripts": {
    "start": "electron-forge start",
    "package": "cp -r ../web/out/ www && electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish",
    "lint": "eslint --ext .ts,.tsx ."
},

```vite.renderer.config.ts
@@ -14,11 +14,15 @@ export default defineConfig((env) => {
     base: './',
     build: {
       outDir: `.vite/renderer/${name}`,
+      rollupOptions: {
+        input: './www/index.html',
+      },
     },
     plugins: [pluginExposeRenderer(name)],
     resolve: {
       preserveSymlinks: true,
     },
     clearScreen: false,
+    publicDir: './www'
   } as UserConfig;
 });
```