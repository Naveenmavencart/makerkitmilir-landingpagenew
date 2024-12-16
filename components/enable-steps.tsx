// "use client"

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
// import { Search, LineChart, UserPlus, Play } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import React from 'react'
// import Image from 'next/image'

// const steps = [
//   {
//     title: "Easily Track User Actions",
//     description: "Examine free trial user interactions to understand engagement patterns during the trial period.",
//     icon: Search,
//     color: "bg-blue-100 text-blue-600",
//     image: "/images/user.png"
//   },
//   {
//     title: "Quickly Unearth User Insights",
//     description: "Analyze user behavior to optimize customer experiences and improve free trial conversion strategies.",
//     icon: LineChart,
//     color: "bg-green-100 text-green-600",
//     image: "/images/unearth.png"
//   },
//   {
//     title: "Analyze Individual Journeys",
//     description: "Explore individual user actions for targeted interventions and personalized customer engagement.",
//     icon: UserPlus,
//     color: "bg-purple-100 text-purple-600",
//     image: "/images/analyse.png"
//   },
//   {
//     title: "Leverage User Session Replays",
//     description: "Assess free trial user interactions to resolve issues in real time and refine product features.",
//     icon: Play,
//     color: "bg-orange-100 text-orange-600",
//     image: "/images/leverage.png"
//   }
// ]

// export default function EnableSteps() {
//   const [currentStep, setCurrentStep] = useState(0)

//   const nextStep = () => {
//     setCurrentStep((prev) => (prev + 1) % steps.length)
//   }

//   const prevStep = () => {
//     setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
//   }

//   return (
//     <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] min-h-screen flex flex-col justify-center py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-6">
//           Enable SaaS Free Trial Conversion in a Few Steps
//         </h2>
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between mb-4">
//             {steps.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-1/4 h-1.5 ${
//                   index <= currentStep ? 'bg-[#FF4958]' : 'bg-gray-200'
//                 } ${index === 0 ? 'rounded-l-full' : ''} ${
//                   index === steps.length - 1 ? 'rounded-r-full' : ''
//                 }`}
//               />
//             ))}
//           </div>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentStep}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="mb-4 overflow-hidden bg-white/50 backdrop-blur-sm">
//                 <CardContent className="p-6">
//                   <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
//                     <div className="w-full lg:w-2/3">
//                       <div className="relative w-full aspect-[1080/500] rounded-lg overflow-hidden">
//                         <Image
//                           src={steps[currentStep].image}
//                           alt={steps[currentStep].title}
//                           fill
//                           className="object-cover shadow-lg"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-full lg:w-1/3">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className={`w-10 h-10 rounded-lg ${steps[currentStep].color} flex items-center justify-center shrink-0`}>
//                           {React.createElement(steps[currentStep].icon, { className: "w-5 h-5" })}
//                         </div>
//                         <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">
//                           {steps[currentStep].title}
//                         </h3>
//                       </div>
//                       <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
//                         {steps[currentStep].description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </AnimatePresence>
//           <div className="flex justify-between px-2">
//             <Button 
//               onClick={prevStep} 
//               variant="outline"
//               className="text-sm md:text-base font-medium px-4 py-2 h-auto"
//             >
//               Previous
//             </Button>
//             <Button 
//               onClick={nextStep} 
//               className="bg-[#FF4958] text-white hover:bg-[#FF6B77] text-sm md:text-base font-medium px-4 py-2 h-auto"
//             >
//               {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, LineChart, UserPlus, Play, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const steps = [
  {
    title: "Easily Track User Actions",
    description: "Examine free trial user interactions to understand engagement patterns during the trial period.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
    image: "/images/user.png"
  },
  {
    title: "Quickly Unearth User Insights",
    description: "Analyze user behavior to optimize customer experiences and improve free trial conversion strategies.",
    icon: LineChart,
    color: "bg-green-100 text-green-600",
    image: "/images/unearth.png"
  },
  {
    title: "Analyze Individual Journeys",
    description: "Explore individual user actions for targeted interventions and personalized customer engagement.",
    icon: UserPlus,
    color: "bg-purple-100 text-purple-600",
    image: "/images/analyse.png"
  },
  {
    title: "Leverage User Session Replays",
    description: "Assess free trial user interactions to resolve issues in real time and refine product features.",
    icon: Play,
    color: "bg-orange-100 text-orange-600",
    image: "/images/leverage.png"
  }
]

export default function EnableSteps() {
  const [currentStep, setCurrentStep] = useState(3)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section id="how-it-works" className="w-full bg-white min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1a1a1a] mb-12">
          Enable SaaS Free Trial Conversion in a Few Steps
        </h1>
        
        <div className="relative mb-12">
          <div className="h-2 bg-gray-200 rounded-full mb-8">
            <div 
              className="h-full bg-[#FFC7CB] rounded-full transition-all duration-300 ease-in-out" 
              style={{ 
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }} 
            />
          </div>
          <div className="absolute top-0 left-0 right-0">
            <div className="flex justify-between items-center">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white 
                    ${index <= currentStep ? 'bg-[#FF4958]' : 'bg-gray-200'}`}
                  style={{ boxShadow: '0 0 0 4px white' }}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <div className={`w-full h-full ${index === currentStep ? 'bg-[#FFC7CB]' : 'bg-gray-200'} rounded-full`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="mb-8 overflow-hidden bg-white rounded-3xl border shadow-lg">
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-8"
              >
                <div className="w-full lg:w-2/3">
                  <div className="relative w-full" style={{ paddingBottom: "46.3%" }}>
                    <Image
                      src={steps[currentStep].image}
                      alt={steps[currentStep].title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {steps[currentStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>

        <div className="flex justify-between px-4">
          <Button
            onClick={prevStep}
            variant="outline"
            className="text-base font-medium px-8 py-3 h-auto rounded-full border-2 hover:bg-gray-50"
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            className="bg-[#FF4958] text-white hover:bg-[#ff3545] text-base font-medium px-8 py-3 h-auto rounded-full"
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </section>
  )
}

