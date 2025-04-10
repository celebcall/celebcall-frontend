// src/pages/OrderHistory.tsx
import StoreHeader from '../components/StoreHeader';

type Order = {
    title: string;
    date: string;
    price: number;
};

const orders: Order[] = [
    {
        title: 'Celeb 문자채팅 이용권 (7건) 구매',
        date: '2024.08.14',
        price: 2300,
    },
    {
        title: 'Celeb 문자채팅 이용권 (7건) 구매',
        date: '2023.02.14',
        price: 2300,
    },
    {
        title: 'Celeb 문자채팅 이용권 (15건) 구매',
        date: '2022.08.14',
        price: 4500,
    },
    {
        title: 'Celeb 문자채팅 이용권 (15건) 구매',
        date: '2021.08.14',
        price: 4500,
    },
    {
        title: 'Celeb 음성채팅 이용권 (3건) 구매',
        date: '2021.08.14',
        price: 9900,
    },
];

export default function OrderHistory() {
    return (
        <div className="min-h-screen bg-[#FCF8F8] pb-6">
            <StoreHeader title="ORDER HISTORY" />

            <div className="px-4 mt-2">
                {orders.map((order, i) => (
                    <div
                        key={i}
                        className="bg-[#FFF1F1] rounded-xl p-4 flex justify-between items-center mb-4"
                        style={{
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        <div>
                            <h3 className="font-medium text-[15px]">{order.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                        </div>
                        <div className="text-lg font-bold">₩{order.price.toLocaleString()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
