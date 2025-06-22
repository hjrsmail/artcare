import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import path from 'path';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin'; 

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        compression({ algorithm: 'gzip' }),

        // 👇 Plugin untuk optimasi gambar saat build
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 70, 
            },
            pngquant: {
                quality: [0.65, 0.8],
                speed: 4,
            },
            svgo: {
                plugins: [
                    { name: 'removeViewBox' },
                    { name: 'removeEmptyAttrs', active: false },
                ],
            },
        }),
    ],

    esbuild: {
        jsx: 'automatic',
    },

    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': path.resolve(__dirname, 'resources/js'),
            '~': path.resolve(__dirname , 'public/assets'),
        },
    },
});
