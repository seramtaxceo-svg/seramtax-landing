import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-soft">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          세무그룹 세람택스
        </h1>
        <p className="text-text-sub">
          한국평가데이터 분석 기준, 2024년 매출 94억
          <br />
          개인 세무사 사무소 전국 1위 (포브스코리아 보도)
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/refund"
            className="block rounded-card bg-white shadow-soft p-6 hover:-translate-y-0.5 transition-transform"
          >
            <div className="text-sm text-text-sub">개인사업자</div>
            <div className="mt-2 text-xl font-bold text-primary">
              경정청구 무료 진단
            </div>
            <div className="mt-1 text-sm text-text-sub">최대 5년치 환급 검토</div>
          </Link>

          <Link
            href="/incorporation"
            className="block rounded-card bg-white shadow-soft p-6 hover:-translate-y-0.5 transition-transform"
          >
            <div className="text-sm text-text-sub">매출 5억+ 사장님</div>
            <div className="mt-2 text-xl font-bold text-primary">
              법인전환 적정시점 진단
            </div>
            <div className="mt-1 text-sm text-text-sub">통합 컨설팅</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
