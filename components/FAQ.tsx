type Variant = "refund" | "incorporation";

const QA: Record<Variant, { q: string; a: string }[]> = {
  refund: [
    {
      q: "5년 전 자료가 없는데 환급 가능한가요?",
      a: "홈택스에 보관된 신고 내역을 기준으로 검토하므로 별도 자료가 없어도 진단이 가능합니다.",
    },
    {
      q: "환급 검토 비용은 얼마인가요?",
      a: "최초 진단은 무료입니다. 실제 환급이 발생할 경우에만 협의된 성과보수가 발생합니다.",
    },
    {
      q: "환급까지 얼마나 걸리나요?",
      a: "사안에 따라 다르며 평균적으로 45~100일 내외 소요됩니다.",
    },
    {
      q: "다른 세무사에게 의뢰 중인데 가능한가요?",
      a: "기장 거래처 변경 없이 경정청구 건만 별도 진행이 가능합니다.",
    },
  ],
  incorporation: [
    {
      q: "법인전환은 언제 하는 게 가장 좋은가요?",
      a: "매출과 소득 구간, 자금 인출 계획에 따라 다릅니다. 무료 진단에서 적정 시점을 산정해드립니다.",
    },
    {
      q: "영업권 평가가 무엇이고 왜 중요한가요?",
      a: "그동안 쌓아 올린 사업 가치를 무형자산으로 평가하여 합법적으로 자금 인출 효과를 누릴 수 있는 절차입니다.",
    },
    {
      q: "법인전환 비용은 얼마나 드나요?",
      a: "전환 방식과 사업 규모에 따라 다릅니다. 상담 후 견적을 안내드립니다.",
    },
    {
      q: "직원 4대보험·근로계약은 어떻게 되나요?",
      a: "포괄양수도 방식의 경우 근로관계가 그대로 승계되며, 4대보험 사업장 이전 절차를 함께 안내해드립니다.",
    },
  ],
};

export default function FAQ({ variant }: { variant: Variant }) {
  return (
    <section className="px-6 py-14 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">FAQ</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary">
            자주 묻는 질문
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {QA[variant].map((item, i) => (
            <details
              key={i}
              className="group rounded-card border border-brand-border bg-white shadow-soft overflow-hidden"
            >
              <summary className="flex items-start gap-3 cursor-pointer list-none p-5 md:p-6 hover:bg-soft transition-colors">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-primary text-white text-sm font-extrabold flex items-center justify-center">
                  Q
                </span>
                <span className="flex-1 font-bold text-text-main pt-0.5 break-keep">
                  {item.q}
                </span>
                <span className="shrink-0 text-text-sub pt-0.5 transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                <div className="ml-10 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-accent text-white text-sm font-extrabold flex items-center justify-center">
                    A
                  </span>
                  <p className="text-text-sub leading-relaxed pt-0.5 break-keep">
                    {item.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
