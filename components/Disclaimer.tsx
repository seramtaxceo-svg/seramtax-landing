/**
 * 면책 문구 컴포넌트 (광고규정 §4-6 부당기대 유발 방지)
 * - 14px, --color-disclaimer 컬러로 본문보다 작지만 명확히 식별 가능
 * - 박스로 영역 강조, 작게 숨기지 않음
 */
export default function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 md:mt-10 rounded-card border border-brand-border bg-soft/60 px-5 py-4 md:px-6 md:py-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="shrink-0 text-disclaimer font-bold text-[14px] leading-relaxed"
        >
          ※
        </span>
        <p className="text-[14px] leading-relaxed text-disclaimer break-keep">
          {children}
        </p>
      </div>
    </div>
  );
}
