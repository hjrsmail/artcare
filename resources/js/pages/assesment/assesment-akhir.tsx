import { Button } from '@/components/ui/button';
import AppAssesmentLayout from '@/layouts/app-assesment-layout';
import { Head, Link } from '@inertiajs/react';
import pita from '~/images/pita1.webp';

export default function AssesmenAkhirPage() {
    const asesmenAkhir = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfpZOEIGtOwFIrFzVIMhP1drKHJnSiiX4uQziBN8An9vBrRWw/viewform?usp=sharing', '_blank');
    };
    const evaluasiKonseling = () => {
        window.open('https://forms.gle/SVc6zudQqiPsupiF7', '_blank');
    };

    return (
        <>
            <Head title="Evaluasi Konseling">
                <meta name="description" content="Evaluasi Konseling" />
            </Head>
            <AppAssesmentLayout>
                <div className="md:mb-20 lg:mb-50 2xl:mb-30 relative grid w-full min-h-screen content-center grid-cols-1 items-start gap-8 px-6 text-center md:container">
                    {/* Kolom Teks dan Tombol */}
                    <div className="relative mx-auto flex h-[60vh] w-auto flex-col justify-center pt-8">
                        <div className="space-y-6">
                            <div className="h-[20vh] lg:h-[35vh] 2xl:h-[20vh]">
                                <img src={pita} alt=""
                                    loading="lazy"
                                    className="absolute -top-12 -left-6 md:-top-25 2xl:-top-30 2xl:-left-30  w-25 lg:w-40" />
                            </div>
                            <h1 className="text-3xl font-bold text-primary-600 md:text-5xl lg:mt-30 2xl:mt-5">Hebatt, kamu sudah mengikuti serangkaian <br className='hidden lg:block' /> kegiatan  Art-Conseling!</h1>
                            <div className="hidden items-center justify-center md:flex ">
                                <img
                                    src="assets/images/bgaa.webp"
                                    alt="Ilustrasi sekelompok teman"
                                    className="w-100 max-w-md md:max-w-lg z-10"
                                />
                            </div>
                            <h2 className="text-lg leading-relaxed text-primary-700 md:text-xl lg:text-2xl">
                                Setelah mengikuti serangkaian kegiatan tadi. Bagaimana perasaanmu saat ini, <br className='hidden lg:block' /> yuk sampaikan melalui lembar evaluasi dibawah ini!
                            </h2>


                            <div className="flex flex-col justify-center gap-x-0 gap-y-2 md:flex-row md:gap-x-3 md:gap-y-0">
                                {/* <Button
                                    onClick={asesmenAkhir}
                                    className="w-full rounded-xl bg-secondary-400 px-10 py-6 text-lg text-white hover:bg-secondary-500 md:w-1/4"
                                >
                                    Asesmen Kondisi Diri
                                </Button> */}
                                <Button
                                    onClick={evaluasiKonseling}
                                    className="w-full rounded-xl bg-secondary-400 px-10 py-6 text-lg text-white hover:bg-secondary-500 md:w-1/4 "
                                >
                                    Evaluasi Konseling
                                </Button>
                            </div>

                            <h2 className="bg-primary-200 p-4 lg:p-5 rounded-full my-10 2xl:my-20 text-lg leading-relaxed text-primary-700 md:text-xl lg:text-2xl">
                                Jika kamu butuh bantuan lebih lanjut, kamu bisa mendapatkannya melalui fitur <span className='font-bold lg:text-2xl px-1 py-1 hover:border-b-2 border-white'> <Link href="/konselor">‘ngobrol yuks’ </Link> </span>di kanan atas.
                            </h2>
                        </div>
                    </div>
                </div>
            </AppAssesmentLayout>
        </>
    );
}