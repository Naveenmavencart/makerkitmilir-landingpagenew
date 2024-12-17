"use client";
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: "What is Milir?",
            answer: 'Milir is a SaaS tool that helps businesses manage free trials, <span class="text-red-500">track user engagement</span>, and optimize free trial-to-paid conversion rates using data-driven insights and targeted promotions.',
            open: false,
        },
        {
            question: "How can Milir help me manage free trial users effectively?",
            answer: 'Milir helps you <span class="text-red-500">track, engage, and analyze free trial</span> users through features like dashboards, expiry reminders, and user journey insights.',
            open: false,
        },
        {
            question: "How can Milir improve my free trial-to-paid conversion rate?",
            answer: 'Milir uses engagement data to recommend <span class="text-red-500">optimal moments to nudge</span> users, sending targeted reminders to boost free trial to paid conversions.',
            open: false,
        },
        {
            question: "Does Milir provide targeted promotions to boost conversion rates?",
            answer: 'Milir creates data-driven, <span class="text-red-500">personalized promotions</span> to convert free trial users at the right time, improving your app’s free-to-paid conversion rate.',
            open: false,
        },
        {
            question: "How does session recording help in improving trial conversions?",
            answer: 'Milir’s session recording provides <span class="text-red-500">insights into user behavior</span>, helping you refine onboarding and improve free trial-to-paid conversions.',
            open: false,
        },
        {
            question: "What makes Milir unique compared to other free trial management tools?",
            answer: 'Milir stands out with features like <span class="text-red-500">Payment Method Shield, Trial Showcase,</span> and advanced engagement analytics tailored for freemium SaaS models.',
            open: false,
        },
    ]);

    const toggleFaq = (index: number) => {
        setFaq(faq.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false, // Only toggle the clicked FAQ
        })));
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${item.open ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                    item.open ? 'max-h-screen' : 'max-h-0'
                                }`}
                            >
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;