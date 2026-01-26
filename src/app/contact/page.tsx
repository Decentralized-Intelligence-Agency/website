import { Metadata } from "next";
import { Mail, MessageSquare, Newspaper, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the DIA team for inquiries, partnerships, press, or support.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dia-blue-50 to-white py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-dia-slate-700">
                Have questions about our research? Want to collaborate? We'd love to hear from you.
                Choose the contact method that best fits your inquiry.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ContactOption
                icon={MessageSquare}
                title="General Inquiries"
                email="info@dia.org"
                description="For general questions about the DIA"
              />
              <ContactOption
                icon={Mail}
                title="Press & Media"
                email="press@dia.org"
                description="For press inquiries and interview requests"
              />
              <ContactOption
                icon={Newspaper}
                title="Partnerships"
                email="partnerships@dia.org"
                description="For research and institutional partnerships"
              />
              <ContactOption
                icon={MapPin}
                title="Visit Us"
                address="San Francisco, CA"
                description="Our headquarters in the Bay Area"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Fill out the form below and we'll get back to you within 2-3 business days.
              </p>
            </div>

            <Card className="mt-12">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dia-slate-900">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-dia-slate-900">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dia-slate-900">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-dia-slate-900">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                      placeholder="Your company or institution"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dia-slate-900">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="research">Research Question</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="donation">Donation Question</option>
                      <option value="press">Press & Media</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dia-slate-900">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="mt-2 block w-full rounded-md border-2 border-dia-slate-200 px-4 py-3 text-dia-slate-900 placeholder:text-dia-slate-500 focus:border-dia-blue-500 focus:outline-none focus:ring-2 focus:ring-dia-blue-500/20"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 h-4 w-4 rounded border-dia-slate-300 text-dia-blue-900 focus:ring-dia-blue-500"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-dia-slate-700">
                      I agree to the{" "}
                      <a href="/privacy" className="text-dia-blue-900 underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted by the DIA team.
                    </label>
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 rounded-lg bg-dia-blue-50 p-6">
              <h3 className="font-semibold text-dia-slate-900">Response Time</h3>
              <p className="mt-2 text-sm text-dia-slate-700">
                We typically respond to all inquiries within 2-3 business days. For urgent press inquiries,
                please use the dedicated press email above. For technical issues with our platforms,
                please check our GitHub issues page first, as you may find your question already answered.
              </p>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Our Locations
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                While we're a globally distributed organization, we have physical presence in key hubs.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <LocationCard
                city="San Francisco"
                country="California, USA"
                type="Headquarters"
                address="123 Innovation Way\nSan Francisco, CA 94105"
              />
              <LocationCard
                city="Cambridge"
                country="Massachusetts, USA"
                type="Research Hub"
                address="456 Tech Square\nCambridge, MA 02142"
              />
              <LocationCard
                city="London"
                country="United Kingdom"
                type="European Office"
                address="789 Science Park\nCambridge, CB1 0AH"
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-dia-slate-700">
                Most of our team works remotely across 85 countries. While we have these offices for
                meetings and events, we primarily operate as a distributed organization.
              </p>
            </div>
          </div>
        </section>

        {/* Community Links */}
        <section className="bg-dia-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
                Join Our Community
              </h2>
              <p className="mt-4 text-lg text-dia-slate-700">
                Connect with us and stay updated on our work
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CommunityLink
                platform="Discord"
                description="Join our active community server for real-time discussions"
                action="Join Discord"
              />
              <CommunityLink
                platform="Twitter"
                description="Follow for research updates, news, and announcements"
                action="Follow @DIA_org"
              />
              <CommunityLink
                platform="GitHub"
                description="Contribute to our open-source projects"
                action="View Repos"
              />
              <CommunityLink
                platform="LinkedIn"
                description="Connect with our team and stay updated on career opportunities"
                action="Follow Company"
              />
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-dia-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg text-dia-slate-700">
              Before reaching out, check out our FAQ for quick answers to common questions about
              donations, volunteering, partnerships, and more.
            </p>
            <Button variant="outline" size="lg" className="mt-8" asChild>
              <a href="/faq">View FAQ</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function ContactOption({
  icon: Icon,
  title,
  email,
  description,
  address,
}: {
  icon: React.ElementType;
  title: string;
  email?: string;
  description: string;
  address?: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6 text-center">
        <Icon className="mx-auto h-10 w-10 text-dia-blue-900" />
        <h3 className="mt-4 text-lg font-semibold text-dia-slate-900">{title}</h3>
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-2 block text-sm font-medium text-dia-blue-900 hover:text-dia-blue-700"
          >
            {email}
          </a>
        )}
        {address && (
          <p className="mt-2 text-sm text-dia-slate-700">
            {address}
          </p>
        )}
        <p className="mt-2 text-xs text-dia-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function LocationCard({
  city,
  country,
  type,
  address,
}: {
  city: string;
  country: string;
  type: string;
  address: string;
}) {
  return (
    <Card className="border-dia-slate-200">
      <CardContent className="p-6">
        <div className="mb-3 inline-flex items-center rounded-full bg-dia-blue-100 px-3 py-1 text-xs font-semibold text-dia-blue-900">
          {type}
        </div>
        <h3 className="text-xl font-bold text-dia-slate-900">{city}</h3>
        <p className="text-sm text-dia-slate-600">{country}</p>
        <address className="mt-4 not-italic text-sm text-dia-slate-700 whitespace-pre-line">
          {address}
        </address>
      </CardContent>
    </Card>
  );
}

function CommunityLink({
  platform,
  description,
  action,
}: {
  platform: string;
  description: string;
  action: string;
}) {
  return (
    <Card className="border-dia-slate-200 transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-dia-slate-900">{platform}</h3>
        <p className="mt-2 text-sm text-dia-slate-700">{description}</p>
        <Button variant="outline" size="sm" className="mt-4 w-full">
          {action}
        </Button>
      </CardContent>
    </Card>
  );
}
