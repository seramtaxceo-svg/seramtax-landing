import Image from "next/image";

/**
 * 법인전환 광고 #3 — 단체사진 + 권위 조합 디자인
 * 사이즈: 1080 x 1350 (메타 피드 4:5)
 */
export default function IncorporationAd3() {
  return (
    <>
      <div className="text-xs text-text-sub font-bold tracking-wider">
        📸 스크린샷: Windows = Win+Shift+S / Mac = Cmd+Shift+4
      </div>
      <div
        className="relative overflow-hidden bg-white shadow-2xl"
        style={{ width: "1080px", height: "1350px" }}
      >
        <div className="h-full flex flex-col">
          {/* 상단 — 포브스 인용 영역 (딥블루 그라데이션) */}
          <div className="relative bg-primary-gradient text-white px-14 py-10 overflow-hidden">
            <div className="absolute inset-0 bg-best-pattern opacity-50 pointer-events-none" />
            <div className="relative flex items-center gap-5">
              <div className="w-14 h-14 rounded-lg bg-white text-primary font-black flex items-center justify-center text-2xl shadow-soft shrink-0">
                F
              </div>
              <div className="flex-1">
                <div className="text-[13px] text-accent font-bold tracking-[0.15em]">
                  PRESS QUOTE · 포브스코리아 2026.02.23 보도
                </div>
                <div className="mt-1 text-[26px] font-extrabold leading-tight italic">
                  세람택스, 2024년 매출{" "}
                  <span className="text-accent">94억원</span>
                </div>
              </div>
            </div>
          </div>

          {/* 중앙 — 단체사진 */}
          <div className="relative flex-1 bg-soft overflow-hidden">
            <Image
              src="/a7135.jpg"
              alt="세무그룹 세람택스 전담팀"
              width={2400}
              height={1600}
              className="w-full h-full object-cover"
              priority
            />
            {/* 좌상단 통계 칩 */}
            <div className="absolute top-6 left-6 flex flex-col gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-soft">
                <span className="text-sm text-text-sub font-bold">
                  소속 세무사
                </span>
                <span className="text-lg font-extrabold text-primary">
                  6명
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-soft">
                <span className="text-sm text-text-sub font-bold">
                  전 직원
                </span>
                <span className="text-lg font-extrabold text-primary">
                  21명
                </span>
              </div>
            </div>
          </div>

          {/* 하단 — 카피 + CTA */}
          <div className="px-14 py-10 bg-white border-t border-brand-border">
            <h1 className="text-[44px] font-extrabold text-primary leading-[1.2] break-keep">
              매출 5억 넘은 사장님,
              <br />
              <span className="text-accent">법인전환 골든타임</span>입니다
            </h1>
            <div className="mt-5 flex items-center justify-between gap-6">
              <p className="text-lg text-text-sub leading-relaxed break-keep">
                전환 적정시점부터 영업권 평가까지
                <br />
                세무그룹 세람택스의 통합 컨설팅
              </p>
              <div className="shrink-0 rounded-2xl bg-accent-gradient text-white px-7 py-4 text-lg font-extrabold shadow-glow whitespace-nowrap">
                자세히 보기 →
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-[13px] text-text-sub">
              <span>※ 포브스코리아 보도 인용 (자칭 표현 아님)</span>
              <span>
                광고책임세무사{" "}
                <strong className="text-primary">정승영</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
