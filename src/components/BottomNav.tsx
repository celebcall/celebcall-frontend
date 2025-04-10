// src/components/BottomNav.tsx
import { NavLink } from 'react-router-dom';
import {
    Phone,
    MessageSquareText,
    HelpCircle,
} from 'lucide-react';

const navItems = [
    { to: '/call', label: 'Call', icon: Phone },
    { to: '/chats', label: 'Chats', icon: MessageSquareText },
    { to: '/more', label: 'More', icon: HelpCircle },
];

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#FFF1F1] border-t border-gray-200 flex justify-around items-center h-[70px] z-50">
            {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `flex flex-col items-center text-xs px-4 py-2 rounded-full transition ${
                            isActive ? 'text-[#D22751] bg-[#FFD6E6]' : 'text-gray-400'
                        }`
                    }
                >
                    <Icon size={24} />
                    <span>{label}</span>
                </NavLink>
            ))}
        </nav>
    );
}
