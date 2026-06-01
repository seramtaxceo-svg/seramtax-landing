type Variant = "refund" | "incorporation";

type Video = {
  id: string;
  title: string;
  desc: string;
};

const VIDEOS: Record<Variant, Video> = {
  refund: {
    id: "hKZbpEmYRZ8",
    title: "경정청구, 이렇게 받으세요",
    desc: "정승영 세무사가 직접 설명하는 5년치 환급 핵심 포인트",
  },
  incorporation: {
    id: "Ii3ZYSZ7mko",
    title: "법인전환, 언제 해야 유리한가",
    desc: "정승영 세무사가 직접 설명하는 전환 적정시점",
  },
};

/**
 * 유튜브 쇼츠 임베드 — 9:16 세로 비율, 클릭 재생 (자동재생 X)
 * youtube-nocookie.com 도메인으로 개인정보 보호 모드 사용
 */
export default function YouTubeShort({ variant }: { variant: Variant }) {
  const v = VIDEOS[variant];
  const embedSrc = `https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1&playsinline=1`;
  const watchUrl = `https://youtube.com/shorts/${v.id}`;

  return (
    <section className="px-6 py-14 md:py-24 bg-soft">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-7">
          <div className="text-sm font-bold text-accent">EXPERT VIDEO</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-primary leading-snug break-keep">
            {v.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-text-sub leading-relaxed break-keep">
            {v.desc}
          </p>
        </div>

        <div className="relative rounded-card overflow-hidden shadow-primary-lg bg-black aspect-[9/16]">
          <iframe
            src={embedSrc}
            title={v.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="mt-5 text-center">
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-text-sub hover:text-primary transition-colors"
          >
            <span aria-hidden>▶</span>
            유튜브에서 전체 영상 보기
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
