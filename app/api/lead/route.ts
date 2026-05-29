import { NextResponse } from "next/server";
import { Resend } from "resend";

const LEAD_TO_EMAIL = "contact@seramtax.co.kr";
// seramtax.co.kr 도메인 Resend 인증 완료 상태 (Planit 프로젝트와 공유)
const LEAD_FROM = "세람택스 LP <no-reply@seramtax.co.kr>";

type LeadPayload = {
  variant?: "refund" | "incorporation";
  name?: string;
  phone?: string;
  industry?: string;
  revenue?: string;
};

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function phoneDigits(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

function buildEmail(p: Required<LeadPayload>) {
  const variantLabel = p.variant === "refund" ? "경정청구" : "법인전환";
  const name = esc(p.name);
  const phone = esc(p.phone);
  const tel = phoneDigits(p.phone);
  const industry = esc(p.industry);
  const revenue = esc(p.revenue);
  const ts = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    dateStyle: "long",
    timeStyle: "short",
  });

  const subject = `[세람택스 LP] ${variantLabel} 상담 신청 — ${name}`;

  const html = `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><title>새 상담 신청</title></head>
<body style="margin:0;padding:0;background:#F0F7FF;font-family:-apple-system,BlinkMacSystemFont,'Pretendard',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F0F7FF;padding:24px 12px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(27,77,140,0.08);">
        <tr><td style="background:linear-gradient(135deg,#1B4D8C 0%,#0E2E5C 100%);padding:28px 32px;">
          <div style="color:#FF6B35;font-size:12px;font-weight:800;letter-spacing:1.5px;">NEW LEAD</div>
          <div style="color:#ffffff;font-size:22px;font-weight:800;margin-top:6px;">${variantLabel} 상담 신청</div>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E9F0;">
              <div style="color:#5C6B7A;font-size:12px;">이름</div>
              <div style="color:#1A1A1A;font-size:18px;font-weight:800;margin-top:4px;">${name}</div>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E9F0;">
              <div style="color:#5C6B7A;font-size:12px;">연락처</div>
              <div style="margin-top:4px;"><a href="tel:${tel}" style="color:#1B4D8C;font-size:18px;font-weight:800;text-decoration:none;">${phone}</a></div>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E5E9F0;">
              <div style="color:#5C6B7A;font-size:12px;">업종</div>
              <div style="color:#1A1A1A;font-size:16px;font-weight:600;margin-top:4px;">${industry}</div>
            </td></tr>
            <tr><td style="padding:12px 0;">
              <div style="color:#5C6B7A;font-size:12px;">연 매출 규모</div>
              <div style="color:#1A1A1A;font-size:16px;font-weight:600;margin-top:4px;">${revenue}</div>
            </td></tr>
          </table>
          <a href="tel:${tel}" style="display:block;margin-top:24px;background:linear-gradient(135deg,#FF6B35 0%,#F23E1B 100%);color:#ffffff;text-align:center;padding:16px;border-radius:14px;text-decoration:none;font-size:16px;font-weight:800;">바로 전화하기</a>
        </td></tr>
        <tr><td style="background:#F0F7FF;padding:18px 32px;text-align:center;">
          <div style="color:#5C6B7A;font-size:12px;line-height:1.6;">세무그룹 세람택스 · 영업일 24시간 내 회신 필수<br>${esc(ts)}</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

  const text = [
    `[세람택스 LP] ${variantLabel} 상담 신청`,
    "",
    `이름: ${p.name}`,
    `연락처: ${p.phone}`,
    `업종: ${p.industry}`,
    `매출 규모: ${p.revenue}`,
    `유입 페이지: ${variantLabel}`,
    `접수 시각: ${ts}`,
  ].join("\n");

  return { subject, html, text };
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const { variant, name, phone, industry, revenue } = payload;
  if (!variant || !name || !phone || !industry || !revenue) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY missing — set it in .env.local");
    return NextResponse.json(
      { ok: false, error: "server_not_configured" },
      { status: 500 },
    );
  }

  const { subject, html, text } = buildEmail({
    variant,
    name,
    phone,
    industry,
    revenue,
  });

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: LEAD_FROM,
      to: LEAD_TO_EMAIL,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[lead] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }
    console.log("[lead] sent:", data?.id, name, phone);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] exception:", err);
    return NextResponse.json(
      { ok: false, error: "send_exception" },
      { status: 500 },
    );
  }
}
