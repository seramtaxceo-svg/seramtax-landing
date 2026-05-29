import Image from "next/image";

export default function TeamPhoto() {
  return (
    <section className="px-6 py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <div className="text-sm font-bold text-accent">OUR TEAM</div>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-primary leading-snug break-keep">
              전국 1위를 만든
              <br className="md:hidden" /> 세람택스 전담팀
            </h2>
            <p className="mt-3 text-sm md:text-base text-text-sub leading-relaxed break-keep">
              한 명의 전담 세무사가 끝까지 책임집니다.
            </p>
          </div>

          <div className="mt-6 md:mt-0 inline-flex items-stretch gap-0 rounded-card bg-soft border border-brand-border shadow-soft overflow-hidden">
            <div className="px-5 py-3 text-center">
              <div className="text-[11px] text-text-sub">소속 세무사</div>
              <div className="text-xl font-extrabold text-primary">
                6<span className="text-sm ml-0.5">명</span>
              </div>
            </div>
            <div className="w-px bg-brand-border" />
            <div className="px-5 py-3 text-center">
              <div className="text-[11px] text-text-sub">전 직원</div>
              <div className="text-xl font-extrabold text-primary">
                21<span className="text-sm ml-0.5">명</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 relative rounded-card overflow-hidden shadow-primary-lg border border-brand-border bg-soft">
          <Image
            src="/a7135.jpg"
            alt="세무그룹 세람택스 전담 세무팀 단체사진"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="w-full h-auto"
            priority={false}
          />
        </div>

      </div>
    </section>
  );
}
