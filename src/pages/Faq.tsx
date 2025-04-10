// src/pages/Faq.tsx
import { useState } from 'react';
import StoreHeader from '../components/StoreHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
    question: string;
    answer: string;
};

const faqList: FaqItem[] = [
    {
        question: 'Q. 비밀번호를 잊어버려서 로그인 할 수 없어요.',
        answer: '비밀번호 재설정은 로그인 화면에서 "비밀번호 찾기"를 통해 진행하실 수 있습니다.',
    },
    {
        question: 'Q. 비밀번호를 재설정 하고 싶어요!',
        answer: '설정 > 계정 > 비밀번호 변경 메뉴에서 새로운 비밀번호로 설정하실 수 있어요.',
    },
    {
        question: 'Q. 생일을 설정(변경)하고 싶어요.',
        answer: '계정 정보는 최초 가입 시 설정되며, 생일 변경은 고객센터를 통해 요청 가능합니다.',
    },
    {
        question: 'Q. 프로필을 변경할래요.',
        answer: '마이페이지 > 프로필 수정에서 이미지와 메시지를 변경하실 수 있어요.',
    },
    {
        question: 'Q. 아티스트와의 채팅 기록은 어디서 확인하나요?',
        answer: '채팅 화면에서 아티스트를 클릭하면 이전 대화를 확인하실 수 있습니다.',
    },
    {
        question: 'Q. 음성통화는 어떻게 진행되나요?',
        answer: '구매한 이용권을 통해 사전 예약된 시간에 앱 내에서 영상통화를 진행할 수 있습니다.',
    },
    {
        question: 'Q. 결제 수단을 변경하고 싶어요.',
        answer: '앱마켓(구글플레이/앱스토어) 계정 설정에서 결제 수단을 변경하실 수 있습니다.',
    },
    {
        question: 'Q. 탈퇴는 어떻게 하나요?',
        answer: '설정 > 계정 > 회원탈퇴 메뉴를 통해 계정을 삭제하실 수 있습니다.',
    },
];


export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#FCF8F8] pb-4">
            <StoreHeader title="FAQ" />

            <ul className="px-4 mt-4 space-y-3">
                {faqList.map((item, idx) => (
                    <li key={idx} className="bg-white rounded-xl border shadow-sm">
                        <button
                            className="flex items-center justify-between w-full px-4 py-3"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <span className="text-base text-left text-black">{item.question}</span>
                            {openIndex === idx ? (
                                <ChevronUp size={20} className="text-[#D22751]" />
                            ) : (
                                <ChevronDown size={20} className="text-[#D22751]" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                                {item.answer}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
