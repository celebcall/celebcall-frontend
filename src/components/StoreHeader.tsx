// src/components/StoreHeader.tsx
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

type StoreHeaderProps = {
    title: string;
};

export default function StoreHeader({ title }: StoreHeaderProps) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[69px] flex items-center justify-between px-6 pt-2">
            <button onClick={() => navigate(-1)} className="z-10">
                <ChevronLeft size={28} color="#D22751" />
            </button>
            <h2 className="flex-1 text-center text-[32px] font-baloo font-bold text-[#D22751] -ml-6">
                {title}
            </h2>
            {/* 오른쪽 공간 확보용 빈 div */}
            <div style={{ width: 28 }} />
        </div>
    );
}
