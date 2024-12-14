import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const benefits = [
  "Extremely cost-effective solution",
  "7-day free trial with full access",
  "In-depth SaaS experience and expertise",
  "24/7/365 dedicated customer support"
]

export default function CTA() {
  return (
    <section className="w-full bg-[#E6F3F2] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#54ACA7] mb-8 text-center">
          Converting Free Trial Users<br />Made Super Easy
        </h2>
        <div className="max-w-3xl mx-auto mb-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-800 bg-white p-4 rounded-lg shadow-md">
                <Check className="mr-2 flex-shrink-0 text-[#54ACA7]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <Button className="bg-[#FF4958] hover:bg-[#54ACA7] text-white text-lg px-8 py-4 rounded-md transition-colors duration-300">
            Start Your Free Trial Now
          </Button>
          <p className="text-[#54ACA7] mt-4 text-sm font-medium">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}

