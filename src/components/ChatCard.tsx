// src/components/ChatCard.tsx
type ChatCardProps = {
    profile: string;
    name: string;
    message: string;
    time: string;
};

export default function ChatCard({ profile, name, message, time }: ChatCardProps) {
    return (
        <div className="flex items-center gap-4 py-3 px-5 border-b">
            <img src={profile} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
                <div className="font-bold text-gray-900">{name}</div>
                <div className="text-sm text-gray-500 truncate">{message}</div>
            </div>
            <div className="text-xs text-gray-400">{time}</div>
        </div>
    );
}
