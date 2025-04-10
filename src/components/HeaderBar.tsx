import { useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react';

type HeaderBarProps = {
    title: string;
};

export default function HeaderBar({ title }: HeaderBarProps) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[69px] flex items-center justify-between px-6 pt-2">
            <h2 className="text-[32px] font-baloo font-bold text-[#D22751]">{title}</h2>
            <div className="flex gap-4">
                <Search size={28} color="#D22751" strokeWidth={2} />
                <button onClick={() => navigate('/store')}>
                    <Star size={28} color="#D22751" strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}
