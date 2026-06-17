/**
 * 법인전환 광고 #2 — 사례 절세 숫자 임팩트 디자인
 * 사이즈: 1080 x 1350 (메타 피드 4:5)
 */
export default function IncorporationAd2() {
  const cases = [
    {
      emoji: "📸",
      industry: "사진촬영업",
      revenue: "매출 4.8억",
      annual: "1,400만원",
      total: "6,000만원",
    },
    {
      emoji: "📚",
      industry: "학원업",
      revenue: "매출 7억",
      annual: "2,300만원",
      total: "1억 2,000만원",
    },
    {
      emoji: "🍴",
      industry: "음식점업",
      revenue: "매출 12억",
      annual: "800만원",
      total: "3,500만원",
    },
  ];
  return (
    <>
      <div className="text-xs text-text-sub font-bold tracking-wider">
        📸 스크린샷: Windows = Win+Shift+S / Mac = Cmd+Shift+4
      </div>
      <div
        className="relative overflow-hidden bg-white shadow-2xl"
        style={{ width: "1080px", height: "1350px" }}
      >
        <div className="h-full flex flex-col p-16">
          {/* 헤더 */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-gradient text-white px-5 py-2.5 shadow-glow">
              <span>⚡</span>
              <span className="text-base font-extrabold tracking-[0.12em]">
                REAL CASES
              </span>
            </div>
            <h1 className="mt-5 text-[52px] font-extrabold text-primary leading-[1.2] break-keep">
              세람택스가 진행한
              <br />
              실제 <span className="text-accent">법인전환 절세 사례</span>
            </h1>
          </div>

          {/* 사례 카드 3개 */}
          <div className="mt-10 grid grid-cols-3 gap-4 flex-1">
            {cases.map((c, i) => (
              <article
                key={i}
                className="rounded-2xl bg-soft border border-brand-border shadow-soft p-6 flex flex-col"
              >
                <div className="text-5xl">{c.emoji}</div>
                <div className="mt-3 text-[22px] font-extrabold text-primary leading-tight">
                  {c.industry}
                </div>
                <div className="mt-1 text-sm text-text-sub">
                  전환 직전 {c.revenue}
                </div>

                <div className="mt-auto pt-5 space-y-3">
                  <div>
                    <div className="text-[11px] font-bold text-text-sub uppercase tracking-wider">
                      연간 절세
                    </div>
                    <div className="mt-1 text-[30px] font-black text-success leading-none">
                      {c.annual}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-brand-border">
                    <div className="text-[11px] font-bold text-text-sub uppercase tracking-wider">
                      총 절세효과
                    </div>
                    <div className="mt-1 text-[28px] font-black text-primary leading-none break-keep">
                      {c.total}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 카피 + CTA */}
          <div className="mt-10 rounded-2xl bg-primary-gradient text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-best-pattern opacity-50 pointer-events-none" />
            <div className="relative flex items-center justify-between gap-6">
              <div>
                <div className="text-sm text-accent font-bold tracking-[0.15em]">
                  FREE DIAGNOSIS
                </div>
                <div className="mt-2 text-[32px] font-extrabold leading-tight break-keep">
                  내 사업 법인전환 적정시점
                  <br />
                  무료 진단받기
                </div>
              </div>
              <div className="shrink-0 rounded-2xl bg-accent-gradient text-white px-8 py-5 text-xl font-extrabold shadow-glow whitespace-nowrap">
                자세히 보기 →
              </div>
            </div>
          </div>

          {/* 면책 + 광고책임세무사 */}
          <div className="mt-5 flex items-start justify-between gap-6">
            <p className="text-[13px] text-disclaimer leading-relaxed break-keep flex-1">
              ※ 본 사례는 개별 법인전환 컨설팅 사례입니다. 절세 효과는 업종·매출
              구조·전환 시점에 따라 큰 편차가 있으며, 위 사례가 일반적인 절세
              결과를 의미하지 않습니다.
            </p>
            <div className="shrink-0 text-[13px] text-text-sub text-right">
              광고책임세무사{" "}
              <strong className="text-primary">정승영</strong>
              <br />
              세무그룹 세람택스
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
