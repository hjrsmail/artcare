import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

interface Material {
    title: string;
    description: string;
    img: string;
}

export default function MateriPage() {

    const page = usePage();
    const material = page.props.material as Material[];

    // Debugg
    // console.log(material);

    if (!material.length) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-500 text-lg">⏳ Memuat materi...</div>
                </div>
            </AppLayout>
        );
    }

    const showActivityPage = () => {
        window.location.href = '/aktivitas';
    };

    return (
        <>
            <Head title="Materi">
                <meta name="description" content="Materi Self Injury" />
            </Head>

            <AppLayout>
                <AnimatePresence>
                    <motion.div
                        key="section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}>

                        {/* Landing Section  */}
                        <section className="bg-[url(/assets/images/bgsection2.webp)] bg-cover bg-center bg-no-repeat pt-10 md:pt-20 sm:pt-12 md:mt-12">
                            <div className="mx-auto max-w-screen-2xl px-4 pt-8 sm:px-6 lg:px-8 ">
                                <div className="relative ">
                                    <img
                                        src="assets/images/pita3.webp"
                                        alt="Pita Dekorasi"
                                        loading="lazy"
                                        className="absolute top-4 md:-top-10 lg: md:left-2 lg: w-20 sm:w-24 z-20"
                                    />

                                    <div className="flex flex-col items-center text-center space-y-10">
                                        <div className="space-y-5 max-w-4xl z-10 pt-20 md:pt-1 lg:mt-0">
                                            <h1 className="text-4xl md:text-6xl text-primary-500 font-bold">
                                                SELF INJURY
                                            </h1>
                                            <p className="text-sm md:text-lg text-primary-700 font-medium tracking-wide md:tracking-normal px-3">
                                                Memahami adalah langkah pertama menuju penyembuhan. Fitur Mengenali Self-Injury berisi informasi penting seputar apa itu self-injury, mengapa seseorang bisa melakukannya, dan bagaimana cara mengenalinya sejak dini. Di sini, kamu akan menemukan penjelasan yang mudah dipahami, tanpa menghakimi, dan disampaikan dengan bahasa yang aman bagi remaja. Dengan mengenal lebih dalam, kamu bisa lebih sadar tentang apa yang kamu atau temanmu alami, dan tahu harus ke mana mencari bantuan.
                                            </p>
                                        </div>

                                        <img
                                            src="assets/images/group-people.webp"
                                            alt="Ilustrasi sekelompok teman"
                                            className="mt-8 w-full max-w-md md:max-w-lg z-10"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#d9d9d9] lg:bg-putih flex justify-center items-center min-h-10 rounded-xl">
                                <h1 className='text-md md:text-lg text-primary-600'>artcare@gmail.com</h1>
                            </div>
                        </section>

                        <section className="bg-[url(/assets/images/bgmateri.webp)] bg-cover bg-center bg-no-repeat mx-auto pb-5 ">
                            {/* Konten Materi */}
                            <div className="flex flex-col gap-10 mx-auto max-w-screen-lg pt-10 py-2 px-5 md:pt-10 md:px-12 md:py-5 lg:px-1" >
                                {material.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-700 ease-in-out flex flex-col lg:flex-row items-center gap-6 p-6 rounded-2xl shadow-md lg:min-h-[150] ${index % 2 === 0 ? "bg-mat text-primary-600" : "bg-primary-400 text-putih"
                                            }`}
                                        data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
                                        data-aos-duration="1000"
                                        data-aos-anchor-placement="top-bottom"
                                    >

                                        {/* Konten: Title, Image (mobile), Description */}
                                        <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12 w-full lg:w-2/3">
                                            <h2 className="text-lg md:text-4xl font-bold order-1 md:order-1 text-center px-2">
                                                {item.title}
                                            </h2>

                                            {/* Gambar mobile */}
                                            <img
                                                src={`/storage/${item.img}`}
                                                alt={item.title}
                                                className="w-40 md:w-1/3 rounded-lg object-cover order-2 lg:order-3 self-center lg:hidden"
                                            />

                                            {/* <p className="md:text-lg text-justify order-3 lg:order-2">
                                        {item.description}
                                        </p> */}

                                            <div
                                                className="md:text-lg text-justify lg:text-center order-3 lg:order-2 break-words overflow-hidden"
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            />

                                        </div>

                                        {/* Gambar lg ke atas */}
                                        <img
                                            src={`/storage/${item.img}`}
                                            alt={item.title}
                                            className="w-[400px] h-[300px] rounded-2xl object-cover hidden lg:block"
                                        />
                                    </div>

                                ))}
                            </div>

                            {/* Bagian Bawah Materi */}
                            <div className="mx-auto max-w-screen-xl py-4 lg:py-5 px-5 md:px-8 lg:px-16">
                                <div className="bg-primary-300 rounded-2xl px-2 py-6 md:px-10 md:py-5 lg:px-6 lg:py-5">
                                    <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-7">

                                        {/* Judul Ajakannya */}
                                        <h1 className="text-xl md:text-2xl lg:text-3xl text-primary-600 font-bold text-center md:text-left">
                                            OKEYY GUYSS Setelah kita baca materi, yuk kita lanjut berjelajah!
                                        </h1>

                                        {/* Tombol ke Halaman Aktivitas */}
                                        <Button
                                            onClick={showActivityPage}
                                            className="bg-secondary-500 text-sm md:text-lg lg:text-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.3)] hover:bg-secondary-600 transition-all hover:scale-110 duration-300 text-white font-bold h-12 w-1/2 lg:w-1/5 lg:h-20 rounded-full"
                                        >
                                            KLIK DISINI
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </motion.div>
                </AnimatePresence>
            </AppLayout>
        </>
    );
}
