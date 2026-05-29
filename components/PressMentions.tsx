type Mention = {
  media: string;
  letter: string;
  iconClass: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

const MENTIONS: Mention[] = [
  {
    media: "조세일보",
    letter: "조",
    iconClass: "bg-primary text-white",
    date: "2026.02.20",
    title: '세람택스 "2024년 매출 94억…개인 세무사사무소 1위 달성"',
    excerpt:
      '세람택스가 지난 2024년 기준 약 94억원의 매출을 기록해 개인 세무사 사무소 중 1위를 차지했다고 20일 밝혔다. 세람택스는 "국내 기업 데이터 전문기관 한국평가데이터의 분석에 따르면 2024년 기준 매출액이 20억원…',
    url: "https://www.joseilbo.com/news/htmls/2026/02/20260220563210.html",
  },
  {
    media: "포브스코리아",
    letter: "F",
    iconClass: "bg-[#1F1F1F] text-white",
    date: "2026.02.23",
    title: "세람택스, 매출 94억…개인 세무사 사무소 '전국 1위'",
    excerpt:
      "세람택스(대표 세무사 정승영)가 2024년 기준 약 94억 원의 매출을 기록하며 개인 세무사 사무소 가운데 전국 1위를 차지한 것으로 나타났다. 공시 의무가 없어 실적 파악이 어려웠던 개인 세무사 시장에서 '슈퍼 사무…",
    url: "https://www.forbeskorea.co.kr/news/articleView.html?idxno=401348",
  },
  {
    media: "한국경제TV",
    letter: "한",
    iconClass: "bg-[#C8102E] text-white",
    date: "2022.08.23",
    title: '세람택스, 절세컨설팅 서비스 제공 "경정청구로 세금환급 받으세요"',
    excerpt:
      "세무그룹 세람택스가 경정청구 제도를 이용한 절세컨설팅 서비스를 제공한다고 밝혔다. 경정청구는 세금환급 제도의 일환으로 납세자가 세금을 잘못 내거나 지나치게 많이 낸 경우, 환급을 요청할 수 있는 제도다. 국…",
    url: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202208230045&t=NN",
  },
  {
    media: "더파워",
    letter: "더",
    iconClass: "bg-[#5C4DB1] text-white",
    date: "2020.06.18",
    title: "혼자하기 힘든 법인설립, 전문가 컨설팅으로 해결",
    excerpt:
      "이러한 가운데 세람택스가 무료법인설립, 법인전환, 부동산법인 컨설팅 서비스를 실시하며 청년창업가들에게 도움을 주고 있다. 법인 설립을 계획 중인 고객에게 향후 예상 매출, 고용 계획 등을 토대로 체계적인 상담…",
    url: "https://www.thepowernews.co.kr/view.php?ud=2020061814011137706cf2d78c68_40",
  },
];

export default function PressMentions() {
  return (
    <section className="px-6 py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">PRESS</div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary">
            언론 보도
          </h2>
          <p className="mt-3 text-sm md:text-base text-text-sub leading-relaxed">
            조세일보·포브스코리아·한국경제TV·더파워 등 <br className="md:hidden" />
            주요 언론에 지속적으로 보도되고 있습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {MENTIONS.map((m) => (
            <a
              key={m.url}
              href={m.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group block rounded-card bg-white border border-brand-border shadow-soft p-5 md:p-6 hover:-translate-y-1 hover:shadow-primary-lg transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm ${m.iconClass}`}
                >
                  {m.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-text-main text-sm truncate">
                    {m.media}
                  </div>
                  <div className="text-xs text-text-sub">{m.date}</div>
                </div>
                <span className="shrink-0 text-text-sub/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  원문 →
                </span>
              </div>

              <h3 className="mt-4 text-base md:text-lg font-extrabold text-primary leading-snug break-keep">
                {m.title}
              </h3>

              <p className="mt-3 text-sm text-text-sub leading-relaxed line-clamp-3 break-keep">
                {m.excerpt}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-text-sub text-center">
          *각 카드 클릭 시 해당 매체 원문 기사로 이동합니다.
        </p>
      </div>
    </section>
  );
}
