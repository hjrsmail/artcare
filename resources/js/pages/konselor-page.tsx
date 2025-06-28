import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

interface Counselor {
    name: string;
    no_whatsapp: string;
}


export default function CounselorPage() {
    const page = usePage();
    const counselors = (page.props.counselors as Counselor[]) || [];

    // Debugg
    // console.log(counselors);

    if (!counselors.length) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-500 text-lg">⏳ Memuat data konselor...</div>
                </div>
            </AppLayout>
        );
    }

    const handleClick = (kontak: string) => {
        window.open(`https://wa.me/${kontak}`, '_blank');
    };

    return (
        <>
            <Head title="Konselor">
                <meta name="description" content="Hubungi Konselor" />
            </Head>
            <AppLayout>
                <header className="pt-16">
                    <section  className=" bg-[url(/assets/images/bgsection-information.webp)] flex min-h-screen items-center bg-cover bg-center bg-no-repeat">
                        <div className="mx-auto w-full max-w-screen-2xl px-8">
                            <div className="mt-10 space-y-6">
                                <h1 className="text-3xl font-bold text-primary-600">Butuh Bantuan? Sini Kami Bantu!</h1>

                                <div className="relative my-8 flex flex-col-reverse justify-between md:mt-0 lg:flex-row">
                                    <div className="grid grid-cols-1 gap-x-4 space-y-0 md:grid-cols-2">
                                        {counselors.map((counselor, index) => (
                                            // <img src="/assets/images/pic-konselor.png" alt="" className="absolute w-1/2 self-center top-0 2xl:right-0 md:w-1/3" />
                                            <div
                                                key={counselor.no_whatsapp}
                                                className="space-y-2"
                                                onClick={() => {
                                                    handleClick(counselor.no_whatsapp);
                                                }}
                                            >
                                                <h3 className="text-lg font-bold">Konselor {index + 1}</h3>
                                                <div className="flex items-center gap-x-4 rounded-xl mb-4  bg-secondary-400 h-auto p-4 hover:bg-secondary-500">
                                                    <img src="/assets/images/vector.png" alt="" className="w-10" />
                                                    <div>
                                                        <p className="text-lg font-bold text-white">{counselor.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <img src="/assets/images/pic-konselor.webp" loading='lazy' alt="" className="py-10 lg:absolute w-1/2 self-center top-0 lg:-top-40 lg:right-0 md:w-1/3" />
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </AppLayout>
        </>
    );
}