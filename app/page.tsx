import IntroAnimation from "@/components/IntroAnimation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero";
import { ServicesFlow } from "@/components/services-flow";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black pt-24">
      <IntroAnimation />
      <Header />
      <Hero />
      <ServicesFlow />
      <CTA />
      <Footer />
    </main>
  );
}
