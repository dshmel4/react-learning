import ImportMetaEnvPlugin from '@import-meta-env/unplugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx|ts)$/,
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false,
      },
    }),
    ImportMetaEnvPlugin.vite({ example: '.env.example', env: '.env' }),
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      hooks: '/src/hooks',
      icons: '/src/icons',
      pages: '/src/pages',
      providers: '/src/providers',
      router: '/src/router',
      store: '/src/store',
      types: '/src/types',
      ui: '/src/ui',
      utils: '/src/utils',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: 'localhost',
    strictPort: true,
    port: 3000,
  },
})
