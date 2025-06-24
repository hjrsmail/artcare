import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import NavLink from "./ui/nav-link";
import NavLinkMobile from "./ui/nav-link-mobile";
import { Head, Link } from "@inertiajs/react";

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [pathname, setPathname] = useState('');

    let timeout: NodeJS.Timeout;

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeout = setTimeout(() => {
            setDropdownOpen(false);
        }, 200);
    };

    const setLogin = () => {
        window.open("/admin/login", "_blank");
    };

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    const menuItems = [
        { href: '/assesment-awal', label: 'Assesment Awal' },
        { href: '/materi', label: 'Materi Self Injury' },
        { href: '/aktivitas', label: 'Aktivitas' },
        { href: '/evaluasi-konseling', label: 'Evaluasi Konseling' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <>
            <Head>
                <link rel="preload" as="image" href="/assets/images/logo-artcare.webp" />
            </Head>

            <nav className="bg-primary-600 h-20 fixed top-0 right-0 left-0 rounded-none lg:rounded-b-2xl shadow-2xl flex items-center text-white z-50">
                <div className="mx-auto max-w-screen-2xl px-4 w-full">
                    <div className="flex justify-between items-center w-full">
                        <div className="md:text-4xl font-bold">
                            <img
                                src="/assets/images/logo-artcare.webp"
                                loading="lazy"
                                className="w-32 md:w-40"
                                alt="logo-artcare"
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-5 text-xl md:px-6 lg:px-3">
                            <NavLink to="/">Home</NavLink>

                            {/* Assesment Dropdown */}
                            <div
                                className="relative text-md font-medium"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="cursor-pointer px-3 py-2 rounded-md text-xl text-white flex items-center gap-1">
                                    Assesment <span className="text-xs lg:ml-2">▼</span>
                                </span>

                                {/* Dropdown with transition */}
                                <div
                                    ref={dropdownRef}
                                    className={`absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-primary-500 ring-1 ring-black ring-opacity-5 z-50 text-md transform transition-all duration-300 ease-in-out
                                        ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                                >
                                    {menuItems.map(({ href, label }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={`block px-4 py-2 hover:rounded-2xl hover:scale-110 duration-200 transition-all ${isActive(href)
                                                    ? 'bg-primary-700 text-white font-semibold'
                                                    : 'hover:bg-primary-700 text-white'
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <NavLink to="/panduan">Panduan</NavLink>
                            <NavLink to="/konselor">Ngobrol Yuks</NavLink>
                            <Button
                                onClick={setLogin}
                                className="bg-secondary-400 transition-all hover:scale-110 duration-300 p-5 rounded-md shadow-[6px_6px_10px_rgba(0,0,0,0.2)] font-medium text-xl"
                            >
                                Login
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden absolute top-20 left-0 w-full bg-primary-600 z-[60]" id="mobile-menu">
                        <div className="flex flex-col items-start px-4 py-2 border-t border-primary-300">
                            <NavLinkMobile to="/">Home</NavLinkMobile>
                            <details className="w-full group">
                                <summary className="cursor-pointer text-white py-2 px-3 flex justify-between items-center">
                                    Assesment
                                    <span className="transform transition-transform group-open:rotate-180">▼</span>
                                </summary>
                                <div className="pl-4">
                                    {menuItems.map(({ href, label }) => (
                                        <Link key={href} href={href} className="block px-4 py-2 hover:bg-primary-700">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                            <NavLinkMobile to="/panduan">Panduan</NavLinkMobile>
                            <NavLinkMobile to="/konselor">Ngobrol Yuks</NavLinkMobile>
                            <Button
                                onClick={setLogin}
                                className="bg-primary-700 px-4 py-2 mt-2 rounded-md font-medium md:text-lg"
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
