import React from 'react';
import { Link } from '@inertiajs/react';

interface NavLinkMobileProps {
    to: string;
    exact?: boolean;
    children: React.ReactNode;
}

const NavLinkMobile: React.FC<NavLinkMobileProps> = ({ to, exact = false, children }) => {
    const currentPath = window.location.pathname;
    const isActive = exact
        ? currentPath === to
        : to === "/"
            ? currentPath === "/"
            : currentPath.startsWith(to);

    const baseClasses = "rounded-md w-full px-3 py-1 md:py-3 text-md md:text-lg font-medium transition-transform duration-300 ease-in-out";
    const activeClasses = "text-white hover:scale-101 bg-primary-700/80";
    const inactiveClasses = "text-white hover:bg-primary-700 hover:text-white hover:scale-101";

    return (
        <Link
            href={to}
            aria-current={isActive ? 'page' : undefined}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </Link>
    );
};

export default NavLinkMobile;
