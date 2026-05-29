export default function Footer() {
  return (
    <footer className="px-6 py-10 md:py-12 bg-[#0E2E5C] text-white">
      <div className="max-w-5xl mx-auto text-sm space-y-2.5">
        <div className="text-base md:text-lg font-extrabold">
          세무그룹 세람택스
        </div>
        <div className="text-white/85">
          대표 세무사 / 광고책임세무사: <strong>정승영</strong>
        </div>

        <div className="pt-3 grid gap-1 text-white/70 text-xs md:text-sm">
          <div>사업자등록번호: 492-03-01378</div>
          <div>주소: 서울시 강남구 테헤란로 322, 서관 218~220호</div>
          <div>전화: 02-2135-5789</div>
          <div>
            카카오톡:{" "}
            <a
              href="http://pf.kakao.com/_mZpqxb/chat"
              className="underline hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              pf.kakao.com/_mZpqxb/chat
            </a>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="/privacy"
            className="underline text-white/90 hover:text-white text-xs md:text-sm"
          >
            개인정보처리방침
          </a>
        </div>

        <div className="pt-2 text-white/50 text-xs">ⓒ 2026 SERAM TAX</div>
      </div>
    </footer>
  );
}
