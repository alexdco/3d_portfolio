import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: {
                enabled: true,
                buildMode: true,
            },
            eslint: {
                enabled: false,
            },
        }),
    ],
});