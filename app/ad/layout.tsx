/**
 * 광고 소재용 레이아웃 — 헤더/푸터/픽셀 추적 없음.
 * 각 광고 페이지는 1080x1350 (4:5) 또는 1080x1080 (1:1) 고정 사이즈로 렌더링.
 * 데스크탑 브라우저에서 열어 스크린샷 촬영용.
 */
export default function AdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E5E9F0] flex flex-col items-center justify-center py-8 gap-6">
      {children}
    </div>
  );
}
