"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Converting Free Trial Users <span className="text-[#FF4958]">Into Loyal Customers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Turn freemium SaaS users into paid customers with tactical conversion insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-[#FF4958] text-white hover:bg-[#FF6B77] text-lg px-8 py-4 rounded-md shadow-md transition-all duration-300">
              Start Free Trial
            </Button>
            
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Image
              src="/images/Milirpage.jpg"
              alt="SaaS Analytics Dashboard"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF4958] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF4958] rounded-full opacity-20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}