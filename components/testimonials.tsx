// import { Card, CardContent } from '@/components/ui/card'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Product Manager at TechCorp",
//     content: "Milir has revolutionized our approach t converting free trial users. The insights we've gained are invaluable.",
//     avatar: "/placeholder.svg?height=40&width=40"
//   },
//   {
//     name: "Michael Chen",
//     role: "CEO of StartupX",
//     content: "Thanks to Milir, our conversion rates have skyrocketed. It's an essential tool for any SaaS business.",
//     avatar: "/placeholder.svg?height=40&width=40"
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Customer Success Lead at SaaSPro",
//     content: "The user journey insights provided by Milir have helped us create a much more engaging onboarding experience.",
//     avatar: "/placeholder.svg?height=40&width=40"
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section className="w-full bg-[#F8FAFC] py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">
//           What Our Customers Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="animate-fade-in">
//               <CardContent className="p-6">
//                 <p className="text-[#64748B] mb-4">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <Avatar className="mr-4"><AvatarImage src={testimonial.avatar} alt={testimonial.name} />
//                     <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
//                     <p className="text-sm text-[#64748B]">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

