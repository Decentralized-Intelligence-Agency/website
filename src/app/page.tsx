import Link from "next/link";
import { ArrowRight, BookOpen, Users, Lightbulb, Globe, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-dia-blue-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-dia-blue-100 px-4 py-2 text-sm font-semibold text-dia-blue-900">
                <span className="mr-2">🚀</span>
                Advancing Collective Intelligence Research
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-6xl lg:text-7xl">
                Building the Future of{" "}
                <span className="bg-gradient-to-r from-dia-blue-900 via-dia-purple-600 to-dia-coral-600 bg-clip-text text-transparent">
                  Collective Intelligence
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700 sm:text-xl">
                The Decentralized Intelligence Agency is a 501(c)(3) scientific non-profit dedicated
                to advancing human and machine collaboration through rigorous research, open-source tools,
                and global community building.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="cta" size="xl" asChild>
                  <Link href="/get-involved#donate">
                    Support Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/research">Explore Research</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
              <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-dia-blue-200 via-dia-purple-200 to-dia-coral-200 opacity-30" />
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-y border-dia-slate-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-dia-slate-600">
              Trusted by researchers and institutions worldwide
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {[
                "MIT",
                "Stanford",
                "Oxford",
                "OpenAI",
                "DeepMind",
                "Anthropic",
              ].map((org) => (
                <div
                  key={org}
                  className="flex items-center justify-center text-dia-slate-400"
                >
                  <div className="text-center text-sm font-semibold text-dia-slate-600">
                    {org}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                icon={BookOpen}
                value="47"
                label="Peer-Reviewed Papers"
                description="Published in top-tier venues"
              />
              <MetricCard
                icon={Users}
                value="2,500+"
                label="Global Community"
                description="Researchers, developers, and advocates"
              />
              <MetricCard
                icon={Globe}
                value="85"
                label="Countries Reached"
                description="Truly global impact"
              />
              <MetricCard
                icon={TrendingUp}
                value="$2.4M"
                label="Research Funding"
                description="Deployed to advance collective intelligence"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700">
                We believe that the greatest challenges facing humanity require collective intelligence—systems
                that enable humans and AI to collaborate effectively at unprecedented scale. Our research develops
                the theoretical foundations, practical tools, and ethical frameworks to make this vision a reality.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                icon={Zap}
                title="Rigorous Research"
                description="Peer-reviewed, open science advancing the frontiers of collective intelligence theory and applications."
              />
              <FeatureCard
                icon={Globe}
                title="Open Source"
                description="All tools and platforms we develop are freely available to the global research community."
              />
              <FeatureCard
                icon={Users}
                title="Community-Driven"
                description="We believe in democratizing access to collective intelligence tools and knowledge."
              />
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Featured Research Initiatives
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Explore our current research programs driving the field forward
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ResearchCard
                badge="Active Project"
                title="Collective Decision Systems"
                description="Developing AI-assisted frameworks for groups to make better decisions together, from small teams to global governance."
                tags={["AI Governance", "Decision Theory", "Social Choice"]}
              />
              <ResearchCard
                badge="Active Project"
                title="Decentralized Knowledge Networks"
                description="Building peer-to-peer infrastructure for collaborative knowledge creation and verification at scale."
                tags={["Web3", "Knowledge Graphs", "Network Science"]}
              />
              <ResearchCard
                badge="Open Tool"
                title="CollabAI Platform"
                description="Open-source platform enabling researchers to build and experiment with human-AI collaboration systems."
                tags={["Open Source", "Platform", "Human-AI Interaction"]}
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/research">
                  View All Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-dia-blue-900 via-dia-blue-800 to-dia-purple-900 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join Us in Building the Future
              </h2>
              <p className="mt-6 text-lg leading-8 text-dia-blue-100">
                Whether you're a researcher, developer, donor, or advocate, there's a place for you in our community.
                Together, we can advance collective intelligence for the benefit of all humanity.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="cta" size="lg" className="bg-white text-dia-blue-900 hover:bg-dia-blue-50" asChild>
                  <Link href="/get-involved#donate">
                    Make a Donation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Lightbulb className="mx-auto h-12 w-12 text-dia-purple-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Get the latest research updates, event announcements, and community news delivered to your inbox.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                  required
                />
                <Button type="submit" variant="default" size="lg">
                  Subscribe
                </Button>
              </form>
              <p className="mt-3 text-sm text-dia-slate-600">
                No spam, unsubscribe anytime. Read our{" "}
                <Link href="/privacy" className="text-dia-blue-900 underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function MetricCard({
  icon: Icon,
  value,
  label,
  description,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6">
        <Icon className="h-8 w-8 text-dia-purple-600" />
        <div className="mt-4 text-3xl font-bold text-dia-slate-900">{value}</div>
        <div className="mt-1 text-sm font-semibold text-dia-slate-700">{label}</div>
        <div className="mt-2 text-sm text-dia-slate-600">{description}</div>
      </CardContent>
    </Card>
  );
}

function FeatureCard({
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
        <Icon className="h-10 w-10 text-dia-blue-900" />
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function ResearchCard({
  badge,
  title,
  description,
  tags,
}: {
  badge: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Card className="border-dia-slate-200 transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 inline-flex items-center rounded-full bg-dia-purple-100 px-3 py-1 text-xs font-semibold text-dia-purple-700">
          {badge}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-dia-slate-100 px-3 py-1 text-xs font-medium text-dia-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
