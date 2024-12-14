"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    features: [
      { name: "Number of users", value: "Up to 1,500" },
      { name: "Calendar-based user journey tracking", included: true },
      { name: "Easy session recording and playback", included: true },
      { name: "Feature and behavior analytics", value: "Basic" },
      { name: "Live onboarding", value: "Basic setup" },
      { name: "Enhanced product insights", included: false },
      { name: "Live chat support", included: true },
      { name: "On call support", included: true },
    ]
  },
  {
    name: "Growth",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    features: [
      { name: "Number of users", value: "Unlimited" },
      { name: "Calendar-based user journey tracking", included: true },
      { name: "Easy session recording and playback", included: true },
      { name: "Feature and behavior analytics", value: "Advanced" },
      { name: "Live onboarding", value: "Personalized setup" },
      { name: "Enhanced product insights", included: true },
      { name: "Live chat support", included: true },
      { name: "On call support", included: true },
    ]
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const renderFeatureValue = (feature: { included?: boolean; value?: string }) => {
    if (feature.included !== undefined) {
      return feature.included ? (
        <Check className="text-green-500 mx-auto" />
      ) : (
        <X className="text-red-500 mx-auto" />
      )
    }
    return <span className="text-[#0F172A] font-semibold">{feature.value}</span>
  }

  return (
    <section id="pricing" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">Pricing</h2>
        <div className="flex justify-center items-center mb-8">
          <span className={`mr-2 ${isYearly ? 'text-[#64748B]' : 'text-[#0F172A] font-semibold'}`}>Monthly</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className={`ml-2 ${isYearly ? 'text-[#0F172A] font-semibold' : 'text-[#64748B]'}`}>Yearly</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="p-4 text-left text-[#0F172A] font-semibold">Feature</th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-4 text-center text-[#0F172A] font-semibold">
                    {plan.name}<br />
                    <span className="text-[#FF4958] text-2xl">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-[#64748B]">/{isYearly ? 'year' : 'month'}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feature, featureIndex) => (
                <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                  <td className="p-4 text-[#0F172A]">{feature.name}</td>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex} className="p-4 text-center">
                      {renderFeatureValue(plan.features[featureIndex])}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4"></td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">
                    <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77]">
                      Get Started
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

