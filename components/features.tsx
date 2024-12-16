import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart2, Shield, Users } from 'lucide-react'

const features = [
  {
    title: "Get Free Trial User Insights",
    description: "Businesses can provide daily breakdowns of user behavior for product managers to detect conversion drivers and drop-off points.",
    icon: BarChart2
  },
  {
    title: "Proactively Resolve Issues",
    description: "Businesses can empower customer success managers to identify and resolve real-time issues in the user experience journey.",
    icon: Shield
  },
  {
    title: "Engage to Boost Customer Loyalty",
    description: "Businesses can personalize outreach and support for users to feel truly valued, which strengthens customer relationships.",
    icon: Users
  }
]

export default function Features() {
  return (
    <section id="why us" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">
          Supercharge Freemium<br />Conversion with Milir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-slide-in">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-[#FF4958] mb-4" />
                <CardTitle className="text-xl font-semibold text-[#0F172A]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#64748B]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

