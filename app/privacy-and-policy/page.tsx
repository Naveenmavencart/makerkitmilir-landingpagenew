// Import necessary modules and components
import React from 'react';

export const metadata = {
  title: `Privacy & Policy | SiteName`,
  description: "Read the terms and conditions for using our services."
};

async function Terms() {
  return (
    <section id="privacy-and-policy" className="py-12 bg-white sm:py-16 lg:py-18">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto xl:max-w-4xl">
        {/* <p className="text-sm font-bold tracking-widest text-gray-400 uppercase font-pj">Privacy Policy</p> */}
        <h1 className="text-3xl font-bold text-gray-900 mt-7 sm:text-4xl xl:text-4xl text-center font-pj">Privacy Policy</h1>
        <p className="text-sm font-normal text-gray-600 mt-7  xl:text-1xl font-pj">Last Updated: December 2, 2024</p>

        {/* <div className="mt-10">
          <svg className="w-auto h-4 text-gray-300" width="172" height="16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            Decorative SVG Lines 
            {[...Array(24)].map((_, index) => (
              <line
                key={index}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${index * 7 + 11} 1)`}
              />
            ))}
          </svg>
        </div> */}

        <div className="mt-10">
          {/* <p className="text-base font-normal leading-7 text-gray-700 font-pj">
            Milir ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p> */}
          <blockquote className="pl-5 mt-8 border-l-2 border-gray-900">
            <p className="text-lg italic font-medium text-gray-900 font-pj">
              “By accessing or using Milir, you agree to this Privacy Policy. If you do not agree, please do not use our website or services.”
            </p>
          </blockquote>

          {/* Information We Collect Section */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">1. Information We Collect</h2>
          <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">We may collect and process the following types of information:</p>

          <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">a. Personal Information</p>
          <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">When you interact with us, we may collect:</p>
          <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc font-pj">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Payment details (processed securely via third-party providers)</li>
          </ul>

          <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">b. Usage Data</p>
          <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">We collect data about how you use Milir, such as:</p>
          <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc font-pj">
            <li>Session recordings and interactions (clicks, page visits, feature usage)</li>
            <li>Behavioral patterns during free trials</li>
            <li>Event triggers and navigation paths</li>
          </ul>

          <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">c. Cookies and Tracking Technologies</p>
          <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">We use cookies and similar technologies to:</p>
          <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc font-pj">
            <li>Enhance user experience</li>
            <li>Analyze user behavior and engagement</li>
            <li>Deliver personalized services</li>
          </ul>

          {/* Additional Sections */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">2. How We Use Your Information</h2>
          <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc font-pj">
            <li>Provide and optimize our services</li>
            <li>Track free trial user behavior to enhance conversion insights</li>
            <li>Offer customer support and resolve user issues in real-time</li>
            <li>Personalize communications and outreach</li>
            <li>Process payments for subscriptions</li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">3. How We Share Your Information</h2>
          <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc font-pj">
            <li>
              <span className="font-bold">Service Providers:</span> Third parties that assist with payment processing, session recording, or analytics.
            </li>
            <li>
              <span className="font-bold">Legal Authorities:</span> If required to comply with applicable laws or legal processes.
            </li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">4. Data Retention</h2>
          <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
            We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">5. Your Rights</h2>
          <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
            You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Terms;
