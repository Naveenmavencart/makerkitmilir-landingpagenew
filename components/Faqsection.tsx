"use client";
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'What is Milir?',
            answer: 'Milir is a SaaS tool that helps  track user engagement, and optimize free trial-to-paid conversion rates using data-driven insights and targeted promotions. <a href="#" title="" class=" text-red-500 transition-all duration-200 hover:underline">businesses manage free trials,</a>  track user engagement, and optimize free trial-to-paid conversion rates using data-driven insights and targeted promotions.',
            open: false
        },
        {
            question: 'How can Milir help me manage free trial users effectively?',
            answer: 'Milir helps you <a href="#" title="" class="text-red-500 transition-all duration-200 hover:underline">track, engage, and analyze free trial</a> users through features like dashboards, expiry reminders, and user journey insights.',
            open: false
        },
        {
            question: 'How can Milir improve my free trial-to-paid conversion rate?',
            answer: 'Milir uses engagement data to recommend <a href="#" title="" class="text-red-500 transition-all duration-200 hover:underline">optimal moments to nudge</a> users, sending targeted reminders to boost free trial to paid conversions.',
            open: false
        },
        {
            question: 'Does Milir provide targeted promotions to boost conversion rates?',
            answer: 'Milir creates data-driven,<a href="#" title="" class="text-red-500 transition-all duration-200 hover:underline">personalized promotions</a> to convert free trial users at the right time, improving your app’s free-to-paid conversion rate.',
            open: false
        },
        {
            question: 'How does session recording help in improving trial conversions?',
            answer: 'Milir’s session recording provides <a href="#" title="" class="text-red-500 transition-all duration-200 hover:underline">insights into user behavior,</a> helping you refine onboarding and improve free trial-to-paid conversions.',
            open: false
        },
        {
            question: 'What makes Milir unique compared to other free trial management tools?',
            answer: 'Milir stands out with features like <a href="#" title="" class="text-red-500 transition-all duration-200 hover:underline">Payment Method Shield, Trial Showcase,</a>and advanced engagement analytics tailored for freemium SaaS models.',
            open: false
        },
        
    ]);

    const toggleFaq = (index: number) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                return { ...item, open: !item.open };
            }
            return { ...item, open: false };
        }));
    };
    
    
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p> */}
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p> */}
            </div>
        </section>
    );
}

export default Faq;