import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Truck, Percent, CalendarClock } from 'lucide-react'
import { gsap } from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Promotions() {
  const promotions = [
    {
      title: "Summer Special",
      description: "15% discount on all shipments booked in July and August",
      icon: <Percent className="h-8 w-8 text-primary" />,
      image: "https://source.unsplash.com/800x600/?summer,truck"
    },
    {
      title: "New Customer Offer",
      description: "First shipment at 20% off for new customers",
      icon: <Truck className="h-8 w-8 text-primary" />,
      image: "https://source.unsplash.com/800x600/?truck,road"
    },
    {
      title: "Recurring Shipment",
      description: "10% discount for customers with monthly shipments",
      icon: <CalendarClock className="h-8 w-8 text-primary" />,
      image: "https://source.unsplash.com/800x600/?calendar,transport"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="promotions">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current <span className="text-primary">Promotions</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Take advantage of our special offers and save on your transportation costs.</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            className="promotion-slider"
          >
            {promotions.map((promo, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <div className="card h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={promo.image} 
                        alt={promo.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">
                          {promo.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{promo.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{promo.description}</p>
                      <button className="btn-secondary w-full">
                        Claim Offer
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}