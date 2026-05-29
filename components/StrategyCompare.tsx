const STRATEGIES = [
  {
    emoji: "💼",
    name: "영업권 평가 전환",
    feature: "자금 인출 효과",
    desc: "그동안 쌓은 사업 가치를 영업권으로 평가해 합법적으로 현금화하는 방식.",
    tone: "primary" as const,
  },
  {
    emoji: "🎯",
    name: "세감면 포괄양수도",
    feature: "절세 효과 극대화",
    desc: "조세특례 요건 충족 시 양도소득세·취득세 등 세제 감면 효과가 가장 큰 구조.",
    tone: "accent" as const,
  },
  {
    emoji: "📋",
    name: "일반 포괄양수도",
    feature: "가장 보편적",
    desc: "사업의 모든 권리·의무를 일괄 승계하는 표준 방식. 절차가 비교적 단순합니다.",
    tone: "success" as const,
  },
];

const TONE_STYLES = {
  primary: {
    border: "border-primary/30",
    chip: "bg-primary text-white",
    accent: "text-primary",
  },
  accent: {
    border: "border-accent/40",
    chip: "bg-accent-gradient text-white shadow-glow",
    accent: "text-accent",
  },
  success: {
    border: "border-success/30",
    chip: "bg-success text-white",
    accent: "text-success",
  },
};

export default function StrategyCompare() {
  return (
    <section className="px-6 py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">COMPARISON</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary">
            전환 방식 비교
          </h2>
          <p className="mt-3 text-sm md:text-base text-text-sub">
            세 가지 전환 방식이 어떻게 다른지 한눈에 확인해보세요.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STRATEGIES.map((s, i) => {
            const style = TONE_STYLES[s.tone];
            return (
              <div
                key={i}
                className={`relative rounded-card bg-soft border ${style.border} shadow-soft p-6 md:p-7 hover:-translate-y-1 transition-transform`}
              >
                <div className="text-3xl">{s.emoji}</div>
                <div className="mt-3 text-lg md:text-xl font-extrabold text-primary">
                  {s.name}
                </div>
                <div
                  className={`mt-3 inline-flex text-xs font-bold rounded-full px-3 py-1.5 ${style.chip}`}
                >
                  {s.feature}
                </div>
                <p className="mt-4 text-sm text-text-sub leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs md:text-sm text-text-sub text-center leading-relaxed">
          *상세 설명과 사업장별 최적 방식은 무료 상담에서 안내해드립니다.
        </p>
      </div>
    </section>
  );
}
