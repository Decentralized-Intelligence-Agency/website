import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/hero";
import { Introduction } from "@/components/introduction";
import { Mission } from "@/components/mission";
import { Projects } from "@/components/projects";
import { Principles } from "@/components/principles";
import { Research } from "@/components/research";
import { GetInvolved } from "@/components/get-involved";
import { NonprofitInfo } from "@/components/nonprofit-info";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <Mission />
        <Projects />
        <Principles />
        <Research />
        <GetInvolved />
        <NonprofitInfo />
      </main>
      <Footer />
    </div>
  );
}
