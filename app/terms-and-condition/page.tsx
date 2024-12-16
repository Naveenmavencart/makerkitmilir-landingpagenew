// Import necessary modules and components
import React from 'react';

export const metadata = {
  title: `Terms and Conditions | SiteName`,
  description: "Read the terms and conditions for using our services."
};

async function Terms() {
  return (
    <section id="Terms-and-condition" className="py-12 bg-white sm:py-16 lg:py-18">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto xl:max-w-4xl ">
            {/* <p className="text-sm font-bold tracking-widest text-gray-400 uppercase font-pj">Terms and Conditions</p> */}
            <h1 className="text-3xl font-bold text-gray-900 mt-7 sm:text-3xl xl:text-4xl font-pj text-center">Terms and Conditions</h1>

            <p className="text-sm font-normal text-black mt-7  xl:text-1xl font-pj">Last Updated: December 2, 2024</p>
{/* 
            <div className="mt-10">
                <svg className="w-auto h-4 text-gray-300" width="172" height="16" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                    <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                </svg>
            </div> */}

            <div className="mt-10">
  {/* <p className="text-base font-normal leading-7 text-gray-700 font-pj">
    Welcome to Milir! These Terms and Conditions ("Terms") govern your access to and use of Milir’s website, tools, and features ("Services"). By using our Services, you agree to comply with these Terms. If you do not agree, please refrain from using Milir.
  </p> */}
                {/* <blockquote className="pl-5 mt-8 border-l-2 border-gray-900">
                    <p className="text-lg italic font-medium text-gray-900 font-pj">“By accessing or using Milir, you agree to this Privacy Policy. If you do not agree, please do not use our website or services.”</p>
                </blockquote> */}

                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">1. Use of Our Services</h2>
                {/* <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                We may collect and process the following types of information:
                </p> */}

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                a. Eligibility
                </p>
                <p className="mt-1 text-base font-bold leading-7 text-gray-700 font-pj">
                To access and use Milir, you must:
                </p>
                <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Be at least 13 years old.</li>
                    <li>Agree to follow these Terms and all applicable laws and regulations.</li>
                    {/* <li>Company name</li>
                    <li>Payment details (processed securely via third-party providers)</li> */}
                 
                </ul>

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                b. User Account
                </p>
                <p className="mt-1 text-base font-normal leading-7 text-gray-700 font-pj">
                You are responsible for keeping your account information secure. Notify us immediately if you suspect unauthorized use of your account.
                </p>
                {/* <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Session recordings and interactions (clicks, page visits, feature usage)</li>
                    <li>Behavioral patterns during free trials</li>
                    <li>Event triggers and navigation paths</li>
                    {/* <li>Payment details (processed securely via third-party providers)</li> */}
                 
                {/* </ul>  */}

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                c. Permitted Use
                </p>
                <p className="mt-1 text-base font-bold leading-7 text-gray-700 font-pj">
                You agree not to:
                </p>
                <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Use the Services for any illegal or unauthorized purpose.</li>
                    <li>Interfere with or disrupt the operation of the Services.</li>
                    <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Services.</li>
                    {/* <li>Payment details (processed securely via third-party providers)</li> */}
                 
                </ul>


                

                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">2. Free Trials and Subscriptions</h2>
                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                a. Free Trial
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                Milir may offer a free trial to new users. Details of the trial period, including its duration, are provided on our website. After the trial ends, continued access may require an upgrade to a paid plan.
                </p>

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                b. Subscriptions
                </p>
                {/* <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                Milir may offer a free trial to new users. Details of the trial period, including its duration, are provided on our website. After the trial ends, continued access may require an upgrade to a paid plan.
                </p> */}

                <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Subscriptions grant you access to specific features and functionalities of the Services.</li>
                    <li>Subscriptions are billed in advance and auto-renew unless canceled before the renewal date.</li>
                    {/* <li>Offer customer support and resolve user issues in real-time</li>
                    <li>Personalize communications and outreach</li> 
                    <li>Process payments for subscriptions</li> 
                  */}
                </ul>

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                c. Cancellation
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                You can cancel your subscription at any time via your account settings. Cancelations take effect at the end of the current billing cycle.
                </p>


                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">3. Payment Terms</h2>
                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                a. Fees
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                The fees for using Milir’s features and tools are listed on our website and may be subject to change.
                </p>

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                b. Payment Methods
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                Payments are processed securely through trusted third-party providers. By providing payment details, you authorize us to charge the specified amount.
                </p>

                {/* <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Subscriptions grant you access to specific features and functionalities of the Services.</li>
                    <li>Subscriptions are billed in advance and auto-renew unless canceled before the renewal date.</li>
                    {/* <li>Offer customer support and resolve user issues in real-time</li>
                    <li>Personalize communications and outreach</li> 
                    <li>Process payments for subscriptions</li> 
                  */}
                {/* </ul> */}

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                c. Refunds
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                Refunds are not provided except as required by law.
                </p>
                

                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">4. Intellectual Property</h2>
                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                a. Ownership
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                All content, features, and functionality of Milir, including its design, text, graphics, and software, are owned by us or our licensors and are protected by intellectual property laws.
                </p>

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                b. Limited License
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                You are granted a limited, non-exclusive, and non-transferable license to use the Services for personal or business purposes.
                </p>

                {/* <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Subscriptions grant you access to specific features and functionalities of the Services.</li>
                    <li>Subscriptions are billed in advance and auto-renew unless canceled before the renewal date.</li>
                    {/* <li>Offer customer support and resolve user issues in real-time</li>
                    <li>Personalize communications and outreach</li> 
                    <li>Process payments for subscriptions</li> 
                  */}
                {/* </ul> */}

                <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
                c. Restrictions
                </p>
                <p className="mt-2 text-base font-normal leading-7 text-gray-700 font-pj">
                You may not copy, distribute, or modify any part of the Services without our prior written consent.
                </p>
                


                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">5. Privacy</h2>
              
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                Your use of Milir is governed by our Privacy Policy. By using the Services, you consent to our collection and use of your data as described in the Privacy Policy.
                </p>

                {/* <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
  <li>
    <span className="font-bold">Service Providers:</span> Third parties that assist with payment processing, session recording, or analytics.
  </li>
  <li>
    <span className="font-bold">Legal Authorities:</span> If required to comply with applicable laws or legal processes.
  </li>
  {/* <li>Offer customer support and resolve user issues in real-time</li> */}
  {/* <li>Personalize communications and outreach</li> 
  <li>Process payments for subscriptions</li>  */}
{/* </ul> */}


<h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">6. Limitation of Liability</h2>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              To the maximum extent permitted by law, Milir will not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the Services.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">7. Termination</h2>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, if you violate these Terms.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">8. Changes to the Terms</h2>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              Milir may update these Terms from time to time. We will notify you of significant changes, and your continued use of the Services constitutes acceptance of the updated Terms.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">9. Governing Law</h2>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes will be resolved in the courts of [Insert Jurisdiction].
              </p>

{/* <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">4. Data Retention</h2>
              
              <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
              We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">5. Your Rights</h2>
              
              <p className="mt-6 text-base font-bold leading-7 text-gray-700 font-pj">
              Depending on your location, you may have the right to:
              </p>
              <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
                    <li>Access the personal data we hold about you</li>
                    <li>Request corrections or deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing where applicable</li> 
                    {/* <li>Process payments for subscriptions</li>  */}
                 
                {/* </ul> */}
                {/* <p className="mt-3 text-base font-normal leading-7 text-gray-700 font-pj">
                To exercise your rights, contact us at [Insert Contact Email].
              </p> */}



                {/* <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">6. Security of Your Information</h2>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                We implement industry-standard measures to safeguard your data. While we strive to protect your personal information, no system can guarantee absolute security.
                </p> */}

                {/* <blockquote className="pl-5 mt-8 border-l-2 border-gray-900">
                    <p className="text-lg italic font-medium text-gray-900 font-pj">“Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique fermentum tristique.”</p>
                </blockquote> */}

                

                {/* <div className="relative mt-16">
                    <div className="absolute -inset-2">
                        <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{
        background:
          "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
      }}></div>
                    </div>

                    <img className="relative rounded-xl" src="https://cdn.rareblocks.xyz/collection/clarity/images/long-form/1/img-blog.png" alt="" />
                </div> */}

                {/* <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">7. Cookies</h2>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                We use cookies to improve functionality, monitor site performance, and enhance user experience. You can manage your cookie preferences through your browser settings.
                </p> */}

                {/* <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">8. Age Restrictions</h2>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                Milir is not intended for use by individuals under 13 years old. We do not knowingly collect personal data from children.
                </p> */}

                {/* <h2 className="mt-16 text-3xl font-bold text-gray-900 font-pj">9. Third-Party Links</h2>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                Our website may contain links to external sites. We are not responsible for the privacy practices of third-party websites.
                </p> */}
                {/* <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">Cras hendrerit porta donec tincidunt sed elit dictum tellus. Quam aenean elit pretium risus. Ullamcorper proin interdum dui amet eleifend. Justo, morbi elit amet sollicitudin eget felis amet leo.</p>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">Ac pretium tellus id ut. Netus sed consequat aliquet sed sed. Platea ac nunc ut curabitur et. In tristique montes, aenean nibh tempus viverra.</p> */}

{/* <h2 className="mt-16 text-3xl font-bold text-gray-900 font-pj">10. Changes to This Privacy Policy</h2>
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                We may update this policy periodically. The revised version will be effective as of the "Effective Date" listed above.
                </p> */}

                <h2 className="mt-12 text-3xl font-bold text-gray-900 font-pj">10. Contact Us</h2>
              
                <p className="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
                If you have questions or concerns about these Terms, please contact us:
                </p>

                <ul className="pl-5 mt-4 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
  <li>
    <span className="font-bold"> Email:</span>info@milir.com
  </li>
  <li>
    <span className="font-bold"> Website:</span>https://makerkitmilir-landingpagenew-ubtn.vercel.app/
  </li>
  {/* <li>Offer customer support and resolve user issues in real-time</li> */}
  {/* <li>Personalize communications and outreach</li> 
  <li>Process payments for subscriptions</li>  */}
</ul>
            </div>
        </div>
    </div>
</section>
  );
}

export default Terms;
