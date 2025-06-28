import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Guide {
    title: string;
    file_path: string;
}


export default function GuidePage() {

    const page = usePage();
    const guide = page.props.guide as Guide;

    // Debugg
    // console.log(guide);

    if (!guide) {
        return (
            <AppLayout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-500 text-lg">⏳ Memuat panduan...</div>
                </div>
            </AppLayout>
        );
    }

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [containerWidth, setContainerWidth] = useState<number>(600);
    const [scale, setScale] = useState<number>(0.4);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.2, 3));
    };

    const handleZoomOut = () => {
        setScale((prev) => Math.max(prev - 0.2, 0.4));
    };

    const goToPrevPage = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) setPageNumber(pageNumber + 1);
    };

    return (
        <>
            <Head title="Panduan">
                <meta name="description" content="Panduan Penggunaan" />
            </Head>
            <AppLayout>
                <div className="bg-[url(/assets/images/bgsection2.webp)] bg-cover bg-no-repeat w-full min-h-screen px-4 py-6 pt-20 mt-9 lg:pt-20 lg:mt-7 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto space-y-6">

                        {/* Title di tengah */}
                        <h1 className="text-3xl md:text-4xl font-bold text-primary-600 text-center">
                            {guide.title}
                        </h1>

                        {/* Tombol navigasi */}
                        <div className="flex flex-wrap justify-center gap-2 items-center">
                            <a
                                href={guide.file_path}
                                download="Panduan Penggunaan.pdf"
                                className="bg-primary-600 hover:bg-primary-700 text-white text-sm md:text-base px-4 py-2 rounded-md shadow"
                            >
                                ⬇️ Download
                            </a>
                            <button onClick={handleZoomOut} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">➖ Zoom Out</button>
                            <button onClick={handleZoomIn} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">➕ Zoom In</button>
                            <button onClick={goToPrevPage} disabled={pageNumber <= 1} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 disabled:opacity-50">⬅️</button>
                            <button onClick={goToNextPage} disabled={pageNumber >= numPages} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 disabled:opacity-50">➡️</button>
                        </div>

                        {/* PDF Viewer */}
                        <div ref={containerRef} className="w-full bg-white/20 rounded-xl p-4 shadow">
                            <div className="flex justify-center">
                                <Document
                                    file={guide.file_path}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading="Memuat dokumen..."
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        width={containerWidth * scale}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                </Document>
                            </div>
                        </div>


                        {/* Status */}
                        <div className="text-center text-sm text-gray-600">
                            Halaman {pageNumber} dari {numPages} — Zoom: {(scale * 100).toFixed(0)}%
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
