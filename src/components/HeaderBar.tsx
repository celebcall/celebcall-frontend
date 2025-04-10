// src/components/HeaderBar.tsx
import { useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react';

type HeaderBarProps = {
    title: string;
    showIcons?: boolean; // <- 아이콘 표시 여부
};

export default function HeaderBar({ title, showIcons = true }: HeaderBarProps) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[69px] flex items-center justify-between px-6 pt-2">
            <h2 className="text-[32px] font-baloo font-bold text-[#D22751]">{title}</h2>

            {showIcons && (
                <div className="flex gap-4">
                    <Search size={28} color="#D22751" strokeWidth={2} />
                    <button onClick={() => navigate('/store')}>
                        <Star size={28} color="#D22751" strokeWidth={2} />
                    </button>
                </div>
            )}
        </div>
    );
}
