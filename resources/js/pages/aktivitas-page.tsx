import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import pita from '~/images/pita1.webp';


interface Activity {
    title: string;
    description: string;
    image: string;
    link: string;
}


export default function ActivityPage() {

     const [isLoading, setIsLoading] = useState(true);

    const page = usePage();
    const activities = page.props.activities as Activity[];

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

    // Debugg
    // console.log(activities);

    if (!activities.length) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-500 text-lg">⏳ Memuat materi...</div>
                </div>
            </AppLayout>
        );
    }

    const handleMaterial = (material: string) => {
        window.open(material, '_blank');
    };

    const handleNext = () => {
        window.open('/evaluasi-konseling', '_self');
    };


    return (
        <>
            <Head title="Aktivitas">
                <meta name="description" content="Aktivitas Art Care" />
                <link rel="preload" as="image" href="/assets/images/banner.webp" />
                
            </Head>
            <AppLayout>
                <div className="relative grid w-full grid-cols-1 items-start text-center">
                    {/* Kolom Teks dan Tombol */}
                    <div className="bg-[url(/assets/images/bg-aktivitas.webp)] relative mx-auto flex h-[100vh] w-full flex-col justify-center bg-gray-900/60 bg-cover bg-center pt-8 bg-blend-multiply">
                        <div className="space-y-6">
                            <div className="h-[10vh]">
                                <img src={pita} alt="" className="absolute top-25 left-3 md:w-40 w-30" />
                            </div>
                            <div className="max-w-screen-xl mx-auto px-5">
                                <h1 className="text-shadow-md mb-4 text-3xl font-bold text-secondary-500 md:text-5xl">KAWAN EKSPRESI</h1>
                                <h2 className="text-lg leading-relaxed text-putih md:text-xl">
                                    "Saat kata sulit diucap, ekspresi bisa menjadi jembatan." Di fitur Kawan Ekspresi, kamu bisa menuangkan perasaan
                                    lewat gambar, warna, simbol, atau tulisan kreatif. Ini adalah ruang bebas nilai—tidak ada yang benar atau salah
                                    dalam berekspresi. Kamu juga bisa berbagi hasil karyamu (dengan izinmu) atau menyimpannya sebagai jurnal pribadi.
                                    Di sinilah seni menjadi sahabat yang mendengarkan.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="flex min-h-10 items-center justify-center rounded-xl bg-[#D9D9D9]">
                            <h1 className="text-lg text-primary-600">artcare@gmail.com</h1>
                        </div>
                    </section>
                    <section className="w-full bg-gray-200/80 bg-[url('/assets/images/pita1.webp')] bg-fixed bg-no-repeat pt-6 bg-blend-lighten">
                        <div className="container mx-auto grid w-[80%] grid-cols-1 md:grid-cols-2">
                            {activities.map((item, index) => (
                                <div key={index} className="container mx-auto mb-3 flex flex-col items-center gap-y-6">
                                    <h2 className="mb-3 text-2xl font-bold text-primary-600 md:text-5xl">{item.title}</h2>
                                    <img
                                        src={`/storage/${item.image}`}
                                        alt={item.title}
                                        loading="lazy"
                                        className="mx-auto mb-3 h-60 w-50 rounded-lg object-cover shadow-md md:w-2/5"
                                    />
                                    <p className="mb-2 text-center md:text-lg">{item.description}</p>
                                    <Button
                                        onClick={() => handleMaterial(item.link)}
                                        className="mb-3 w-fit rounded-xl bg-secondary-400 px-10 py-6 text-lg text-white hover:bg-secondary-500 md:w-1/4"
                                    >
                                        Klik Di Sini
                                    </Button>
                                </div>
                            ))}
                        </div>
                        
                        <div className="container mx-auto my-6 flex w-[90%] flex-col items-center justify-between gap-y-2 rounded-xl bg-primary-600 px-4 py-4 shadow-md md:flex-row md:gap-y-0">
                            <h3 className="text-start text-lg font-bold text-white">Wahh.... kalau sudah selesai mengerjakan yuk kita lanjut!</h3>
                            <Button
                                onClick={handleNext}
                                className=" w-full rounded-xl bg-secondary-400 px-10 py-7 text-lg text-white hover:bg-secondary-500 md:w-1/4"
                            >
                                Next
                            </Button>
                        </div>
                    </section>
                </div>
            </AppLayout>
        </>
    );

}