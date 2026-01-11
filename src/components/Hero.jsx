import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Truck, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'

export default function Hero() {
  useEffect(() => {
    gsap.from('.hero-truck', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    
    gsap.from('.hero-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Fast & Reliable <span className="text-secondary">Truck</span> Transportation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 max-w-lg"
            >
              We deliver your cargo safely and on time across the country with our modern fleet and professional drivers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary flex items-center">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </motion.div>
          </div>
          
          <div className="hero-truck">
            <img 
              src="https://source.unsplash.com/800x600/?truck,transport" 
              alt="Truck" 
              className="rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>
    </section>
  )
}