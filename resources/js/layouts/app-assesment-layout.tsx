import AppFooter from "@/components/app-footer";
import AppNavbar from "@/components/app-navbar";
import { useEffect, useState } from "react";


export default function AppAssesmentLayout({ children }: { children: React.ReactNode }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const images = Array.from(document.images); // semua tag <img> di halaman
        if (images.length === 0) {
            setIsLoading(false); // tidak ada gambar? langsung selesai
            return;
        }

        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount += 1;
            if (loadedCount === images.length) {
                setIsLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener("load", handleImageLoad);
                img.addEventListener("error", handleImageLoad); // tetap lanjut kalau error
            }
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", handleImageLoad);
                img.removeEventListener("error", handleImageLoad);
            });
        };
    }, []);

    useEffect(() => {
        window.openCommentModal = () => setIsOpen(true);
        window.closeCommentModal = () => setIsOpen(false);

        return () => {
            delete window.openCommentModal;
            delete window.closeCommentModal;
        };
    }, []);


    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-secondary-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            <section className="bg-white min-h-screen flex flex-col">
                <AppNavbar />
                <main className=" bg-[url(/assets/images/bgsection2.webp)] flex-grow flex items-center justify-center bg-cover bg-center bg-no-repeat">
                    {children}
                </main>
                <AppFooter />
            </section>
        </>
    );
}

