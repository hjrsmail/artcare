import { useEffect, useState } from "react";
import AppFooter from "@/components/app-footer";
import AppNavbar from "@/components/app-navbar";
import CommentModal from "@/components/ui/comment-modal";

declare global {
    interface Window {
        openCommentModal?: () => void;
        closeCommentModal?: () => void;
    }
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500); 

        const images = Array.from(document.images);
        if (images.length === 0) {
            setIsLoading(false);
            clearTimeout(timeout);
            return;
        }

        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount += 1;
            if (loadedCount === images.length) {
                setIsLoading(false);
                clearTimeout(timeout);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener("load", handleImageLoad);
                img.addEventListener("error", handleImageLoad);
            }
        });

        return () => {
            clearTimeout(timeout);
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

            <div className=" bg-white min-h-screen flex flex-col">
                <AppNavbar />
                <main className="flex-grow flex-1">{children}</main>
                <AppFooter />
                <CommentModal open={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </>
    );
}
