import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
    build: {
    outDir: 'dist', // output directory
    sourcemap: true, // generate source maps
    base:'/frontend/'
  }
})
