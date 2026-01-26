import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Code, Database, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore our research initiatives, publications, and open-source tools advancing collective intelligence.",
};

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dia-blue-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
                Research Programs
              </h1>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700">
                Advancing the frontiers of collective intelligence through rigorous research,
                open science, and global collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas Overview */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Core Research Areas
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Our research spans multiple disciplines to advance collective intelligence
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ResearchAreaCard
                title="Collective Decision Systems"
                description="Developing AI-assisted frameworks that enable groups—from small teams to large organizations—to make better decisions together through improved information aggregation, deliberation support, and consensus mechanisms."
                topics={["Decision Theory", "Social Choice", "Deliberative Democracy", "Group Dynamics"]}
              />
              <ResearchAreaCard
                title="Human-AI Collaboration"
                description="Creating interfaces and protocols that seamlessly integrate human and machine intelligence, leveraging the complementary strengths of both to solve complex problems."
                topics={["Human-Computer Interaction", "Augmented Intelligence", "Collaborative Interfaces", "Workflow Design"]}
              />
              <ResearchAreaCard
                title="Decentralized Knowledge Networks"
                description="Building peer-to-peer infrastructure for collaborative knowledge creation, verification, and dissemination at scale, ensuring resilience and censorship resistance."
                topics={["Web3 & Blockchain", "Knowledge Graphs", "Network Science", "Distributed Systems"]}
              />
              <ResearchAreaCard
                title="AI Governance & Ethics"
                description="Developing frameworks for the ethical development and deployment of AI systems in collective settings, with emphasis on fairness, accountability, and transparency."
                topics={["AI Ethics", "Governance Design", "Policy Research", "Social Impact"]}
              />
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section id="current" className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                  Active Projects
                </h2>
                <p className="mt-4 text-lg text-dia-slate-700">
                  Currently ongoing research initiatives
                </p>
              </div>
              <div className="hidden lg:block">
                <Button variant="outline" size="lg">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Area
                </Button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProjectCard
                status="Active"
                title="Deliberative AI Platform"
                description="Building an AI-powered platform that supports large-scale deliberation, helping groups of thousands make informed decisions through structured dialogue and information synthesis."
                team="15 researchers"
                timeline="2023-2025"
                funding="$850K"
              />
              <ProjectCard
                status="Active"
                title="Prediction Market Infrastructure"
                description="Developing decentralized prediction markets for collective forecasting, enabling groups to aggregate distributed knowledge about future events."
                team="8 researchers"
                timeline="2024-2026"
                funding="$420K"
              />
              <ProjectCard
                status="Pilot"
                title="Expert Network Mapping"
                description="Creating tools to automatically identify and connect experts across domains, facilitating interdisciplinary collaboration and knowledge transfer."
                team="6 researchers"
                timeline="2024-2025"
                funding="$280K"
              />
              <ProjectCard
                status="Active"
                title="Collective Memory System"
                description="Designing persistent, shared knowledge repositories that learn from collective experience and support organizational learning and decision-making."
                team="12 researchers"
                timeline="2023-2026"
                funding="$650K"
              />
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <BookOpen className="mx-auto h-12 w-12 text-dia-purple-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Publications
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Peer-reviewed research from our team
              </p>
            </div>

            <div className="mt-16 space-y-6">
              <PublicationCard
                title="Scaling Deliberation: AI-Augmented Group Decision Making"
                authors="Chen, S., Williams, M., Patel, A., Rodriguez, E."
                venue="AAAI 2025"
                description="We present a framework for AI-assisted deliberation at scale, demonstrating improved decision quality in groups up to 10,000 participants."
                link="#"
              />
              <PublicationCard
                title="Decentralized Knowledge Graphs: A Survey"
                authors="Kim, D., Okonkwo, J., Foster, M."
                venue="ACM TKDD 2024"
                description="A comprehensive survey of decentralized approaches to knowledge representation and reasoning, with implications for collective intelligence."
                link="#"
              />
              <PublicationCard
                title="Ethical Considerations in Collective AI Systems"
                authors="Patel, A., Sharma, P., Chen, S."
                venue="AIES 2024"
                description="We analyze ethical risks and mitigation strategies for AI systems that augment or aggregate human intelligence at scale."
                link="#"
              />
              <PublicationCard
                title="Human-AI Complementarity in Collaborative Problem Solving"
                authors="Williams, M., LeCun, Y., Li, F."
                venue="NeurIPS 2024"
                description="Empirical analysis of how human and AI capabilities can be combined to solve complex problems more effectively than either alone."
                link="#"
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/publications">
                  View All Publications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Open Source Tools */}
        <section id="opensource" className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Code className="mx-auto h-12 w-12 text-dia-blue-900" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Open Source Tools
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Free and open tools for the collective intelligence community
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ToolCard
                name="CollabAI Framework"
                description="Open-source Python/TypeScript framework for building human-AI collaboration systems with built-in deliberation support and decision aggregation."
                stars="2.4k"
                language="TypeScript"
                link="https://github.com/DIA/collab-ai"
              />
              <ToolCard
                name="Deliberate.js"
                description="JavaScript library for adding structured deliberation components to web applications, supporting discussion threading, voting, and synthesis."
                stars="1.8k"
                language="TypeScript"
                link="https://github.com/DIA/deliberate-js"
              />
              <ToolCard
                name="Knowledge Graph Kit"
                description="Tools for building and querying decentralized knowledge graphs with support for collaborative editing and versioning."
                stars="956"
                language="Python"
                link="https://github.com/DIA/kg-kit"
              />
              <ToolCard
                name="Forecast Protocol"
                description="Implementation of decentralized prediction market infrastructure with oracle integration and settlement mechanisms."
                stars="1.2k"
                language="Rust"
                link="https://github.com/DIA/forecast-protocol"
              />
            </div>
          </div>
        </section>

        {/* Datasets */}
        <section id="datasets" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Database className="mx-auto h-12 w-12 text-dia-teal-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Research Datasets
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                High-quality datasets for collective intelligence research
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <DatasetCard
                name="Collective Decision Corpus"
                description="10,000+ annotated group decision-making scenarios with outcomes"
                size="2.3 GB"
                license="CC BY 4.0"
              />
              <DatasetCard
                name="Deliberation Transcripts"
                description="5,000+ hours of transcribed group deliberations"
                size="8.7 GB"
                license="CC BY-NC 4.0"
              />
              <DatasetCard
                name="Expert Network Data"
                description="Collaboration networks from 500+ research organizations"
                size="450 MB"
                license="CC BY 4.0"
              />
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="bg-gradient-to-br from-dia-blue-900 via-dia-blue-800 to-dia-purple-900 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Collaborate With Us
            </h2>
            <p className="mt-6 text-lg text-dia-blue-100">
              We're always looking for research partners, institutions, and contributors to join our mission.
              Let's advance collective intelligence together.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="cta" size="lg" className="bg-white text-dia-blue-900 hover:bg-dia-blue-50" asChild>
                <Link href="/get-involved#partnerships">Become a Partner</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Research Team</Link>
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
function ResearchAreaCard({
  title,
  description,
  topics,
}: {
  title: string;
  description: string;
  topics: string[];
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-dia-slate-700">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-dia-blue-100 px-3 py-1 text-xs font-medium text-dia-blue-900"
            >
              {topic}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({
  status,
  title,
  description,
  team,
  timeline,
  funding,
}: {
  status: string;
  title: string;
  description: string;
  team: string;
  timeline: string;
  funding: string;
}) {
  const statusColors = {
    Active: "bg-dia-success-50 text-dia-success-700",
    Pilot: "bg-dia-info-50 text-dia-info-700",
    Completed: "bg-dia-slate-100 text-dia-slate-700",
  };

  return (
    <Card className="border-dia-slate-200">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[status as keyof typeof statusColors]}`}>
            {status}
          </span>
          <span className="text-sm text-dia-slate-600">{timeline}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base">{description}</CardDescription>
        <div className="flex items-center justify-between text-sm">
          <span className="text-dia-slate-600">👥 {team}</span>
          <span className="font-semibold text-dia-slate-900">💰 {funding}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function PublicationCard({
  title,
  authors,
  venue,
  description,
  link,
}: {
  title: string;
  authors: string;
  venue: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dia-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-dia-slate-600">{authors}</p>
            <p className="mt-1 text-sm font-medium text-dia-purple-600">{venue}</p>
            <p className="mt-3 text-sm text-dia-slate-700">{description}</p>
          </div>
          <a
            href={link}
            className="ml-4 flex-shrink-0 text-dia-blue-900 hover:text-dia-blue-700"
            aria-label="External link"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function ToolCard({
  name,
  description,
  stars,
  language,
  link,
}: {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
}) {
  return (
    <Card className="border-dia-slate-200 transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dia-slate-900">{name}</h3>
            <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="text-dia-slate-600">⭐ {stars} stars</span>
              <span className="rounded-full bg-dia-slate-100 px-2 py-1 text-xs font-medium text-dia-slate-700">
                {language}
              </span>
            </div>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex-shrink-0"
          >
            <Button variant="outline" size="sm">
              View
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function DatasetCard({
  name,
  description,
  size,
  license,
}: {
  name: string;
  description: string;
  size: string;
  license: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-dia-slate-900">{name}</h3>
        <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-dia-slate-600">{size}</span>
          <span className="rounded-full bg-dia-teal-100 px-2 py-1 text-xs font-medium text-dia-teal-700">
            {license}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
