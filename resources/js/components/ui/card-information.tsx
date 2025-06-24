import { useState } from "react";

interface Information {
    image: string;
    title: string;
}

interface CardInformationProps {
    informations?: Information[];
}


export default function CardInformation({ informations = [] }: CardInformationProps) {

    if (!informations.length) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-gray-500 text-lg">Belum ada gambar yang ditampilkan</div>
            </div>
        );
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3;

    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < itemsPerSlide; i++) {
            visible.push(informations[(currentIndex + i) % informations.length]);
        }
        return visible;
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % informations.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + informations.length) % informations.length
        );
    };

    const visibleImages = getVisibleImages();
    const activeComment = visibleImages[0];

    return (
        <div
            className="relative px-4 mt-10 pt-10 sm:px-6 sm:py-12 lg:py-8 lg:px-2 lg:min-h-[750px]">
            <div className="flex flex-col justify-center items-center text-center py-6 md:pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-bold text-primary-600" data-aos="fade-down">
                    Tahukah kamu??
                </p>

                <p className="text-base md:text-2xl text-primary-600 pt-5 md:pt-10">
                    ngelakuin hal kayak nyakitin diri sendiri seperti nyilet tangan, nyakar, ngegebuk kepala <br /> sendiri, atau sengaja bikin luka di badan? Nah itu  namanya self injury guys. ini bukan <br /> drama, ini realita. Banyak yang  ngalemin tapi diem-diem aja.
                </p>
            </div>

            <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-10 max-w-7xl text-black dark:text-gray-300 lg:px-12">
                <div className="relative flex justify-center items-center overflow-hidden px-4">

                    {/* Tombol kiri (hanya lg ke atas) */}
                    <button
                        onClick={handlePrev}
                        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl font-bold text-primary-600 hover:scale-110 transition"
                    >
                        &lt;
                    </button>

                    {/* Wrapper Gambar */}
                    <div className="flex items-center justify-center gap-6">
                        {visibleImages.map((item, index) => {
                            const isActive = index === 1;
                            return (
                                <div
                                    key={index}
                                    className={`
                                        transition-all duration-700
                                        ${isActive ? "scale-105 z-10" : "scale-80"}
                                        ${isActive ? "" : "hidden"}
                                        md:inline-block
                                    `}
                                >
                                    <img
                                        src={`/storage/${item.image}`}
                                        alt={item.title}
                                        className="w-[200px] sm:w-[250px] md:w-[350px] aspect-[3/2] object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Tombol kanan (hanya lg ke atas) */}
                    <button
                        onClick={handleNext}
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl font-bold text-primary-600 hover:scale-110 transition"
                    >
                        &gt;
                    </button>
                </div>

                {/* Navigasi bawah (untuk mobile & tablet) */}
                <div className="flex items-center justify-center space-x-4 text-xl font-bold lg:hidden">
                    <button onClick={handlePrev}>&lt;</button>
                    <span>
                        {informations.indexOf(activeComment) + 1}/{informations.length}
                    </span>
                    <button onClick={handleNext}>&gt;</button>
                </div>

            </div>


        </div>
    )
}