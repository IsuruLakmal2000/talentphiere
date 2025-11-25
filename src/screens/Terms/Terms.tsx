import React from 'react';
import './Terms.css';

const Terms: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last Updated: November 25, 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Talentphere's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Description of Services</h2>
          <p>
            Talentphere provides talent outsourcing services, connecting businesses with highly skilled global professionals. Our services include:
          </p>
          <ul>
            <li>Talent recruitment and vetting</li>
            <li>Talent matching with client requirements</li>
            <li>Onboarding and integration support</li>
            <li>Ongoing talent management and support</li>
            <li>Related consulting and advisory services</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. User Accounts and Registration</h2>
          <h3>3.1 Account Creation</h3>
          <p>
            To use certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current.
          </p>

          <h3>3.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Client Responsibilities</h2>
          <p>As a client using our talent outsourcing services, you agree to:</p>
          <ul>
            <li>Provide accurate job requirements and expectations</li>
            <li>Treat talent with respect and professionalism</li>
            <li>Make timely payments as agreed</li>
            <li>Comply with all applicable labor and employment laws</li>
            <li>Provide necessary tools and resources for talent to perform their duties</li>
            <li>Not attempt to directly hire talent without appropriate agreements</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Talent Responsibilities</h2>
          <p>As talent registered with Talentphere, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information about your skills and experience</li>
            <li>Maintain professional conduct with clients</li>
            <li>Deliver quality work according to agreed terms</li>
            <li>Comply with client confidentiality requirements</li>
            <li>Not solicit direct employment from clients during your engagement period</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Fees and Payment</h2>
          <h3>6.1 Service Fees</h3>
          <p>
            Clients agree to pay the fees as outlined in their service agreement. Fees are subject to change with 30 days' notice.
          </p>

          <h3>6.2 Payment Terms</h3>
          <p>
            Payment is due according to the terms specified in your service agreement. Late payments may result in service suspension and may incur additional fees.
          </p>

          <h3>6.3 Refund Policy</h3>
          <p>
            Refunds are handled on a case-by-case basis according to the terms of your service agreement. Please contact us to discuss any concerns about services rendered.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Intellectual Property</h2>
          <h3>7.1 Our Intellectual Property</h3>
          <p>
            All content on our website, including text, graphics, logos, and software, is the property of Talentphere and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without permission.
          </p>

          <h3>7.2 Work Product</h3>
          <p>
            Ownership of work product created by talent during engagements is governed by individual service agreements between clients and Talentphere.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of services. This obligation continues after the termination of services.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Talentphere shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Warranties and Disclaimers</h2>
          <p>
            We strive to provide high-quality talent and services. However, our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that talent will meet all client expectations or that services will be uninterrupted or error-free.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Termination</h2>
          <h3>11.1 Termination by You</h3>
          <p>
            You may terminate your use of our services at any time by providing written notice according to your service agreement.
          </p>

          <h3>11.2 Termination by Us</h3>
          <p>
            We reserve the right to suspend or terminate your access to our services if you violate these Terms of Service or for any other reason at our discretion, with appropriate notice.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify you of material changes by posting the updated terms on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="legal-section">
          <h2>16. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@talentphere.com</p>
            <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
