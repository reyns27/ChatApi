import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/socket.io':{
        target:"https://chatapi-dev-sqxp.1.us-1.fl0.io:8080",
        ws:true
      }
    }
  }
})
