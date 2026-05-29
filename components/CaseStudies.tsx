import Disclaimer from "./Disclaimer";

type Variant = "refund" | "incorporation";

/**
 * 사례 섹션 — 광고규정 §4-6 준수
 * - 3개 카드 동등 크기/디자인 (특정 카드 강조 금지)
 * - 카드 외 트로피·BEST 배지 사용 금지
 * - 하단 면책 문구 박스로 영역 강조
 */
export default function CaseStudies({ variant }: { variant: Variant }) {
  const title =
    variant === "refund"
      ? "세람택스가 진행한 실제 경정청구 사례"
      : "세람택스가 진행한 실제 법인전환 사례";
  return (
    <section className="px-6 py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">REAL CASES</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary break-keep">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch">
          {variant === "refund" ? <RefundCards /> : <IncorporationCards />}
        </div>

        <Disclaimer>
          {variant === "refund"
            ? "본 사례는 세무그룹 세람택스가 진행한 개별 환급 사례입니다. 환급액과 처리 기간은 사업장별 신고 내역, 업종, 매출 규모, 누락된 공제 항목의 수와 종류에 따라 매우 큰 편차가 있습니다. 위 사례가 일반적인 환급 결과를 의미하지 않습니다."
            : "본 사례는 세무그룹 세람택스가 진행한 개별 법인전환 컨설팅 사례입니다. 절세 효과는 업종, 매출 구조, 전환 시점, 전환 방식에 따라 큰 편차가 있으며, 위 사례가 일반적인 절세 결과를 의미하지 않습니다."}
        </Disclaimer>
      </div>
    </section>
  );
}

function RefundCards() {
  // 카드 순서: 미용실(송파) → 마트(경남시) → 음식점(하남) — v2 브리프 명세
  const cards = [
    {
      emoji: "💇",
      industry: "미용실",
      region: "송파구",
      item: ["창업중소기업", "세액감면 누락"],
      amount: "6,425,340",
      period: "47일",
    },
    {
      emoji: "🏪",
      industry: "마트",
      region: "경남시",
      item: ["고용창출", "세액공제 누락"],
      amount: "245,350,457",
      period: "96일",
    },
    {
      emoji: "🍴",
      industry: "음식점",
      region: "하남시",
      item: ["4대보험", "세액공제 누락"],
      amount: "2,664,000",
      period: "53일",
    },
  ];
  return (
    <>
      {cards.map((c, i) => (
        <RefundCard key={i} {...c} />
      ))}
    </>
  );
}

function RefundCard(props: {
  emoji: string;
  industry: string;
  region: string;
  item: string[];
  amount: string;
  period: string;
}) {
  return (
    <article className="h-full flex flex-col rounded-card bg-soft border border-brand-border shadow-soft p-6 md:p-7">
      <header className="flex items-center gap-2">
        <span className="text-2xl">{props.emoji}</span>
        <div>
          <div className="text-sm text-text-sub leading-none">
            {props.industry}
          </div>
          <div className="mt-1 text-base md:text-lg font-extrabold text-primary leading-none">
            {props.region}
          </div>
        </div>
      </header>

      <div className="mt-5 text-sm md:text-base text-text-main font-bold leading-snug break-keep">
        {props.item.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="text-[11px] font-bold text-text-sub uppercase tracking-wider">
          Refund
        </div>
        <div className="mt-1 flex items-baseline gap-1 leading-none break-keep">
          <span className="text-2xl md:text-3xl font-black text-success tracking-tight">
            {props.amount}
          </span>
          <span className="text-base md:text-lg font-extrabold text-success">
            원
          </span>
        </div>
        <p className="mt-3 text-[13px] text-text-sub italic">
          처리 기간 {props.period}
        </p>
      </div>
    </article>
  );
}

function IncorporationCards() {
  const cards = [
    {
      emoji: "📸",
      industry: "사진촬영업",
      revenue: "4.8억",
      strategy: ["영업권 평가", "법인전환"],
      annual: "1,400만원",
      total: "6,000만원",
    },
    {
      emoji: "📚",
      industry: "학원업",
      revenue: "7억",
      strategy: ["세감면 포괄양수도", "법인전환"],
      annual: "2,300만원",
      total: "1억 2,000만원",
    },
    {
      emoji: "🍴",
      industry: "음식점업",
      revenue: "12억",
      strategy: ["일반 포괄양수도", "법인전환"],
      annual: "800만원",
      total: "3,500만원",
    },
  ];
  return (
    <>
      {cards.map((c, i) => (
        <IncorporationCard key={i} {...c} />
      ))}
    </>
  );
}

function IncorporationCard(props: {
  emoji: string;
  industry: string;
  revenue: string;
  strategy: string[];
  annual: string;
  total: string;
}) {
  return (
    <article className="h-full flex flex-col rounded-card bg-soft border border-brand-border shadow-soft p-6 md:p-7">
      <header className="flex items-center gap-2">
        <span className="text-2xl">{props.emoji}</span>
        <div>
          <div className="text-base md:text-lg font-extrabold text-primary leading-none">
            {props.industry}
          </div>
          <div className="mt-1 text-xs text-text-sub leading-none">
            전환 직전 매출 {props.revenue}
          </div>
        </div>
      </header>

      <div className="mt-5 text-sm md:text-base text-text-main font-bold leading-snug break-keep">
        {props.strategy.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="mt-auto pt-6 space-y-4">
        <div>
          <div className="text-[11px] font-bold text-text-sub uppercase tracking-wider">
            연간 절세액
          </div>
          <div className="mt-1 text-2xl md:text-3xl font-black text-success leading-none">
            {props.annual}
          </div>
        </div>
        <div className="pt-3 border-t border-brand-border">
          <div className="text-[11px] font-bold text-text-sub uppercase tracking-wider">
            전환 후 총 절세효과
          </div>
          <div className="mt-1 text-2xl md:text-3xl font-black text-primary leading-none break-keep">
            {props.total}
          </div>
        </div>
      </div>
    </article>
  );
}
