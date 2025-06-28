// File: AssesmenAwalPage.tsx
import { Button } from "@/components/ui/button";
import AppAssesmentLayout from "@/layouts/app-assesment-layout";
import { Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import useImagePreloader from "@/hooks/use-image-preloader";

import pita from "~/images/pita1.webp";
import people from "~/images/people.webp";
import pita3 from "~/images/pita3.webp";

export default function AssesmenAwalPage() {
    const handleMaterial = () => {
        window.location.href = '/materi';
    };

    const assesmentAwal = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1AeOvHATxDTYLnKHjD-xtdtdsyQ8hv847L1_6b4HzsFNC8g/viewform', '_blank');
    };

    const isLoading = useImagePreloader({
        backgroundUrls: [people, pita, pita3]
    });

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-secondary-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <>
            <Head title="Assesment Awal">
                <meta name="description" content="Assesment Awal" />
            </Head>
            <AppAssesmentLayout>
                <AnimatePresence>
                    <motion.div
                        key="section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:min-h-[720px] 2xl:min-h-[800px] lg:grid-cols-2 min gap-8 items-start px-6 lg:px-12 relative pt-23 md:pt-10 lg:pt-0 py-20 lg:py-0"
                    >

                        <div className="relative md:pt-8 min-h-[60vh] flex flex-col justify-between md:px-3 lg:px-0">
                            <div className="space-y-3 md:space-y-6">
                                <div className="h-[5vh] md:h-[7vh] lg:h-[12vh] 2xl:h-[10vh]">
                                    <img
                                        src={pita}
                                        alt=""
                                        loading="lazy"
                                        className="absolute top-1 -left-2 md:left-2 md:top-10 lg:top-20 2xl:top-10 w-18 md:w-30 2xl:w-40 "
                                    />
                                </div>
                                <h1 className="text-3xl md:text-6xl 2xl:text-7xl font-bold text-primary-600 lg:pt-10 text-center lg:text-start">
                                    ASSESMENT AWAL
                                </h1>

                                <div className=" flex lg:hidden justify-center items-center">
                                    <img
                                        src={people}
                                        alt="People Illustration"
                                        loading="lazy"
                                        className=" max-w-full w-100 md:w-120 lg:w-20"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl text-primary-700 leading-relaxed text-justify lg:text-start px-2 md:px-5 lg:px-0">
                                    Haii gengs! Sebelum lanjut, yuk kita cek dulu gimana kondisi diri kamu —<br className="hidden 2xl:block" />
                                    seberapa besar sih kecenderungan kamu buat self-injury? —<br className="hidden 2xl:block" />
                                    Cus isi dulu biar makin kenal sama diri sendiri!
                                </h2>

                                <div className="flex justify-start px-2 md:px-5 lg:px-0">
                                    <Button
                                        onClick={assesmentAwal}
                                        rel="noopener noreferrer"
                                        className="text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full bg-secondary-400 shadow-[6px_6px_10px_rgba(0,0,0,0.5)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300 text-white w-1/2 md:w-1/3 h-12 md:h-14  lg:h-15 lg:w-2/3 flex items-center justify-center"
                                    >
                                        Yuk Mulai
                                    </Button>
                                </div>
                            </div>

                            <div className="pt-20 md:pt-20 lg:pt-20 2xl:pt-24 px-3 lg:px-0">
                                <div className="flex flex-col md:flex-row items-start  md:items-center gap-6 md:px-3 lg:px-0">
                                    <div className="flex-1 lg:flex lg:space-x-10 space-y-4 lg:space-y-0 lg:pt-10">
                                        <h2 className="text-lg md:text-xl lg:text-2xl text-primary-600 leading-relaxed font-bold">
                                            Haii...... jika sudah isi asesmen <br className="hidden md:block lg:hidden 2xl:block" />
                                            yuk lanjut kita belajar hal baru
                                        </h2>
                                        <div className="w-1/2 md:w-1/3 flex items-center">
                                            <Button
                                                onClick={handleMaterial}
                                                className="text-lg md:text-2xl px-6 py-3 rounded-full bg-secondary-400 shadow-[6px_6px_10px_rgba(0,0,0,0.5)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300 text-white w-full h-12 md:h-14"
                                            >
                                                Next!!
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="hidden md:block md:w-[150px] lg:hidden">
                                        <img
                                            src={pita3}
                                            alt="Pita"
                                            loading="lazy"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center items-start pt-12 mt-12">
                            <img
                                src={people}
                                alt="People Illustration"
                                loading="lazy"
                                className="max-w-full h-auto "
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </AppAssesmentLayout>
        </>
    );
}
