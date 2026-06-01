import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ForbesQuote from "@/components/ForbesQuote";
import PressMentions from "@/components/PressMentions";
import ValueProps from "@/components/ValueProps";
import TeamPhoto from "@/components/TeamPhoto";
import YouTubeShort from "@/components/YouTubeShort";
import CaseStudies from "@/components/CaseStudies";
import StrategyCompare from "@/components/StrategyCompare";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "법인전환 적정시점 무료 진단 | 세무그룹 세람택스",
  description:
    "매출 5억 이상 개인사업자를 위한 법인전환 통합 컨설팅. 영업권 평가부터 사후관리까지. 세무그룹 세람택스 (광고책임세무사 정승영).",
};

export default function IncorporationPage() {
  return (
    <main className="min-h-screen">
      <Hero variant="incorporation" />
      <ForbesQuote />
      <PressMentions />
      <CaseStudies variant="incorporation" />
      <StrategyCompare />
      <ValueProps variant="incorporation" />
      <TeamPhoto />
      <YouTubeShort variant="incorporation" />
      <Process variant="incorporation" />
      <FAQ variant="incorporation" />
      <LeadForm variant="incorporation" />
      <Footer />
    </main>
  );
}
