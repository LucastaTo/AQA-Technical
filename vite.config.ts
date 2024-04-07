import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd())

  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:8000'}`
  const PORT = `${env.VITE_PORT ?? '3000'}`

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(PORT)
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@pages/*': path.resolve(__dirname, './src/pages'),
        '@utils/*': path.resolve(__dirname, './src/utils'),
        '@reducers/*': path.resolve(__dirname, './src/redux'),
        '@hooks/*': path.resolve(__dirname, './src/hooks'),
        '@apis/*': path.resolve(__dirname, './src/api'),
        '@assets/*': path.resolve(__dirname, './src/assets')
      }
    }
  })
}
