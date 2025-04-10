// src/pages/Store.tsx
import { useState } from 'react';
import StoreHeader from '../components/StoreHeader';
import StoreCard from '../components/StoreCard';

type Product = {
    title: string;
    desc: string;
    price: number;
};

const products: Product[] = [
    {
        title: 'Celeb 문자채팅 이용권 (7건)',
        desc: '원하는 아티스트와 월 최대 7번까지의 채팅',
        price: 2300,
    },
    {
        title: 'Celeb 문자채팅 이용권 (15건)',
        desc: '원하는 아티스트와 월 최대 15번까지의 채팅',
        price: 4500,
    },
    {
        title: 'Celeb 음성채팅 이용권 (3건)',
        desc: '원하는 아티스트와 월 최대 3번까지의 음성채팅',
        price: 9900,
    },
];

export default function Store() {
    const [selected, setSelected] = useState<Product | null>(null);

    return (
        <div className="min-h-screen bg-[#FCF8F8] pb-6">
            <StoreHeader title="STORE"/>

            <div className="px-4 mt-2">
                {products.map((p, i) => (
                    <StoreCard
                        key={i}
                        {...p}
                        onClick={() => setSelected(p)}
                    />
                ))}
            </div>

            {/* 이용 안내 */}
            <div className="mt-8 px-4">
                <h3 className="text-[16px] font-semibold mb-2">이용 안내</h3>
                <div className="bg-[#F7EDEE] text-[14px] leading-[1.6] text-gray-700 p-4 rounded-lg">
                    <p>• 이용권은 구입한 날로부터 사용한 것으로 간주됩니다.</p>
                    <p>• 동일한 혜택을 포함하는 이용권을 중복구독 할 수 없습니다.</p>
                    <p>• 매월 자동으로 정기 결제 되는 상품입니다. 이용권 금액은 결제 시 결제일로부터 한 달간 서비스를 이용하는 요금이며, 한 달 뒤 자동갱신(자동결제) 됩니다.</p>
                    <p>• 이용권 이용기간이 끝나는 24시간 이상 전에 앱마켓을 통해 자동갱신을 취소 (OFF)하지 않으면, 자동으로 갱신됩니다.</p>
                    <p>• 결제 관련 사항은 스토어 발행 영수증 기준입니다. (주문일, 구독 갱신일 등)</p>
                    <p>• bubble 이용권은 한 번에 한 개의 앱마켓 계정에만 연동될 수 있습니다.</p>
                    <p>• 현재 사용하고 있는 앱마켓 ID와 해당 앱마켓 계정에 등록된 결제수단으로 결제됩니다.</p>
                    <p>• 앱을 삭제하더라도 구독은 별도로 취소되지 않습니다.</p>
                    <p>• 앱을 탈퇴하는 경우, 개인정보가 삭제되므로 구매하신 상품의 이용이 불가합니다.</p>
                    <p>• 미성년자의 경우, 법정대리인이 구매에 동의하지 않으면 본인 또는 법정대리인이 구매를 취소할 수 있습니다.</p>
                    <p>• 서비스 이용약관 및 개인정보 처리에 대한 사항은 '서비스 이용약관' 및 '개인정보처리방침'을 참고 부탁 드립니다. (약관: MORE &gt; 설정 &gt; 서비스
                        이용약관/개인정보처리방침)</p>
                </div>
            </div>


            {/* 모달 */}
            {selected && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-4/5 text-center">
                        <h3 className="text-lg font-bold mb-2">구매하기</h3>
                        <p className="text-sm text-gray-700 mb-1">{selected.title}</p>
                        <p className="text-lg font-bold mb-4">₩{selected.price.toLocaleString()}</p>
                        <button className="bg-[#F9AAB8] text-white font-semibold px-6 py-2 rounded-full mb-2 w-full">
                            구매
                        </button>
                        <button
                            onClick={() => setSelected(null)}
                            className="text-sm text-gray-400 underline mt-2 w-full"
                        >
                            취소
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
