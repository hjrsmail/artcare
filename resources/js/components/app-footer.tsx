import { usePage } from "@inertiajs/react";
import { Button } from "./ui/button";

export default function AppFooter() {

    const { url } = usePage().props;
    const isHome = url === "/";


    return (
        <>
            {isHome && (
                <div className="bg-primary-600 text-white w-full px-4 py-3 md:py-6 lg:py-3" data-aos="fade-up">
                    <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
                        <p className="text-md sm:text-2xl leading-relaxed">
                            Haiii! Punya cerita seru atau kesan selama bersama Art Care?
                        </p>
                        <p className="text-md sm:text-2xl leading-relaxed pb-3">
                            Yuk, bagikan pengalamanmu lewat tombol di bawah ini!
                        </p>
                        <Button
                            onClick={() => window.openCommentModal?.()}
                            className="bg-secondary-400 px-6 py-3 rounded-full font-semibold text-lg sm:text-xl shadow-[6px_6px_10px_rgba(0,0,0,0.3)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300 outline-1 outline-black"
                        >
                            Comment
                        </Button>
                    </div>
                </div>
            )}
            <div className="bg-primary-600 text-white w-full px-4 py-6">
                <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
                    <p className="text-sm sm:text-base opacity-80">
                        &copy; 2025 All rights reserved || GercepTechnology
                    </p>
                </div>
            </div>
        </>

    );
}
