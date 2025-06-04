import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to our website. By accessing or using our services, you agree to be bound by these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Our Services</h2>
      <p className="mb-4">
        You may use our services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Purchases</h2>
      <p className="mb-4">
        All purchases made through our platform are subject to product availability. We reserve the right to refuse or cancel any order at any time for reasons including product availability, errors in the description or price of the product, or any other issue.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Accounts</h2>
      <p className="mb-4">
        When you create an account with us, you must provide us with accurate and complete information. You are responsible for safeguarding your password and any activities under your account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content provided on this site, including images, logos, and product descriptions, are the property of the company and protected by copyright laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your account immediately without prior notice if you breach any of these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes</h2>
      <p className="mb-4">
        We reserve the right to modify or replace these Terms at any time. We will try to provide at least 15 days’ notice prior to any new terms taking effect.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
