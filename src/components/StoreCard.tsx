// src/components/StoreCard.tsx
type StoreCardProps = {
    title: string;
    desc: string;
    price: number;
    onClick: () => void;
};

export default function StoreCard({ title, desc, price, onClick }: StoreCardProps) {
    return (
        <div
            className="bg-[#FFF1F1] rounded-xl p-4 flex justify-between items-center mb-5"
            style={{
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)', // 부드러운 그림자 효과
            }}
        >
            <div>
                <h3 className="font-semibold text-[16px]">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
            </div>
            <div className="flex flex-col items-end">
                <button
                    className="bg-[#F9AAB8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-1"
                    onClick={onClick}
                >
                    구매
                </button>
                <span className="text-lg font-bold">₩{price.toLocaleString()}</span>
            </div>
        </div>
    );
}

