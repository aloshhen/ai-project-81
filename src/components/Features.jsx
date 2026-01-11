import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Map, Package, Calendar, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Our optimized routes ensure your cargo arrives faster than industry standards."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Safe Transport",
      description: "Modern trucks with advanced safety features and professional drivers."
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Nationwide Coverage",
      description: "We serve all major cities and regions across the country."
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Various Cargo Types",
      description: "From small packages to oversized loads - we handle all types of cargo."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Flexible Scheduling",
      description: "24/7 operations with flexible pickup and delivery times."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Dedicated Support",
      description: "Personal manager assigned to each shipment for smooth coordination."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose <span className="text-primary">TruckExpress</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide premium transportation services with focus on reliability and customer satisfaction.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-8 bg-gray-50 hover:bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}