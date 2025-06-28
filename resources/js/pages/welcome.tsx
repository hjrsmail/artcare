import { Button } from '@/components/ui/button';
import CardComment from '@/components/ui/card-comment';
import CardInformation from '@/components/ui/card-information';
import CommentModal from '@/components/ui/comment-modal';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import Pita from '~/images/pita.webp'


interface Comment {
    username: string;
    comment: string;
    school_origin: string;
}

interface Information {
    image: string;
    title: string;
}

export default function Welcome() {


    // Handle Modals Data dari database
    const page = usePage();
    const comments = (page.props.comments as Comment[]) || [];
    const informations = (page.props.informations as Information[]) || [];

    // Debugg
    // console.log(comments);
    // console.log(informations);

    // Tampilkan loading jika salah satu masih kosong
    if (!comments.length || !informations.length) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-500 text-lg">⏳ Memuat data...</div>
                </div>
            </AppLayout>
        );
    }

    // Handle Button
    const handleStart = () => {
        window.location.href = '/assesment-awal';
    };

    // Handle Modal
    const [showModal, setShowModal] = useState(false);

    // Handle Section
    const [showSection, setShowSection] = useState(false);

    return (
        <>
            <Head title="Home">
                <meta name="description" content="Pendahuluan Art Care" />
                <link rel="preload" as="image" href="/assets/images/banner.webp" />
            </Head>

            <AppLayout>
                {!showSection && (
                    <>
                        <header>
                            <section className="relative h-[682px] lg:h-screen flex items-center overflow-hidden">
                                {/* Background blur layer */}
                                <div className="absolute inset-0">
                                    <div className="bg-[url(/assets/images/banner.webp)] w-full h-full bg-cover bg-no-repeat bg-center  ">
                                    </div>
                                </div>

                                {/* Content layer */}
                                <div className="relative w-full pt-10 md:pt-0" data-aos="fade-up">
                                    <div className="max-w-xl w-full pl-8 lg:pl-0 2xl:pl-20 lg:ml-28">
                                        <div className="space-y-3 md:space-y-6 lg:space-y-2">
                                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-primary-600 tracking-widest">
                                                ART-CARE
                                            </h1>

                                            <h2 className="text-lg sm:text-3xl lg:text-4xl font-medium text-primary-600 italic leading-relaxed">
                                                Be gentle your mind,<br />
                                                you're not alone.
                                            </h2>


                                            <h2 className="text-lg sm:text-3xl text-black leading-relaxed lg:mt-12">
                                                Welcome Peserta Didik <br className='block lg:hidden'/> SMP <br className='hidden lg:block' /> Kota Makassar
                                            </h2>

                                            <Button
                                                onClick={() => setShowSection(true)}
                                                className="bg-secondary-400 text-white px-6 py-3 md:w-1/2 lg:w-[400px] lg:h-18 md:h-15 rounded-4xl text-lg md:text-xl lg:text-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.3)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300">
                                                Yuk Mulai
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <section>
                                <div className="bg-putih flex justify-center items-center min-h-10">
                                    <h1 className='text-lg text-primary-600'>artcare@gmail.com</h1>
                                </div>
                            </section>
                        </header>

                        <CardComment comments={comments} />
                        <CommentModal open={showModal} onClose={() => setShowModal(false)} />

                        <section>
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
                                        className="bg-secondary-400 px-6 py-3 md:py-6 lg:py-6 rounded-full font-semibold text-lg sm:text-xl shadow-[6px_6px_10px_rgba(0,0,0,0.3)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300 outline-1 outline-black"
                                    >
                                        Comment
                                    </Button>

                                </div>
                            </div>
                        </section>
                    </>
                )}

                <AnimatePresence>
                    {showSection && (
                        <motion.div
                            key="section"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='bg-[url(/assets/images/bgsection-information.webp)] bg-cover bg-no-repeat bg-center z-50'
                        >
                            <section>
                                <CardInformation informations={informations} />
                            </section>

                            <section className="relative px-4 py-10 sm:px-6 sm:py-12 md:py-1 lg:py-8 lg:px-2 lg:min-h-[620px]" data-aos="fade-up">
                                <div className="flex flex-col justify-center items-center text-center md:py-6 md:pt-20">
                                    <p className="text-2xl sm:text-4xl md:text-5xl text-primary-600 font-bold" >
                                        Tujuan dan Komitmen AKUSI
                                    </p>
                                </div>
                                <div className="w-full px-5 py-6 mx-auto lg:px-10 space-y-5 sm:py-8 md:py-8 max-w-7xl text-primary-700">
                                    <h1 className='text-base text-justify md:text-xl md:text-center'>
                                        AKUSI ini tuh website keren yang bantu kalian buat ngecek seberapa  besar kecenderungan self-injury, ngeluarin unek-unek atau emosi kalian,  dan ngurangin pikiran negatif yang gak rasional, semua bisa dilakuin  dengan cara yang asik, fleksibel, dan gak ribet. Menurut Depdiknas  (Fathurrahman, 2023), teknologi itu penting banget kalau digabung sama  konselor yang profesional biar layanan konseling makin oke.
                                        <br />
                                        <br />
                                        Nah, website konseling online ini dibuat, buat bantu Peserta didik di SMP Kota Makassar ngadepin dan ngecegah kasus self-injury yang mungkin  aja dialamin. Waktu ngembangin website ini, tim pengembang tetap  ngikutin aturan main dan kode etik konselor, kayak keterbukaan sama  rahasia pribadi kalian tetap dijaga banget. Jadi, tenang aja, semua yang kalian curhatin aman dan prosesnya juga sesuai aturan. Pokoknya, AKUSI  ini hadir buat support kalian sepenuhnya, tanpa drama.
                                    </h1>
                                </div>
                            </section>

                            <section className="relative px-4 py-10 sm:px-6 sm:py-12 lg:py-16 lg:px-8" data-aos="fade-up">
                                <div className="lg:max-w-7xl px-4 md:px-3 lg:px-7 mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center">
                                    {/* Kolom Teks */}
                                    <div className="text-md sm:text-2xl lg:text-3xl text-primary-600 leading-relaxed font-semibold 2xl:col-span-2">
                                        Yuk mulai petualangan kita dalam <br className='hidden 2xl:block' />
                                        mencegah hal-hal yang merugikan diri <br className='hidden 2xl:block' />
                                        kita sendiri baik secara fisik ataupun <br className='hidden 2xl:block' />
                                        mental
                                    </div>

                                    {/* Kolom Tombol dan Gambar */}
                                    <div className="pt-5 md:pt-0 flex flex-col items-end md:items-center justify-center relative">
                                        <div className="relative inline-block px-5 rounded-2xl bg-secondary-400 shadow-[10px_10px_20px_rgba(0,0,0,0.6)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300">
                                            {/* Tombol */}
                                            <Button
                                                onClick={handleStart}
                                                rel="noopener noreferrer"
                                                className="text-white h-10 md:h-20 lg:h-35 md:w-60 lg:w-80 font-extrabold text-xl sm:text-3xl lg:text-4xl relative z-10">
                                                LETSGOO!!
                                            </Button>

                                            {/* Gambar pita */}
                                            <img
                                                src={Pita}
                                                alt="Pita"
                                                loading='lazy'
                                                className="absolute -top-5 sm:-top-8 lg:-top-10 lg:-right-10 -right-3 sm:-right-7 w-12 sm:w-20 lg:w-40 z-20"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>
            </AppLayout>
        </>
    );
}
