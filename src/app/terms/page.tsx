import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the DIA website and services.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg text-dia-slate-700">
            Last Updated: January 26, 2026
          </p>

          <div className="prose prose-lg mt-12 max-w-none text-dia-slate-700">
            <p>
              Welcome to the Decentralized Intelligence Agency (DIA) website. By accessing or using
              our website at dia.org, you agree to be bound by these Terms of Service.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms
              of Service and our Privacy Policy. If you do not agree to these terms, please do
              not use our website.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on
              this page with an updated revision date. Your continued use of the website after
              changes constitutes acceptance of the new terms.
            </p>

            <h2>3. Use of Website</h2>
            <p>You may use this website for lawful purposes and in accordance with these Terms.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for any illegal purpose</li>
              <li>Violate any international, federal, or state laws</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm others</li>
              <li>Spread malware or viruses</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with website operation</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of DIA or its licensors and is protected by copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works without our
              express written permission, except as allowed by fair use or with appropriate attribution.
            </p>

            <h2>5. User-Generated Content</h2>
            <p>
              If you submit content to our website (e.g., comments, forum posts), you grant us a
              non-exclusive, royalty-free license to use, display, and distribute such content.
            </p>
            <p>You are responsible for:</p>
            <ul>
              <li>Accuracy of information you provide</li>
              <li>Ensuring you have rights to share the content</li>
              <li>Complying with these terms when sharing content</li>
            </ul>

            <h2>6. Privacy Policy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy, which explains how
              we collect, use, and protect your information.
            </p>

            <h2>7. Disclaimers</h2>
            <p>
              THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR
              RELIABILITY OF ANY CONTENT.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DIA SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF
              THIS WEBSITE.
            </p>

            <h2>9. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content or practices of these websites. Your interaction with these websites is
              governed by their terms and policies.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to this website at our
              discretion, without notice, for conduct that violates these Terms or is harmful
              to other users, us, or third parties.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of California, without regard to its conflict of law provisions.
            </p>

            <h2>12. Donations and Refunds</h2>
            <p>
              For policies related to donations, please refer to our Donation Policy, which is
              incorporated into these Terms by reference.
            </p>

            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless DIA from any claims arising from your use
              of the website or violation of these Terms.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall remain in full force and effect.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and DIA regarding your use
              of the website.
            </p>

            <h2>16. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@dia.org<br />
              <strong>Address:</strong> 123 Innovation Way, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
