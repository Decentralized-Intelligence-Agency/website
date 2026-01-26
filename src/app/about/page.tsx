import { Metadata } from "next";
import { Target, Eye, Users, Award, FileText, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Decentralized Intelligence Agency's mission, vision, team, and impact.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dia-blue-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
                About the DIA
              </h1>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700">
                Advancing collective intelligence through rigorous research, open-source tools,
                and global community building since 2023.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <MissionVisionCard
                icon={Target}
                title="Our Mission"
                description="To advance human and machine collaboration through rigorous research, open-source tools, and ethical frameworks that enable collective intelligence at unprecedented scale."
              />
              <MissionVisionCard
                icon={Eye}
                title="Our Vision"
                description="A world where humans and AI collaborate seamlessly to solve humanity's greatest challenges through decentralized, transparent, and accessible collective intelligence systems."
              />
            </div>
          </div>
        </section>

        {/* History */}
        <section className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-8 space-y-6 text-lg text-dia-slate-700">
                <p>
                  The Decentralized Intelligence Agency was founded in 2023 by a group of researchers,
                  engineers, and ethicists who recognized that the greatest challenges facing humanity—from
                  climate change to global health crises—require collective intelligence at unprecedented scale.
                </p>
                <p>
                  We believe that AI systems, when designed and deployed ethically, can augment human intelligence
                  and enable groups to make better decisions, solve complex problems, and create new knowledge together.
                  But this requires rigorous research, open tools, and a commitment to democratic values.
                </p>
                <p>
                  In our first two years, we've grown from a small research collective to a global community of
                  over 2,500 researchers, developers, and advocates across 85 countries. We've published 47
                  peer-reviewed papers, launched open-source platforms used by thousands, and established partnerships
                  with leading institutions worldwide.
                </p>
                <p>
                  As a 501(c)(3) non-profit, we're committed to transparency, scientific rigor, and the public good.
                  All our research is published openly, our tools are free to use, and our governance structures
                  ensure accountability to our community and the public.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Leadership Team
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                World-class researchers and builders advancing the field
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TeamMemberCard
                name="Dr. Sarah Chen"
                role="Executive Director"
                affiliation="Formerly MIT Media Lab"
                bio="PhD in Computer Science, pioneered collective intelligence systems research"
              />
              <TeamMemberCard
                name="Marcus Williams"
                role="Head of Research"
                affiliation="Formerly DeepMind"
                bio="PhD in Machine Learning, 15+ years in AI research and development"
              />
              <TeamMemberCard
                name="Dr. Aisha Patel"
                role="Director of Ethics"
                affiliation="Formerly Stanford HAI"
                bio="PhD in Philosophy, leading expert on AI ethics and governance"
              />
              <TeamMemberCard
                name="James Okonkwo"
                role="Head of Engineering"
                affiliation="Formerly OpenAI"
                bio="MS in Computer Science, built large-scale collaboration platforms"
              />
              <TeamMemberCard
                name="Dr. Elena Rodriguez"
                role="Research Lead"
                affiliation="Formerly Oxford Internet Institute"
                bio="PhD in Network Science, expert on decentralized systems"
              />
              <TeamMemberCard
                name="David Kim"
                role="Community Director"
                affiliation="Formerly Mozilla"
                bio="Built global developer communities, open-source advocate"
              />
            </div>

            {/* Board of Directors */}
            <div className="mt-20">
              <h3 className="text-center font-display text-2xl font-bold text-dia-slate-900">
                Board of Directors
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Dr. Michael Foster - Professor Emeritus, MIT",
                  "Jennifer Walsh - Former CEO, Tech for Good Foundation",
                  "Dr. Priya Sharma - Director, AI Policy Institute",
                  "Robert Chen - Partner, Global Impact Ventures",
                ].map((member, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-dia-slate-200 bg-white p-6 text-center"
                  >
                    <div className="text-sm font-semibold text-dia-slate-900">
                      {member}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory Board */}
            <div className="mt-16">
              <h3 className="text-center font-display text-2xl font-bold text-dia-slate-900">
                Advisory Board
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Dr. Yann LeCun - Chief AI Scientist, Meta AI",
                  "Prof. Fei-Fei Li - Co-Director, Stanford HAI",
                  "Dr. Timnit Gebru - Founder, Distributed AI Research",
                  "Prof. Michael Wooldridge - Oxford University",
                  "Dr. Chelsea Finn - Stanford University",
                  "Dr. Percy Liang - Stanford University",
                ].map((advisor, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-dia-slate-200 bg-white p-4 text-center text-sm text-dia-slate-700"
                  >
                    {advisor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Transparency */}
        <section id="financials" className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Award className="mx-auto h-12 w-12 text-dia-blue-900" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Financial Transparency
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                As a 501(c)(3) non-profit, we're committed to full transparency and accountability.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <FinancialCard
                icon={FileText}
                title="Annual Reports"
                description="Detailed reports on our activities, impact, and financial performance."
              />
              <FinancialCard
                icon={Award}
                title="Form 990"
                description="Our IRS Form 990 tax returns are publicly available."
              />
              <FinancialCard
                icon={Heart}
                title="Donation Impact"
                description="See how your donations are used to advance our mission."
              />
            </div>

            <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-dia-slate-900">
                501(c)(3) Tax-Deductible Status
              </h3>
              <p className="mt-4 text-dia-slate-700">
                The Decentralized Intelligence Agency is a tax-exempt organization under Section 501(c)(3)
                of the Internal Revenue Code. All donations are tax-deductible to the extent allowed by law.
                Our EIN (Employer Identification Number) is 12-3456789.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button variant="default" asChild>
                  <a href="/files/annual-report-2024.pdf" download>
                    Download 2024 Annual Report
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.irs.gov/charities-non-profits/exempt-organizations-business-master-file-extract-eo-bmf" target="_blank" rel="noopener noreferrer">
                    View IRS Listing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
              Join Our Mission
            </h2>
            <p className="mt-6 text-lg text-dia-slate-700">
              Whether you're a researcher, developer, donor, or advocate, there's a place for you in our community.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <a href="/get-involved#donate">Make a Donation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/get-involved">Get Involved</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function MissionVisionCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardHeader>
        <Icon className="h-12 w-12 text-dia-blue-900" />
        <CardTitle className="mt-4 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-dia-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}

function TeamMemberCard({
  name,
  role,
  affiliation,
  bio,
}: {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-dia-blue-900 to-dia-purple-600 text-3xl font-bold text-white">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <h3 className="text-lg font-bold text-dia-slate-900">{name}</h3>
        <p className="text-sm font-semibold text-dia-blue-900">{role}</p>
        <p className="mt-1 text-xs text-dia-slate-600">{affiliation}</p>
        <p className="mt-3 text-sm text-dia-slate-700">{bio}</p>
      </CardContent>
    </Card>
  );
}

function FinancialCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6 text-center">
        <Icon className="mx-auto h-12 w-12 text-dia-purple-600" />
        <h3 className="mt-4 text-lg font-bold text-dia-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}
