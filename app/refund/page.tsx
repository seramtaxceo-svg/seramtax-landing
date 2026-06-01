import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ForbesQuote from "@/components/ForbesQuote";
import PressMentions from "@/components/PressMentions";
import ValueProps from "@/components/ValueProps";
import TeamPhoto from "@/components/TeamPhoto";
import YouTubeShort from "@/components/YouTubeShort";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "5년치 종합소득세 환급 진단 | 세무그룹 세람택스",
  description:
    "음식점·미용실·온라인쇼핑몰 사장님, 최대 5년치 종합소득세 환급 가능 여부를 무료로 진단해드립니다. 세무그룹 세람택스 (광고책임세무사 정승영).",
};

export default function RefundPage() {
  return (
    <main className="min-h-screen">
      <Hero variant="refund" />
      <ForbesQuote />
      <PressMentions />
      <CaseStudies variant="refund" />
      <ValueProps variant="refund" />
      <TeamPhoto />
      <YouTubeShort variant="refund" />
      <Process variant="refund" />
      <FAQ variant="refund" />
      <LeadForm variant="refund" />
      <Footer />
    </main>
  );
}
