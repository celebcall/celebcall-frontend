// src/pages/More.tsx
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';
import BottomNav from '../components/BottomNav';
import {
    BookText,
    Star,
    AlertCircle,
    HelpCircle,
    ChevronRight
} from 'lucide-react';

const moreItems = [
    { icon: BookText, label: 'Order History' },
    { icon: Star, label: 'STORE' },
    { icon: AlertCircle, label: 'Notice' },
    { icon: HelpCircle, label: 'FAQ' },
];

export default function More() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FCF8F8] pb-[70px]">
            <HeaderBar title="MORE" showIcons={false} />

            <ul className="mt-4 px-4">
                {moreItems.map(({ icon: Icon, label }, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
                        onClick={() => {
                            if (label === 'STORE') {
                                navigate('/store');
                            }
                            if (label === 'Order History') {
                                navigate('/order-history');
                            }
                            if (label === 'Notice') {
                                navigate('/notice');
                            }
                            if (label === 'FAQ') {
                                navigate('/faq');
                            }
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <Icon size={20} />
                            <span className="text-[15px]">{label}</span>
                        </div>
                        <ChevronRight size={20} color="#888" />
                    </li>
                ))}
            </ul>

            <BottomNav />
        </div>
    );
}
