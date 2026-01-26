import { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Users,
  Handshake,
  Briefcase,
  Mail,
  CheckCircle,
  CreditCard,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Support our mission through donations, volunteering, partnerships, or joining our team.",
};

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dia-blue-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
                Join Our Mission
              </h1>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700">
                Whether you can contribute time, expertise, funding, or just your voice—there's a place
                for you in advancing collective intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Give Overview */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <WayCard
                icon={Heart}
                title="Donate"
                description="Support our research with a tax-deductible contribution"
                href="#donate"
              />
              <WayCard
                icon={Users}
                title="Volunteer"
                description="Contribute your skills and time to our mission"
                href="#volunteer"
              />
              <WayCard
                icon={Handshake}
                title="Partner"
                description="Collaborate with us on research and initiatives"
                href="#partnerships"
              />
              <WayCard
                icon={Briefcase}
                title="Careers"
                description="Join our team and work on groundbreaking research"
                href="#careers"
              />
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="mx-auto h-12 w-12 text-dia-coral-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Make a Donation
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Your support directly funds groundbreaking research in collective intelligence.
                All donations are tax-deductible.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <DonationTier
                name="Supporter"
                amount="$50"
                period="one-time or monthly"
                benefits={[
                  "Quarterly impact updates",
                  "Digital donor badge",
                  "Early access to research papers",
                  "Invitation to annual virtual town hall",
                ]}
              />
              <DonationTier
                name="Partner"
                amount="$250"
                period="one-time or monthly"
                benefits={[
                  "All Supporter benefits",
                  "Name listed on our website",
                  "Quarterly research webinars",
                  "Exclusive behind-the-scenes content",
                  "Invitation to donor events",
                ]}
                featured
              />
              <DonationTier
                name="Patron"
                amount="$1,000"
                period="one-time or monthly"
                benefits={[
                  "All Partner benefits",
                  "Annual impact report with your specific impact",
                  "Private briefing with research team",
                  "Input on research priorities",
                  "VIP invitation to annual gala",
                ]}
              />
            </div>

            {/* Donation Options */}
            <div className="mt-16">
              <h3 className="text-center text-2xl font-bold text-dia-slate-900">
                Choose Your Donation Method
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <DonationMethod
                  icon={CreditCard}
                  title="Credit Card"
                  description="Secure online donation via Stripe"
                />
                <DonationMethod
                  icon={Repeat}
                  title="Monthly Giving"
                  description="Sustained support with automatic monthly donations"
                />
                <DonationMethod
                  title="Stock/Securities"
                  description="Donate appreciated stock for tax benefits"
                />
                <DonationMethod
                  title="Donor Advised Fund"
                  description="Recommend grants from your DAF"
                />
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
              <div className="text-center">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Donate Now
                </Button>
                <p className="mt-4 text-sm text-dia-slate-600">
                  Questions about donating?{" "}
                  <Link href="/contact" className="text-dia-blue-900 underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>

            {/* Fund Allocation */}
            <div className="mt-12 rounded-lg bg-dia-blue-50 p-8">
              <h3 className="text-xl font-bold text-dia-slate-900">
                How Your Donation is Used
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <AllocationItem percentage="60%" label="Research Programs" />
                <AllocationItem percentage="25%" label="Open Source Tools" />
                <AllocationItem percentage="15%" label="Community & Operations" />
              </div>
              <p className="mt-4 text-sm text-dia-slate-700">
                We're committed to financial transparency. View our annual reports and audited financial
                statements on our{" "}
                <Link href="/about#financials" className="text-dia-blue-900 underline">
                  About page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-dia-blue-900" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Volunteer Your Skills
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Join our global community of volunteers contributing to collective intelligence research.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VolunteerRole
                title="Research Assistant"
                description="Help with literature reviews, data analysis, and experimental design"
                timeCommitment="5-10 hours/week"
                skills={["Academic research", "Data analysis", "Technical writing"]}
              />
              <VolunteerRole
                title="Software Developer"
                description="Contribute to our open-source platforms and tools"
                timeCommitment="8-12 hours/week"
                skills={["Python/TypeScript", "Web development", "Open source contribution"]}
              />
              <VolunteerRole
                title="Community Organizer"
                description="Help build and engage our global community of researchers and developers"
                timeCommitment="3-5 hours/week"
                skills={["Community management", "Event planning", "Communication"]}
              />
              <VolunteerRole
                title="Advocacy & Outreach"
                description="Help spread awareness about collective intelligence research"
                timeCommitment="2-5 hours/week"
                skills={["Public speaking", "Social media", "Content creation"]}
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact?subject=volunteer">Apply to Volunteer</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section id="partnerships" className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Handshake className="mx-auto h-12 w-12 text-dia-purple-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Research Partnerships
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Collaborate with us to advance collective intelligence research and development.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <PartnershipType
                title="Academic Institutions"
                description="Joint research projects, PhD supervision, visiting scholar programs, and access to our datasets and tools."
                benefits={[
                  "Co-authored publications",
                  "Access to DIA research infrastructure",
                  "Funding opportunities",
                  "Student engagement programs",
                ]}
              />
              <PartnershipType
                title="Industry Partners"
                description="Applied research collaborations, technology transfer, and real-world deployment of collective intelligence systems."
                benefits={[
                  "Early access to research findings",
                  "Custom research projects",
                  "Technology licensing",
                  "Recruitment pipeline",
                ]}
              />
              <PartnershipType
                title="Government Agencies"
                description="Research on AI governance, policy development, and public sector applications of collective intelligence."
                benefits={[
                  "Policy briefings and expertise",
                  "Custom research programs",
                  "Training and workshops",
                  "Ethics advisory services",
                ]}
              />
              <PartnershipType
                title="Non-Profit Organizations"
                description="Collaborations on applying collective intelligence to social impact and humanitarian challenges."
                benefits={[
                  "Shared mission alignment",
                  "Grant funding partnerships",
                  "Community access",
                  "Impact measurement",
                ]}
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact?subject=partnership">Inquire About Partnership</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Briefcase className="mx-auto h-12 w-12 text-dia-teal-600" />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Open Positions
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Join our team and work on the most important challenges in collective intelligence.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              <JobPosting
                title="Senior Research Scientist - Collective Intelligence"
                location="Remote / San Francisco, CA"
                type="Full-time"
                description="Lead research projects on collective decision systems and human-AI collaboration."
              />
              <JobPosting
                title="Full-Stack Engineer"
                location="Remote"
                type="Full-time"
                description="Build and maintain our open-source collective intelligence platforms."
              />
              <JobPosting
                title="Research Program Manager"
                location="Remote"
                type="Full-time"
                description="Coordinate research initiatives across our global team of researchers and partners."
              />
              <JobPosting
                title="PhD Fellow - AI Governance"
                location="Remote / Cambridge, MA"
                type="Full-time"
                description="Conduct doctoral research on the governance of AI systems in collective settings."
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/careers">View All Openings</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="bg-gradient-to-br from-dia-blue-900 via-dia-blue-800 to-dia-purple-900 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="mx-auto h-12 w-12 text-dia-blue-100" />
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Connected
            </h2>
            <p className="mt-6 text-lg text-dia-blue-100">
              Subscribe to our newsletter for research updates, event announcements, and community news.
              No spam, unsubscribe anytime.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-0 px-6 py-4 text-dia-slate-900 placeholder:text-dia-slate-500 focus:ring-4 focus:ring-dia-blue-300"
                required
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="bg-white text-dia-blue-900 hover:bg-dia-blue-50"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-dia-blue-200">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function WayCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <Card className="border-dia-slate-200 transition-shadow hover:shadow-lg">
        <CardContent className="p-6 text-center">
          <Icon className="mx-auto h-10 w-10 text-dia-blue-900" />
          <h3 className="mt-4 text-lg font-bold text-dia-slate-900 group-hover:text-dia-blue-900">
            {title}
          </h3>
          <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function DonationTier({
  name,
  amount,
  period,
  benefits,
  featured = false,
}: {
  name: string;
  amount: string;
  period: string;
  benefits: string[];
  featured?: boolean;
}) {
  return (
    <Card
      className={`border-2 ${
        featured
          ? "border-dia-purple-600 shadow-lg"
          : "border-dia-slate-200"
      }`}
    >
      {featured && (
        <div className="bg-dia-purple-600 px-4 py-2 text-center text-sm font-semibold text-white">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-dia-slate-900">{amount}</span>
          <span className="text-sm text-dia-slate-600">/{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-dia-slate-700">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-dia-success-600" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={featured ? "cta" : "outline"}
          className="mt-6 w-full"
          size="lg"
        >
          Select {name}
        </Button>
      </CardContent>
    </Card>
  );
}

function DonationMethod({
  icon: Icon,
  title,
  description,
}: {
  icon?: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6 text-center">
        {Icon && <Icon className="mx-auto h-8 w-8 text-dia-blue-900" />}
        <h3 className="mt-4 font-semibold text-dia-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}

function AllocationItem({
  percentage,
  label,
}: {
  percentage: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-dia-blue-900">{percentage}</div>
      <div className="mt-1 text-sm text-dia-slate-700">{label}</div>
    </div>
  );
}

function VolunteerRole({
  title,
  description,
  timeCommitment,
  skills,
}: {
  title: string;
  description: string;
  timeCommitment: string;
  skills: string[];
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-dia-slate-700">{description}</p>
        <div className="mt-4">
          <div className="text-sm font-semibold text-dia-slate-900">
            Time Commitment: {timeCommitment}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-dia-blue-100 px-3 py-1 text-xs font-medium text-dia-blue-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PartnershipType({
  title,
  description,
  benefits,
}: {
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm font-semibold text-dia-slate-900 mb-2">
          Benefits include:
        </div>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-dia-slate-700">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-dia-success-600 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function JobPosting({
  title,
  location,
  type,
  description,
}: {
  title: string;
  location: string;
  type: string;
  description: string;
}) {
  return (
    <Card className="border-dia-slate-200 transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dia-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-dia-slate-100 px-3 py-1 font-medium text-dia-slate-700">
                {location}
              </span>
              <span className="rounded-full bg-dia-blue-100 px-3 py-1 font-medium text-dia-blue-900">
                {type}
              </span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
