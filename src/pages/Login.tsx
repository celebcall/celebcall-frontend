import logo from '../assets/logo.svg';

export default function Login() {
    return (
        <div className="w-full min-h-screen bg-[#FFF1F1] flex flex-col items-center justify-between pt-20 pb-10 px-4">
            {/* 로고 묶음 */}
            <div className="flex flex-col items-center">
                <img src={logo} alt="logo" className="w-[136px] h-[104px] mb-2" />
                <h1 className="text-[50px] text-[#D22751] font-baloo font-black leading-none">celebcall</h1>
            </div>

            {/* 설명 텍스트 */}
            <div className="text-center mt-4">
                <p className="text-[#4B4B4B] text-[22px] font-bold leading-[130%] -tracking-[0.5px]">
                    당신의 최애 아티스트와<br />가장 쉽게 만나세요!
                </p>
                <p className="text-[#8B8B8B] text-[20px] font-medium leading-[130%] mt-2">
                    아티스트가 기다리고 있습니다!
                </p>
            </div>

            {/* 로그인 버튼 */}
            <div className="w-full px-5 mt-10">
                <button className="w-full h-[48px] bg-[#FFCD4D] text-[#342702] text-[16px] font-semibold rounded-[8px]">
                    카카오 로그인
                </button>
            </div>

            {/* 회원가입 */}
            <p className="text-[#8B8B8B] text-[14px] font-medium mt-6">회원가입</p>
        </div>
    );
}
