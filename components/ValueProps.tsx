type Variant = "refund" | "incorporation";

type Prop = { title: string; desc: string; emoji: string };

const PROPS: Record<Variant, Prop[]> = {
  refund: [
    {
      emoji: "📊",
      title: "매출 94억 규모의 처리 경험",
      desc: "포브스코리아 보도(2024년 매출 94억원). 한국평가데이터 분석 기준 매출 20억 초과 개인 세무사 사무소 전국 20여 곳 중 하나. 풍부한 처리 경험에서 나오는 정확한 진단을 제공합니다.",
    },
    {
      emoji: "🔍",
      title: "업종별 환급 노하우",
      desc: "음식점·미용실·온라인쇼핑몰 등 업종 특성에 따른 누락 비용·놓친 공제 항목을 5년치 종합 검토합니다.",
    },
    {
      emoji: "🤝",
      title: "1:1 전담 + 환급 후 사후관리",
      desc: "진단부터 환급, 그 이후 세무관리까지 한 명의 전담 세무사가 끝까지 책임집니다.",
    },
  ],
  incorporation: [
    {
      emoji: "📊",
      title: "매출 94억 규모의 처리 경험으로 만드는 전환 전략",
      desc: "포브스코리아 보도(2024년 매출 94억원) 기준 풍부한 처리 경험. 단순 등기 대행이 아닌 전환 전·중·후를 통합 설계합니다.",
    },
    {
      emoji: "💰",
      title: "영업권 평가로 자금 인출까지",
      desc: "그동안 쌓은 사업 가치를 합법적으로 현금화하는 영업권 평가 기반의 자금 인출 전략을 제공합니다.",
    },
    {
      emoji: "🛡️",
      title: "전환 후 5년 사후관리",
      desc: "법인 운영, 대표 급여 설계, 가지급금·가수금 관리까지 전담 사후관리합니다.",
    },
  ],
};

export default function ValueProps({ variant }: { variant: Variant }) {
  return (
    <section className="px-6 py-14 md:py-24 bg-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">WHY SERAMTAX</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary break-keep">
            왜 세람택스인가
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROPS[variant].map((p, i) => (
            <div
              key={i}
              className="relative rounded-card bg-white shadow-soft p-6 md:p-7 border border-brand-border hover:-translate-y-1 hover:shadow-primary-lg transition-all"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-primary-gradient text-white text-lg font-extrabold flex items-center justify-center shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-3xl">{p.emoji}</div>
              <div className="mt-3 text-lg md:text-xl font-extrabold text-primary leading-snug break-keep">
                {p.title}
              </div>
              <p className="mt-4 text-sm text-text-sub leading-relaxed break-keep">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
