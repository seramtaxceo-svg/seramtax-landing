type Variant = "inline" | "block" | "compact";

/**
 * 광고책임세무사 표기 컴포넌트 (세무사법 시행규정 §3 준수)
 * - inline: 한 줄, 작게 (Hero 우상단 등)
 * - block: 박스 형태 (폼 위 등 강조 필요한 위치)
 * - compact: 가장 작은 한 줄 형태 (Footer 등)
 */
export default function ResponsiblePersonBadge({
  variant = "inline",
}: {
  variant?: Variant;
}) {
  if (variant === "compact") {
    return (
      <div className="text-xs md:text-sm">
        대표 세무사 / 광고책임세무사: <strong>정승영</strong>
      </div>
    );
  }

  if (variant === "block") {
    return (
      <div className="rounded-card border border-brand-border bg-white px-4 py-3 text-center shadow-soft">
        <span className="text-xs md:text-sm text-text-sub">
          광고책임세무사
        </span>
        <span className="ml-2 text-sm md:text-base font-extrabold text-primary">
          정승영
        </span>
        <span className="ml-1 text-xs md:text-sm text-text-sub">
          (세무그룹 세람택스)
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 text-[11px] md:text-xs text-text-sub bg-white border border-brand-border rounded-full px-3 py-1">
      <span>광고책임세무사</span>
      <span className="font-extrabold text-primary">정승영</span>
    </div>
  );
}
