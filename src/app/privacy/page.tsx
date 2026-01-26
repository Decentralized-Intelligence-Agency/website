import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how the DIA collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-dia-slate-700">
            Last Updated: January 26, 2026
          </p>

          <div className="prose prose-lg mt-12 max-w-none text-dia-slate-700">
            <p>
              The Decentralized Intelligence Agency (DIA) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website dia.org.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide to Us</h3>
            <p>
              We collect information you provide directly to us, including:
            </p>
            <ul>
              <li>Contact information (name, email address) when you fill out forms</li>
              <li>Donation information (payment details processed securely through third parties)</li>
              <li>Communications with us (emails, messages)</li>
              <li>Newsletter subscriptions</li>
            </ul>

            <h3>Information Automatically Collected</h3>
            <p>
              We automatically collect certain information about your device and usage, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested information</li>
              <li>Process donations and provide donation receipts</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist our operations (e.g., payment processors)</li>
              <li>With your consent for specific purposes</li>
              <li>To comply with legal requirements or protect our rights</li>
              <li>In connection with a merger or acquisition (with notice)</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect and track information about
              your activities on our website. You can control cookie settings through your browser
              preferences.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              Our website may integrate third-party services such as Google Analytics, payment processors,
              and email service providers. These services have their own privacy policies, and we
              encourage you to review them.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@dia.org</p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16. We do not knowingly collect
              personal information from children under 16. If we become aware of such collection,
              we will take steps to delete it.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place to protect your information in accordance
              with this Privacy Policy.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@dia.org<br />
              <strong>Address:</strong> 123 Innovation Way, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
