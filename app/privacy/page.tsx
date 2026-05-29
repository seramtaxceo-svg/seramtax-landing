import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 세무그룹 세람택스",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 break-keep">
        개인정보처리방침
      </h1>
      <div className="text-text-main space-y-8 leading-relaxed break-keep">
        <p className="text-text-sub">
          세무그룹 세람택스(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」 등
          관련 법령을 준수하며, 이용자의 개인정보를 안전하게 보호하기 위해
          최선을 다하고 있습니다.
        </p>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            1. 수집하는 개인정보 항목
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-text-main">
            <li>필수: 이름, 휴대전화번호</li>
            <li>선택: 업종, 연 매출 규모</li>
            <li>
              자동 수집: 접속 IP, 쿠키, 브라우저 정보 (광고 효과 측정 목적)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            2. 수집 및 이용 목적
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-text-main">
            <li>상담 신청 접수 및 회신, 세무 관련 컨설팅 안내</li>
            <li>광고 성과 측정 및 최적화, 리타겟팅 광고 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            3. 보유 및 이용 기간
          </h2>
          <p>상담 완료 후 3년간 보관 후 파기합니다.</p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            4. 개인정보의 제3자 제공 — 광고 성과 측정 목적
          </h2>
          <p className="mb-3">
            회사는 광고 효과 측정 및 최적화를 위해 다음과 같이 개인정보의 일부를
            제3자에게 전송할 수 있습니다.
          </p>
          <div className="rounded-card border border-brand-border bg-soft/60 p-5 space-y-2">
            <div>
              <strong>제공받는 자:</strong> Meta Platforms, Inc. (Facebook,
              Instagram 운영사)
            </div>
            <div>
              <strong>제공 항목:</strong> 이름, 휴대전화번호를{" "}
              <em>해시 처리(SHA-256)한 비식별 값</em>, 페이지 방문/폼 제출 등의
              이벤트 정보
            </div>
            <div>
              <strong>제공 목적:</strong> Meta 픽셀 및 전환 API를 통한 광고
              전환 측정, 리타겟팅·유사 타겟팅 광고 제공
            </div>
            <div>
              <strong>보유·이용 기간:</strong> Meta의 데이터 보존 정책에 따름
            </div>
          </div>
          <p className="mt-3 text-[14px] text-text-sub">
            ※ 해시 처리된 값은 복호화가 불가능하여 Meta는 원본 개인정보를 확인할
            수 없으며, 광고 식별자와의 매칭 용도로만 사용됩니다. 이용자는 본
            제3자 제공에 대한 동의를 거부할 권리가 있으며, 거부 시 회사의 일반
            상담 서비스 이용에는 제한이 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            5. 쿠키(Cookie)의 운용
          </h2>
          <p>
            본 사이트는 광고 성과 측정 및 사용자 경험 개선을 위해 Meta 픽셀
            쿠키를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할
            수 있으며, 거부 시 광고 추적이 제한됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            6. 이용자의 권리
          </h2>
          <p>
            이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수
            있으며, 개인정보 수집·이용 및 제3자 제공에 대한 동의를 철회할 수
            있습니다. 요청은 아래 연락처로 접수해주세요.
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-bold text-primary mb-3">
            7. 개인정보 보호책임자
          </h2>
          <div className="rounded-card border border-brand-border bg-soft/60 p-5 space-y-1">
            <div>세무그룹 세람택스 / 대표 세무사 정승영</div>
            <div>이메일: contact@seramtax.co.kr</div>
            <div>전화: 02-2135-5789</div>
          </div>
        </section>

        <p className="text-[14px] text-disclaimer pt-4 border-t border-brand-border">
          본 방침은 2026년 5월 29일부터 시행됩니다.
        </p>
      </div>
    </main>
  );
}
