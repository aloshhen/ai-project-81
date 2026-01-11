import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

export default function Tariffs() {
  const [expandedTariff, setExpandedTariff] = useState(null)
  
  const tariffs = [
    {
      id: 1,
      name: "Standard",
      price: "$1.50/mile",
      description: "Basic transportation for regular cargo",
      details: [
        "Up to 10,000 lbs",
        "48-72 hour delivery",
        "Basic insurance coverage",
        "Standard tracking"
      ],
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      id: 2,
      name: "Express",
      price: "$2.20/mile",
      description: "Faster delivery for time-sensitive shipments",
      details: [
        "Up to 8,000 lbs",
        "24-48 hour delivery",
        "Enhanced insurance",
        "Real-time tracking",
        "Priority loading/unloading"
      ],
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      id: 3,
      name: "Heavy Load",
      price: "$2.80/mile",
      description: "Specialized transport for oversized cargo",
      details: [
        "Up to 40,000 lbs",
        "72-96 hour delivery",
        "Full insurance coverage",
        "Special permits included",
        "Escort vehicles if needed"
      ],
      icon: <Package className="h-6 w-6 text-primary" />
    }
  ]

  const toggleTariff = (id) => {
    setExpandedTariff(expandedTariff === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="tariffs">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent <span className="text-primary">Pricing</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Competitive rates with no hidden fees. Get an instant quote for your shipment.</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {tariffs.map((tariff) => (
            <motion.div 
              key={tariff.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: tariff.id * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 overflow-hidden"
            >
              <div 
                className="flex justify-between items-center p-6 bg-white rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => toggleTariff(tariff.id)}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    {tariff.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{tariff.name}</h3>
                    <p className="text-gray-600">{tariff.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-xl font-bold text-primary mr-4">{tariff.price}</span>
                  {expandedTariff === tariff.id ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </div>
              </div>
              
              {expandedTariff === tariff.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 border-t border-gray-100 rounded-b-xl overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <ul className="space-y-3 mb-6">
                      {tariff.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-primary mt-0.5">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn-primary flex items-center w-full justify-center">
                      Select Plan <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}