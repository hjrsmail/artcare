import { useForm } from '@inertiajs/react';

interface CommentModalProps {
    open: boolean;
    onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ open, onClose }) => {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        school_origin: '',
        comment: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/ulasan', {
            onSuccess: () => {
                onClose();
            }
        });
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-white/60 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-3 text-gray-700"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="md:text-2xl font-bold mb-4 text-center">FORM ULASAN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Nama</p>
                        <input
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            placeholder="Masukkan nama"
                            className="w-full p-2 rounded-xl bg-primary-400 text-white placeholder-primary-100"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>

                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Asal Sekolah</p>
                        <input
                            type="text"
                            value={data.school_origin}
                            onChange={(e) => setData('school_origin', e.target.value)}
                            placeholder="Nama sekolah"
                            className="w-full p-2 rounded-xl bg-primary-400 text-white placeholder-primary-100"
                        />
                        {errors.school_origin && <p className="text-red-500 text-sm">{errors.school_origin}</p>}
                    </div>

                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Ulasan</p>
                        <textarea
                            value={data.comment}
                            onChange={(e) => setData('comment', e.target.value)}
                            placeholder="Tulis ulasan kamu"
                            className="w-full p-2 rounded-xl bg-primary-400 text-white placeholder-primary-100"
                            rows={4}
                        ></textarea>
                        {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-primary-400 hover:bg-primary-600 text-white px-4 py-2 rounded-xl w-full"
                    >
                        {processing ? 'Mengirim...' : 'Kirim'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentModal;
