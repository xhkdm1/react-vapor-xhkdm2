import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: "/", //github에 레포로 뜨게 하기 위함 
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
