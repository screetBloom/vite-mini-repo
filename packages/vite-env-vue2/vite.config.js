import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
const { createVuePlugin } = require('vite-plugin-vue2')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    createVuePlugin(),
    {
      name: 'vite-plugin-env-compatible',
      enforce: 'pre',
      config(config) {
        const myDefine = {
          'process.env.VITE': JSON.stringify(true),
          'process.env.VITE_USER_NODE_ENV': JSON.stringify('test'),
        };

        config.define = {
          ...(config.define || {}),
          ...myDefine,
        }
      },
    },
  ],
})
