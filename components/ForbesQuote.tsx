/**
 * 신뢰 앵커: 포브스코리아 보도 강조 인용 섹션
 * 광고규정 §7-② 준수: "1위" 표현은 우리(세람택스) 자칭이 아닌
 * 제3자(포브스코리아) 인용임이 시각적으로 명확히 드러나야 함.
 */
export default function ForbesQuote() {
  return (
    <section className="px-6 py-14 md:py-24 bg-soft">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-card overflow-hidden bg-primary-gradient text-white shadow-primary-lg">
          {/* 텍스처 오버레이 */}
          <div className="absolute inset-0 bg-best-pattern opacity-60 pointer-events-none" />

          <div className="relative px-6 py-9 md:px-14 md:py-14">
            {/* 신문 헤더 — F 로고 + 매체명 + 날짜 */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-white text-primary font-black flex items-center justify-center text-xl md:text-2xl">
                  F
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-accent font-bold tracking-[0.15em]">
                    PRESS QUOTE
                  </div>
                  <div className="text-sm md:text-base font-extrabold leading-tight">
                    포브스코리아 (Forbes Korea)
                  </div>
                </div>
              </div>
              <div className="text-xs md:text-sm text-white/70 font-bold">
                2026.02.23 보도
              </div>
            </div>

            {/* 인용문 — 거대 인용부호 + 기울임 */}
            <div className="relative mt-8 md:mt-10">
              <span
                aria-hidden
                className="absolute -top-6 -left-1 md:-top-10 md:-left-3 text-7xl md:text-[140px] font-black text-accent leading-none opacity-90 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative pl-8 md:pl-20 text-xl md:text-3xl font-extrabold leading-snug italic break-keep">
                세람택스, 매출 94억…
                <br className="hidden md:block" />
                개인 세무사 사무소{" "}
                <span className="text-accent">&lsquo;전국 1위&rsquo;</span>
              </blockquote>
              <div className="flex justify-end mt-2 md:mt-4">
                <span
                  aria-hidden
                  className="text-7xl md:text-[140px] font-black text-accent leading-none opacity-90 select-none -mt-8 md:-mt-16"
                >
                  &rdquo;
                </span>
              </div>
            </div>

            {/* 통계 카드 2개 — 글래스모피즘 */}
            <div className="mt-2 md:mt-4 grid grid-cols-2 gap-3 md:gap-4">
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4 md:p-5">
                <div className="text-[11px] md:text-xs text-white/75 font-bold">
                  2024년 매출
                </div>
                <div className="mt-1 flex items-baseline gap-1 leading-none">
                  <span className="text-3xl md:text-5xl font-black text-accent tracking-tight">
                    94
                  </span>
                  <span className="text-lg md:text-2xl font-extrabold text-accent">
                    억원
                  </span>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4 md:p-5">
                <div className="text-[11px] md:text-xs text-white/75 font-bold">
                  매출 20억 초과 사무소
                </div>
                <div className="mt-1 flex items-baseline gap-1 leading-none">
                  <span className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    전국 20
                  </span>
                  <span className="text-lg md:text-2xl font-extrabold">곳</span>
                </div>
              </div>
            </div>

            {/* 출처 부가 설명 */}
            <p className="mt-6 text-sm md:text-base text-white/85 italic leading-relaxed break-keep">
              — <strong className="not-italic">한국평가데이터</strong> 분석
              기준. 공시 의무가 없어 실적 파악이 어려웠던 개인 세무사 시장의
              매출 데이터.
            </p>

            {/* 포브스 기사 이미지 placeholder */}
            <div className="mt-7 rounded-xl bg-white/5 border border-dashed border-white/25 p-4 text-center text-xs md:text-sm text-white/60">
              📷 포브스코리아 기사 캡처 이미지 (public/forbes-article.png)
            </div>

            {/* 인용 명시 fine print */}
            <p className="mt-5 text-[12px] md:text-[13px] text-white/65 text-center leading-relaxed break-keep">
              ※ 본 표현은 포브스코리아 보도를 인용한 것이며,
              <br className="md:hidden" /> 세무그룹 세람택스가 자칭한 표현이
              아닙니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
