// Import necessary modules and components
import React from 'react';

export const metadata = {
  title: `Terms and Conditions | SiteName`,
  description: "Read the terms and conditions for using our services."
};

async function Terms() {
  return (
    <section id="Terms-and-conditions" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto xl:max-w-4xl">
          {/* Page Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-900 mt-7 sm:text-3xl xl:text-4xl font-pj">
            Terms and Conditions
          </h1>
          <p className="text-sm font-normal text-black mt-7 xl:text-1xl font-pj">
            Last Updated: December 2, 2024
          </p>

          {/* Section 1: Use of Our Services */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">1. Use of Our Services</h2>
          
          <section>
            <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">a. Eligibility</p>
            <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
              <li>Be at least 13 years old.</li>
              <li>Agree to follow these Terms and all applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">b. User Account</p>
            <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">
              You are responsible for keeping your account information secure. Notify us immediately if you suspect
              unauthorized use of your account.
            </p>
          </section>

          <section>
            <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">c. Permitted Use</p>
            <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
              <li>Use the Services for any illegal or unauthorized purpose.</li>
              <li>Interfere with or disrupt the operation of the Services.</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Services.</li>
            </ul>
          </section>

          {/* Section 2: Intellectual Property */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">2. Intellectual Property</h2>
          
          <section>
            <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">a. Ownership</p>
            <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">
              All content, trademarks, and other intellectual property on the platform are owned by us or our licensors.
            </p>
          </section>

          <section>
            <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">b. License</p>
            <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">
              We grant you a limited, non-exclusive, and revocable license to use the platform for personal, non-commercial purposes.
            </p>
          </section>

          {/* Section 3: Limitation of Liability */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">3. Limitation of Liability</h2>
          
          <section>
            <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          {/* Section 4: Changes to Terms */}
          <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">4. Changes to Terms</h2>
          
          <section>
            <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              We reserve the right to update these terms at any time. Continued use of the platform after changes means you accept the new terms.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}

export default Terms;
