import React from 'react'
import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const links = [
    { title: "Services", items: ["Standard Shipping", "Express Delivery", "Heavy Load", "Warehousing"] },
    { title: "Company", items: ["About Us", "Careers", "Blog", "Press"] },
    { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Shipping Policy", "FAQ"] }
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "#" },
    { icon: <Twitter className="h-5 w-5" />, url: "#" },
    { icon: <Instagram className="h-5 w-5" />, url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#" }
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Truck className="text-primary h-8 w-8" />
              <span className="text-2xl font-bold">Truck<span className="text-primary">Express</span></span>
            </div>
            <p className="text-gray-300 mb-6">Professional cargo transportation services with reliability and care.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {links.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left md:flex justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} TruckExpress. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Shipping Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}