
import React from 'react';
const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <p>
          By using the website or App and providing personal information, you give your consent to the terms of this Privacy Policy, as revised from time to time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. What Do We Do With Your Information?</h2>
        <p>
          When you pay fees, we collect personal information such as your name, address, and email address.
        </p>
        <p>
          When you browse our website or App, we also automatically receive your computer’s internet protocol (IP) address to provide us with information that helps us learn about your browser and operating system.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Consent</h2>
        <p>
          <strong>How do you get my consent?</strong>
          <br />
          When you provide us with personal information to complete any fee remittance transaction or verify your credit card, we imply that you consent to our collecting and using the personal information for that specific reason only.
        </p>
        <p>
          <strong>How do I withdraw my consent?</strong>
          <br />
          If you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information at any time, by contacting us at <a href="mailto:medhaviclasses6@gmail.com" className="text-blue-600 underline">medhaviclasses6@gmail.com</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Retention</h2>
        <p>
          The personal information collected will be retained only for a limited duration necessary to fulfill the purposes for which the data was collected unless a longer retention period is required or permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Disclosure</h2>
        <p>
          We may disclose your personal information if required by law or regulatory authorities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Payment</h2>
        <p>
          We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) during payment processing. After completion of your fee payment transaction, your information is not saved.
        </p>
        <p>
          For more insight, you may also want to read the <a href="https://razorpay.com" target="_blank" className="text-blue-600 underline">terms and conditions of Razorpay</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Other Third-Party Services</h2>
        <p>
          Third-party providers used by us will only collect, use, and disclose your information to the extent necessary to perform the services they provide.
        </p>
        <p>
          We recommend you read their privacy policies to understand how your personal information will be handled by these providers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
        <p>
          To protect your personal information, we take reasonable security practices and precautions in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
        <p>
          We use cookies to maintain the session of your user. It is not used to personally identify you on other websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon posting.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">10. Queries and Concerns</h2>
        <p>
          If you have any questions or would like to access, correct, or delete any personal information we have about you, please contact us at <a href="mailto:medhaviclasses6@gmail.com" className="text-blue-600 underline">medhaviclasses6@gmail.com</a> or mail us at:
        </p>
        <address>
          Medhavi classes, 3RD Floor, Room no 305, Hariom Tower, Circular Road, Ranchi 834001. Contact No: 6206783411
        </address>
      </section>
    </div>
  );
};

export default Privacy;
