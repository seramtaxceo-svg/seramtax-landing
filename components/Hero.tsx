import ResponsiblePersonBadge from "./ResponsiblePersonBadge";

type Variant = "refund" | "incorporation";

type Promise = { icon: string; title: string; sub: string };

const COPY: Record<
  Variant,
  {
    title: string;
    sub: string;
    cta: string;
    promiseTitle: string;
    promises: Promise[];
  }
> = {
  refund: {
    title: "음식점·미용실·온라인쇼핑몰 사장님,\n안 받은 환급금 확인해보셨습니까?",
    sub: "최대 5년치 종합소득세 무료 검토\n세무그룹 세람택스가 직접 진단합니다",
    cta: "내 환급 가능액 무료로 확인하기",
    promiseTitle: "5분 작성 →\n5년치 환급 검토",
    promises: [
      {
        icon: "💰",
        title: "비용 부담 0원",
        sub: "사전 진단은 비용이 들지 않습니다",
      },
      {
        icon: "⏰",
        title: "영업일 24시간 내 회신",
        sub: "전담 세무사가 직접 연락드립니다",
      },
      {
        icon: "📁",
        title: "5년치 자료 일괄 검토",
        sub: "누락 공제 항목 빠짐없이 검토",
      },
    ],
  },
  incorporation: {
    title: "매출 5억 넘은 사장님,\n지금이 법인전환 골든타임입니다",
    sub: "전환 적정시점부터 영업권 평가까지\n세무그룹 세람택스의 통합 컨설팅",
    cta: "내 사업 법인전환 적정시점 진단받기",
    promiseTitle: "5분 작성 →\n전환 적정시점 진단",
    promises: [
      {
        icon: "💰",
        title: "비용 부담 0원",
        sub: "사전 진단은 비용이 들지 않습니다",
      },
      {
        icon: "⏰",
        title: "영업일 24시간 내 회신",
        sub: "전담 세무사가 직접 연락드립니다",
      },
      {
        icon: "🎯",
        title: "전환 전·중·후 통합 설계",
        sub: "전환 후 5년 사후관리까지",
      },
    ],
  },
};

export default function Hero({ variant }: { variant: Variant }) {
  const copy = COPY[variant];
  return (
    <section className="relative overflow-hidden bg-soft px-6 pt-12 pb-12 md:pt-24 md:pb-20">
      <div className="absolute inset-0 -z-10 bg-best-pattern opacity-60" />
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 md:gap-12 items-center">
        <div className="animate-slide-up">
          <ResponsiblePersonBadge variant="inline" />

          <h1 className="mt-5 text-[26px] leading-tight md:text-[44px] md:leading-[1.2] font-extrabold text-primary whitespace-pre-line break-keep">
            {copy.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-text-sub whitespace-pre-line leading-relaxed break-keep">
            {copy.sub}
          </p>

          <a
            href="#lead-form"
            className="mt-8 inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-card bg-accent-gradient text-white font-extrabold px-7 py-4 md:py-5 text-base md:text-lg shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            {copy.cta}
            <span aria-hidden>→</span>
          </a>

          <p className="mt-3 text-xs text-text-sub text-center md:text-left">
            *5분이면 충분합니다. 영업일 24시간 내 회신
          </p>
        </div>

        <div className="relative rounded-card bg-white border border-brand-border shadow-primary-lg overflow-hidden">
          <div className="p-6 md:p-7">
            {/* 헤더 칩 */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-gradient text-white px-3 py-1.5 shadow-glow">
              <span aria-hidden>⚡</span>
              <span className="text-[11px] md:text-xs font-extrabold tracking-[0.12em]">
                FREE DIAGNOSIS
              </span>
            </div>

            {/* 약속 타이틀 */}
            <h2 className="mt-4 text-2xl md:text-[28px] font-extrabold text-primary leading-snug whitespace-pre-line break-keep">
              {copy.promiseTitle}
            </h2>

            {/* 약속 3가지 */}
            <ul className="mt-6 space-y-3">
              {copy.promises.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-soft border border-brand-border px-4 py-3"
                >
                  <span className="shrink-0 text-xl md:text-2xl leading-none">
                    {p.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm md:text-base font-extrabold text-primary leading-tight break-keep">
                      {p.title}
                    </div>
                    <div className="mt-0.5 text-[12px] md:text-[13px] text-text-sub leading-snug break-keep">
                      {p.sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* 광고책임세무사 */}
            <div className="mt-5 pt-4 border-t border-brand-border text-[11px] md:text-xs text-text-sub text-center break-keep">
              광고책임세무사{" "}
              <strong className="text-primary">정승영</strong> · 세무그룹
              세람택스
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
