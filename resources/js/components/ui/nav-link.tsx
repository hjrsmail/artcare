import React from 'react';
import { Link } from '@inertiajs/react';

interface NavLinkProps {
    to: string;
    exact?: boolean;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, exact = false, children }) => {
    const currentPath = window.location.pathname;
    const isActive = exact
        ? currentPath === to
        : to === "/"
            ? currentPath === "/"
            : currentPath.startsWith(to);

    const baseClasses = "rounded-md px-3 py-2 text-md font-medium transition-transform duration-300 ease-in-out";
    const activeClasses = "text-white hover:scale-110 bg-primary-700";
    const inactiveClasses = "text-white hover:bg-primary-700 hover:text-white hover:scale-110";

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

export default NavLink;
