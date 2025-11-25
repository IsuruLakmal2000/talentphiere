import React from 'react';
import './Privacy.css';

const Privacy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last Updated: November 25, 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Talentphere ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our talent outsourcing services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and job title</li>
            <li>Resume and professional background (for talent applications)</li>
            <li>Payment and billing information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and browser information</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our talent outsourcing services</li>
            <li>Process your requests and applications</li>
            <li>Match clients with appropriate talent</li>
            <li>Communicate with you about our services</li>
            <li>Send marketing and promotional materials (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business</li>
            <li><strong>Clients and Talent:</strong> When matching talent with opportunities (with appropriate consent)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Data portability (where applicable)</li>
          </ul>
          <p>To exercise these rights, please contact us at hello@talentphere.com</p>
        </section>

        <section className="legal-section">
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. International Data Transfers</h2>
          <p>
            As we operate globally, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@talentphere.com</p>
            <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
