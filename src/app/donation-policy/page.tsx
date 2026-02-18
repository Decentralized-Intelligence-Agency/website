import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Donation Policy | DIA",
  description: "Learn about our donation policies, fund allocation, and refund procedures.",
};

export default function DonationPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Donation Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Last Updated: January 26, 2026
          </p>

          <div className="prose-dark mt-12 max-w-none">
            <p>
              Thank you for considering a donation to the Decentralized Intelligence Agency (DIA).
              As a 501(c)(3) tax-exempt non-profit organization, we are committed to transparency
              and accountability in how we use donations to advance our mission.
            </p>

            <h2>1. Tax-Deductible Status</h2>
            <p>
              The DIA is a registered 501(c)(3) non-profit organization. Donations to the DIA are
              tax-deductible to the extent allowed by law. You will receive an email confirmation
              of your donation that can be used for tax purposes. For donations of $250 or more,
              you will receive a formal acknowledgment letter.
            </p>

            <h2>2. Fund Allocation</h2>
            <p>
              We are committed to using donations efficiently and effectively to advance our mission.
              Our approximate fund allocation is:
            </p>
            <ul>
              <li><strong>60%</strong> - Research Programs (direct research costs, researcher salaries, data)</li>
              <li><strong>25%</strong> - Open Source Tools (development, infrastructure, maintenance)</li>
              <li><strong>15%</strong> - Community &amp; Operations (events, outreach, administrative costs)</li>
            </ul>
            <p>
              Detailed financial reports are available in our annual reports, published on our
              website and provided to donors upon request.
            </p>

            <h2>3. Donation Methods</h2>
            <p>We accept donations through the following methods:</p>
            <ul>
              <li><strong>Credit/Debit Card:</strong> Via our secure online donation form</li>
              <li><strong>Bank Transfer/ACH:</strong> For larger donations</li>
              <li><strong>Stock/Securities:</strong> We accept donations of appreciated stock</li>
              <li><strong>Donor Advised Funds:</strong> We accept grants from DAFs</li>
              <li><strong>Cryptocurrency:</strong> Bitcoin, Ethereum (contact us for wallet addresses)</li>
            </ul>

            <h2>4. Recurring Donations</h2>
            <p>
              Monthly recurring donations provide stable funding that allows us to plan long-term
              research initiatives. You can modify or cancel your recurring donation at any time
              by contacting us.
            </p>

            <h2>5. Restricted vs. Unrestricted Donations</h2>
            <p>
              <strong>Unrestricted Donations:</strong> These donations give us the flexibility to allocate
              funds where they are most needed, which we generally recommend.
            </p>
            <p>
              <strong>Restricted Donations:</strong> You may specify that your donation be used for a
              particular program or initiative. We will honor your restriction to the best of our
              ability.
            </p>

            <h2>6. Refund Policy</h2>
            <p>
              Due to the nature of charitable contributions, donations to the DIA are generally
              non-refundable. Exceptions may be considered for:
            </p>
            <ul>
              <li>Processing errors or duplicate charges</li>
              <li>Unauthorized transactions (verified as fraudulent)</li>
              <li>Mistakes in donation amount (contact us within 30 days)</li>
            </ul>
            <p>
              To request a refund, contact us at donate@decentralizedintelligence.agency within
              30 days of the donation.
            </p>

            <h2>7. Donation Acknowledgment</h2>
            <p>All donors receive:</p>
            <ul>
              <li>Immediate email confirmation with donation details</li>
              <li>Annual receipt for tax purposes (by January 31)</li>
              <li>Quarterly impact updates via email (can be unsubscribed)</li>
            </ul>

            <h2>8. Privacy of Donor Information</h2>
            <p>
              We respect your privacy and will never sell, rent, or trade your personal information.
              See our Privacy Policy for more details.
            </p>

            <h2>9. Anonymous Donations</h2>
            <p>
              We welcome anonymous donations. If you wish to remain anonymous, please indicate
              this when donating or contact us directly.
            </p>

            <h2>10. Matching Gifts</h2>
            <p>
              Many employers offer matching gift programs. Check with your HR department to see
              if your company matches charitable donations.
            </p>

            <h2>11. Financial Transparency</h2>
            <p>
              As a 501(c)(3) organization, we are committed to financial transparency. We publish
              annual audited financial statements, Form 990 tax returns, and impact reports.
              Donors may request additional financial information at any time.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              For questions about donations, please contact:
            </p>
            <p>
              <strong>Email:</strong> donate@decentralizedintelligence.agency
            </p>

            <p className="mt-8 text-lg italic gradient-text">
              Your donation directly supports open-source research and development for collective
              intelligence. Together, we are building systems that make humanity collectively
              more intelligent.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
