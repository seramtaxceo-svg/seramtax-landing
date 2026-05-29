"use client";

import { useState } from "react";
import ResponsiblePersonBadge from "./ResponsiblePersonBadge";

type Variant = "refund" | "incorporation";

const INDUSTRIES: Record<Variant, string[]> = {
  refund: ["음식점", "미용실", "온라인쇼핑몰", "소매업", "서비스업", "기타"],
  incorporation: [
    "음식점",
    "소매업",
    "서비스업",
    "제조업",
    "IT",
    "교육",
    "기타",
  ],
};

const REVENUE = ["1억 미만", "1~3억", "3~5억", "5~10억", "10억 이상"];

// TODO: Formspree 엔드포인트로 교체 (예: https://formspree.io/f/xxxxxxx)
const FORMSPREE_ENDPOINT = "/api/lead";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );

  const title =
    variant === "refund"
      ? "5분이면 충분합니다.\n환급 가능액 무료 진단 신청"
      : "내 사업의 법인전환 적정시점,\n무료로 진단받으세요";
  const submitLabel =
    variant === "refund" ? "무료 환급 진단 신청하기" : "무료 진단 신청하기";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = {
      variant,
      name: fd.get("name"),
      phone: fd.get("phone"),
      industry: fd.get("industry"),
      revenue: fd.get("revenue"),
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit_failed");
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: variant === "refund" ? "경정청구" : "법인전환",
        });
      }
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="lead-form"
      className="relative px-6 py-14 md:py-24 bg-primary-gradient overflow-hidden"
    >
      <div className="absolute inset-0 bg-best-pattern opacity-50 pointer-events-none" />
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <div className="text-sm font-bold text-accent">FREE CONSULTATION</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white whitespace-pre-line leading-snug break-keep">
            {title}
          </h2>

          <div className="mt-6 flex justify-center">
            <ResponsiblePersonBadge variant="block" />
          </div>
        </div>

        {status === "ok" ? (
          <div className="mt-10 rounded-card bg-white shadow-primary-lg p-8 text-center">
            <div className="text-4xl">✅</div>
            <p className="mt-3 text-lg font-extrabold text-primary">
              신청이 완료되었습니다.
            </p>
            <p className="mt-1.5 text-sm text-text-sub leading-relaxed">
              영업일 기준 24시간 내
              <br />
              전담 세무사가 연락드립니다.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 rounded-card bg-white shadow-primary-lg p-6 md:p-8 space-y-5"
          >
            <Field label="이름" name="name" type="text" required />
            <Field
              label="연락처"
              name="phone"
              type="tel"
              required
              placeholder="010-0000-0000"
            />

            <Select
              label="업종"
              name="industry"
              options={INDUSTRIES[variant]}
            />
            <Select label="연 매출 규모" name="revenue" options={REVENUE} />

            <label className="flex items-start gap-2.5 text-sm text-text-sub bg-soft rounded-xl p-4">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 w-4 h-4 accent-primary"
              />
              <span>
                <a
                  href="/privacy"
                  className="underline text-primary font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  개인정보 수집·이용
                </a>
                에 동의합니다{" "}
                <span className="text-accent font-bold">(필수)</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-card bg-accent-gradient text-white font-extrabold py-4 md:py-5 text-base md:text-lg shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "submitting" ? "신청 중..." : submitLabel}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                제출에 실패했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-bold mb-1.5 text-text-main">
        {props.label}
        {props.required && <span className="text-accent ml-1">*</span>}
      </span>
      <input
        name={props.name}
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-bold mb-1.5 text-text-main">
        {label}
        <span className="text-accent ml-1">*</span>
      </span>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="" disabled>
          선택해주세요
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
