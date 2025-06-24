import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Wrap App in component to use AOS
        const MainApp = () => {
            useEffect(() => {
                AOS.init({ duration: 1000, once: true, delay: 300, });
            }, []);
            return <App {...props} />;
        };

        root.render(<MainApp />);
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
