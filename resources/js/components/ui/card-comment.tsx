import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import pita from '~/images/pita1.webp';

interface Comment {
    username: string;
    comment: string;
    school_origin: string;
}

interface CardCommentProps {
    comments?: Comment[];
}

export default function CardComment({ comments = [] }: CardCommentProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    // Menentukan jumlah item berdasarkan lebar layar
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 3 : 3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getVisibleComments = () => {
        const visible = [];
        const length = comments.length;
        for (let i = 0; i < Math.min(itemsPerSlide, length); i++) {
            visible.push(comments[(currentIndex + i) % length]);
        }
        return visible;
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % comments.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + comments.length) % comments.length);
    };

    if (comments.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                Belum ada ulasan yang ditampilkan.
            </div>
        );
    }

    const visibleComments = getVisibleComments();
    const activeComment = visibleComments[0];

    return (
        <>
            <Head title="Home">
                <meta name="description" content="Pendahuluan Art Care" />
                <link rel="preload" as="image" href="/assets/images/bgsection2.webp" />
            </Head>

            <section className="bg-[url('/assets/images/bgsection2.webp')] bg-cover bg-no-repeat bg-center">
                <div className="relative px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:px-2 lg:min-h-[750px] max-w-screen-xl mx-auto">
                    <div className="3xl:hidden" data-aos="fade-up" >
                        <img
                            src={pita}
                            alt=""
                            className="absolute -top-8 left-2 lg:top-5 w-20 lg:w-50 "
                        />
                    </div>
                    <div className="relative flex flex-col justify-center items-center text-center py-5 pb-5 lg:py-12 lg:pt-20 " data-aos="fade-up">
                        <p className="text-2xl md:text-5xl lg:text-6xl text-primary-600 font-bold">
                            Experience Kami
                        </p>
                    </div>

                    <div className="w-full px-4 md:py-12 mx-auto space-y-6  text-black dark:text-gray-300 pt-5 md:pt-1" data-aos="fade-in">
                        {/* Carousel */}
                        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-10 scroll-smooth text-center lg:px-4">
                            {visibleComments.map((item, index) => {
                                const isActive = visibleComments.length === 1 ? index === 0 : index === 1;
                                return (
                                    <div
                                        key={index}
                                        className={`transition-all duration-500 w-[250px] sm:w-[280px] md:w-[350px] md:h-[150px] lg:h-[250px] flex flex-col justify-center items-center mx-auto p-6 rounded-lg shadow-lg ${isActive
                                            ? "bg-mat scale-110 z-10 text-primary-600"
                                            : "bg-mat/30 scale-95 text-primary-600/30"
                                            }`}

                                    >
                                        <p className="text-base md:text-lg italic mb-3">“{item.comment}”</p>
                                        <p className="font-semibold text-sm md:text-base">{item.username}</p>
                                        <p className="text-xs md:text-sm">{item.school_origin}</p>
                                    </div>
                                );
                            })}
                        </div>


                        {/* Navigasi */}
                        <div className="flex items-center text-black/70 justify-center gap-6 text-lg font-bold md:mt-10">
                            <button onClick={handlePrev} className="p-2 rounded-full transition">
                                &lt;
                            </button>
                            <span className="text-lg sm:text-2xl">
                                {comments.indexOf(activeComment) + 1}/{comments.length}
                            </span>
                            <button onClick={handleNext} className="p-2 rounded-full transition">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
