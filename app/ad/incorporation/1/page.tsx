/**
 * 법인전환 광고 #1 — 포브스 권위 강조 디자인
 * 사이즈: 1080 x 1350 (메타 피드 4:5 권장 비율)
 */
export default function IncorporationAd1() {
  return (
    <>
      <div className="text-xs text-text-sub font-bold tracking-wider">
        📸 스크린샷: Windows = Win+Shift+S / Mac = Cmd+Shift+4
      </div>
      <div
        className="relative overflow-hidden bg-primary-gradient text-white shadow-2xl"
        style={{ width: "1080px", height: "1350px" }}
      >
        <div className="absolute inset-0 bg-best-pattern opacity-50 pointer-events-none" />

        <div className="relative h-full flex flex-col p-16">
          {/* 헤더 */}
          <div className="flex items-center justify-between pb-7 border-b border-white/15">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white text-primary font-black flex items-center justify-center text-3xl shadow-soft">
                F
              </div>
              <div>
                <div className="text-[15px] text-accent font-bold tracking-[0.18em]">
                  PRESS QUOTE
                </div>
                <div className="mt-1 text-xl font-extrabold leading-none">
                  포브스코리아 (Forbes Korea)
                </div>
              </div>
            </div>
            <div className="text-base text-white/70 font-bold">
              2026.02.23 보도
            </div>
          </div>

          {/* 거대 인용문 */}
          <div className="relative mt-12">
            <span
              aria-hidden
              className="absolute -top-12 -left-4 text-[180px] font-black text-accent opacity-90 leading-none select-none"
            >
              &ldquo;
            </span>
            <blockquote className="relative pl-24 text-[48px] font-extrabold leading-[1.2] italic break-keep">
              세람택스, 매출 94억…
              <br />
              개인 세무사 사무소{" "}
              <span className="text-accent">&lsquo;전국 1위&rsquo;</span>
            </blockquote>
          </div>

          {/* 통계 카드 */}
          <div className="mt-14 grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-7">
              <div className="text-sm text-white/80 font-bold uppercase tracking-wider">
                2024년 매출
              </div>
              <div className="mt-2 flex items-baseline gap-1 leading-none">
                <span className="text-[72px] font-black text-accent tracking-tight drop-shadow-[0_4px_16px_rgba(255,107,53,0.4)]">
                  94
                </span>
                <span className="text-3xl font-extrabold text-accent">
                  억원
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-7">
              <div className="text-sm text-white/80 font-bold uppercase tracking-wider">
                매출 20억+ 사무소
              </div>
              <div className="mt-2 flex items-baseline gap-1 leading-none">
                <span className="text-[72px] font-black text-white tracking-tight">
                  20
                </span>
                <span className="text-3xl font-extrabold">곳</span>
              </div>
            </div>
          </div>

          {/* 카피 */}
          <div className="mt-auto pt-12">
            <div className="text-[42px] font-extrabold leading-[1.25] break-keep">
              매출 5억 넘은 사장님,
              <br />
              <span className="text-accent">법인전환 골든타임</span>입니다
            </div>
            <div className="mt-5 text-xl text-white/85 break-keep">
              세무그룹 세람택스가 직접 진단합니다 · 무료 사전 진단
            </div>
          </div>

          {/* Fine print */}
          <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-sm text-white/65">
            <div>※ 포브스코리아 보도 인용 (자칭 표현 아님)</div>
            <div>
              광고책임세무사{" "}
              <strong className="text-white">정승영</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
