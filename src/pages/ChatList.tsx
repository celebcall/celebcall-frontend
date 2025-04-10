import ChatCard from '../components/ChatCard';
import HeaderBar from "../components/HeaderBar.tsx";
import BottomNav from "../components/BottomNav.tsx";

const dummyChats = [
    {
        profile: 'src/dummy-assets/celeb_profile_img_1.png',
        name: '장원영',
        message: '오늘 영상통화 정말 감사했어요!',
        time: '오전 9:41',
    },
    {
        profile: 'src/dummy-assets/celeb_profile_img_2.png',
        name: '박지원',
        message: '좋은 하루 보내세요~',
        time: '어제',
    },
    {
        profile: 'src/dummy-assets/celeb_profile_img_3.png',
        name: '부승관',
        message: '곧 새 앨범 나와요! 기대해주세요.',
        time: '2024.12.01',
    },
];

export default function ChatList() {
    return (
        <div className="min-h-screen bg-[#FCF8F8]">
            <HeaderBar title="FRIENDS" />

            {/* me 프로필 */}
            <div className="px-5 pb-4 flex items-center gap-4">
                <img
                    src="src/dummy-assets/sample_profile_img.png"
                    alt="me"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <div className="text-[18px] font-semibold text-black">me</div>
                    <div className="text-sm text-black/60">profile message</div>
                </div>
            </div>
            <p className="px-5 text-[12px] text-gray-400 mb-2">추천 친구 345</p>

            {/* 채팅 목록 */}
            <div>
                {dummyChats.map((chat, idx) => (
                    <ChatCard key={idx} {...chat} />
                ))}
            </div>

            <BottomNav />
        </div>
    );
}
