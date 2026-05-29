type Variant = "refund" | "incorporation";

const STEPS: Record<Variant, { step: string; sub?: string }[]> = {
  refund: [
    { step: "무료 상담 신청", sub: "페이지 폼 작성" },
    { step: "5년치 신고 자료 검토", sub: "전담 세무사 배정" },
    { step: "환급 가능액 산정 및 보고" },
    { step: "경정청구 진행 + 환급 완료" },
  ],
  incorporation: [
    { step: "무료 상담 신청" },
    { step: "전환 적정시점 진단", sub: "전담 세무사 1:1" },
    { step: "전환 전략 설계", sub: "영업권 평가 / 포괄양수도 선택" },
    { step: "법인 설립 + 전환 실행" },
    { step: "전환 후 5년 사후관리" },
  ],
};

export default function Process({ variant }: { variant: Variant }) {
  const steps = STEPS[variant];
  return (
    <section className="px-6 py-14 md:py-24 bg-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">PROCESS</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary">
            진행 절차
          </h2>
        </div>

        <ol className="mt-10 space-y-3 md:space-y-4">
          {steps.map((s, i) => (
            <li
              key={i}
              className="relative flex items-start gap-4 rounded-card bg-white shadow-soft p-5 md:p-6 border border-brand-border"
            >
              <span className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-gradient text-white font-extrabold flex items-center justify-center shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1 md:pt-1.5">
                <div className="text-base md:text-lg font-extrabold text-primary break-keep">
                  {s.step}
                </div>
                {s.sub && (
                  <div className="mt-0.5 text-sm text-text-sub break-keep">
                    {s.sub}
                  </div>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[34px] md:left-[42px] -bottom-3 md:-bottom-4 text-accent text-xl md:text-2xl font-bold leading-none">
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
