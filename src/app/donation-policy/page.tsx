import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Donation Policy",
  description: "Learn about our donation policies, fund allocation, and refund procedures.",
};

export default function DonationPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-dia-slate-900 sm:text-5xl">
            Donation Policy
          </h1>
          <p className="mt-6 text-lg text-dia-slate-700">
            Last Updated: January 26, 2026
          </p>

          <div className="prose prose-lg mt-12 max-w-none text-dia-slate-700">
            <p>
              Thank you for considering a donation to the Decentralized Intelligence Agency (DIA).
              As a 501(c)(3) tax-exempt non-profit organization, we're committed to transparency
              and accountability in how we use donations to advance our mission.
            </p>

            <h2>1. Tax-Deductible Status</h2>
            <p>
              The DIA is a registered 501(c)(3) non-profit organization (EIN: 12-3456789). Donations
              to the DIA are tax-deductible to the extent allowed by law. You will receive an
              email confirmation of your donation that can be used for tax purposes. For donations
              of $250 or more, you will receive a formal acknowledgment letter by mail.
            </p>

            <h2>2. Fund Allocation</h2>
            <p>
              We're committed to using donations efficiently and effectively to advance our mission.
              Our approximate fund allocation is:
            </p>
            <ul>
              <li><strong>60%</strong> - Research Programs (direct research costs, researcher salaries, data)</li>
              <li><strong>25%</strong> - Open Source Tools (development, infrastructure, maintenance)</li>
              <li><strong>15%</strong> - Community & Operations (events, outreach, administrative costs)</li>
            </ul>
            <p>
              Detailed financial reports are available in our annual reports, published on our
              website and provided to donors upon request.
            </p>

            <h2>3. Donation Methods</h2>
            <p>We accept donations through the following methods:</p>
            <ul>
              <li><strong>Credit/Debit Card:</strong> Via our secure online donation form (processed by Stripe)</li>
              <li><strong>Bank Transfer/ACH:</strong> For donations over $5,000</li>
              <li><strong>Stock/Securities:</strong> We accept donations of appreciated stock</li>
              <li><strong>Donor Advised Funds:</strong> We accept grants from DAFs</li>
              <li><strong>Cryptocurrency:</strong> Bitcoin, Ethereum (contact us for wallet addresses)</li>
            </ul>

            <h2>4. Recurring Donations</h2>
            <p>
              Monthly recurring donations provide stable funding that allows us to plan long-term
              research initiatives. You can modify or cancel your recurring donation at any time
              through your donor account or by contacting us.
            </p>

            <h2>5. Restricted vs. Unrestricted Donations</h2>
            <p>
              <strong>Unrestricted Donations:</strong> These donations give us the flexibility to allocate
              funds where they're most needed, which we generally recommend.
            </p>
            <p>
              <strong>Restricted Donations:</strong> You may specify that your donation be used for a
              particular program or initiative. We will honor your restriction to the best of our
              ability, though if circumstances change, we may contact you to discuss reallocation.
            </p>

            <h2>6. Refund Policy</h2>
            <p>
              <strong>General Policy:</strong> Due to the nature of charitable contributions, donations
              to the DIA are generally non-refundable.
            </p>
            <p>
              <strong>Exceptions:</strong> Refunds may be considered in the following circumstances:
            </p>
            <ul>
              <li>Processing errors or duplicate charges</li>
              <li>Unauthorized transactions (verified as fraudulent)</li>
              <li>Mistakes in donation amount made by the donor (contact us within 30 days)</li>
            </ul>
            <p>
              To request a refund, contact us at donate@dia.org within 30 days of the donation.
              Include your donation confirmation number and reason for the request.
            </p>

            <h2>7. Donation Acknowledgment</h2>
            <p>
              All donors receive:
            </p>
            <ul>
              <li>Immediate email confirmation with donation details</li>
              <li>Annual receipt for tax purposes (by January 31)</li>
              <li>Quarterly impact updates via email (can be unsubscribed)</li>
            </ul>
            <p>
              Donors at certain levels receive additional recognition and benefits as outlined in
              our "Get Involved" page.
            </p>

            <h2>8. Privacy of Donor Information</h2>
            <p>
              We respect your privacy and will never sell, rent, or trade your personal information.
              Donor information is used solely for:
            </p>
            <ul>
              <li>Processing your donation</li>
              <li>Sending donation receipts and impact updates</li>
              <li>Providing donor benefits (at your consent level)</li>
              <li>Required legal and financial reporting</li>
            </ul>
            <p>
              See our Privacy Policy for more details on how we protect your information.
            </p>

            <h2>9. Anonymous Donations</h2>
            <p>
              We welcome anonymous donations. If you wish to remain anonymous, please check the
              "Make this donation anonymous" option on the donation form or contact us directly.
              Note that we still need your contact information for processing and receipts, but
              we will not publicly acknowledge your donation.
            </p>

            <h2>10. Matching Gifts</h2>
            <p>
              Many employers offer matching gift programs that can double or triple your donation.
              Check with your HR department to see if your company matches charitable donations.
              If so, we'll work with you to complete the matching gift process.
            </p>

            <h2>11. Planned Giving</h2>
            <p>
              For those interested in making a lasting impact, we accept planned gifts including:
            </p>
            <ul>
              <li>Bequests in wills or trusts</li>
              <li>Beneficiary designations on retirement accounts or life insurance</li>
              <li>Charitable remainder trusts</li>
              <li>Charitable gift annuities</li>
            </ul>
            <p>
              Contact us at plannedgiving@dia.org to discuss planned giving options.
            </p>

            <h2>12. Financial Transparency</h2>
            <p>
              As a 501(c)(3) organization, we're committed to financial transparency. We publish
              annual audited financial statements, Form 990 tax returns, and impact reports on
              our website. Donors may request additional financial information at any time.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about donations, refunds, or planned giving, please contact:
            </p>
            <p>
              <strong>Email:</strong> donate@dia.org<br />
              <strong>Phone:</strong> (415) 555-0123<br />
              <strong>Address:</strong> 123 Innovation Way, San Francisco, CA 94105
            </p>

            <div className="rounded-lg bg-dia-blue-50 p-6 mt-8">
              <p className="mb-0">
                <strong>Thank You:</strong> Your donation directly supports groundbreaking research
                in collective intelligence. Together, we're building systems that enable humans
                and AI to collaborate effectively to solve humanity's greatest challenges.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
