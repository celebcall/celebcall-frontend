// src/pages/Notice.tsx
import { useState } from 'react';
import StoreHeader from '../components/StoreHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

type NoticeItem = {
    title: string;
    date: string;
    content: string;
};

const notices: NoticeItem[] = [
    {
        title: '서버 점검으로 인한 celebcall 이용 일시 중지 안내 (08/19 새벽 KST)',
        date: '2024-08-14 14:00:00',
        content: `
안녕하세요.
celebcall을 이용해주시는 회원님께 진심으로 감사드립니다.

원활하고 안정적 운영을 위해 celebcall 서버 점검을 아래와 같이 실시할 예정입니다.
해당 작업 중에는 서비스 이용이 불가하므로 참고하시어 불편이 없으시기 바랍니다.

—아래—
1. 일시 : 2024년 08월 19일 (월) 01:00~09:00 AM (KST 기준, 8시간 예정)
2. 내용 : 서버 점검으로 인한 서비스 이용 일시 중지
※ 점검 시간은 상황에 따라 조기종료 또는 지연될 수 있습니다.

항상 안정적인 서비스 제공을 위해 최선을 다하겠습니다.
감사합니다.
24/08/14
celebcall 드림`,
    },
    {
        title: '‘AAA’ celebcall 종료 안내',
        date: '2024-08-14 14:00:00',
        content: `
안녕하세요.
celebcall 서비스를 이용해주시는 회원님들께 진심으로 감사드리며,
celebcall을 구독하신 회원님들께 아래 내용을 확인해주시기 바랍니다.`,
    },
    {
        title: '이용약관 개정 안내 (시행일: 2024.09.01)',
        date: '2024-08-10 09:30:00',
        content: `
안녕하세요.
celebcall을 이용해주시는 회원 여러분께 감사드리며, 
celebcall 서비스 이용약관이 2024년 9월 1일자로 개정될 예정임을 안내드립니다.

[주요 개정 사항]
- 제3조 서비스의 이용조건 관련 내용 보완
- 제12조 환불 및 해지 절차 개선

변경된 약관은 시행일 이후 처음 서비스 이용 시 동의 절차를 통해 적용됩니다.
약관 개정에 동의하지 않으시는 경우, 서비스 이용을 중단하실 수 있습니다.

감사합니다.`,
    },
];


export default function Notice() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // 첫 번째 공지 열기

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="min-h-screen bg-[#FCF8F8] pb-6">
            <StoreHeader title="NOTICE" />

            <div className="px-4">
                {notices.map((notice, idx) => (
                    <div key={idx} className="mb-4 border-b border-gray-300 pb-4">
                        <button
                            onClick={() => toggle(idx)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <div>
                                <h3 className="text-[15px] font-semibold mb-1">{notice.title}</h3>
                                <p className="text-sm text-gray-500">{notice.date}</p>
                            </div>
                            {openIndex === idx ? (
                                <ChevronUp size={20} color="#D22751" />
                            ) : (
                                <ChevronDown size={20} color="#D22751" />
                            )}
                        </button>

                        {openIndex === idx && (
                            <div className="mt-3 bg-[#F7EDEE] text-sm text-gray-700 p-4 rounded-lg whitespace-pre-line">
                                {notice.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
