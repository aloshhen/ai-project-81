import React from 'react'
import { Truck, Phone, MapPin } from 'lucide-react'

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Truck className="text-primary h-8 w-8" />
          <span className="text-2xl font-bold text-gray-900">Truck<span className="text-primary">Express</span></span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
          <a href="#tariffs" className="text-gray-700 hover:text-primary transition-colors">Tariffs</a>
          <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors">Promotions</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-primary transition-colors">
            <Phone className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">+1 (234) 567-890</span>
          </a>
        </div>
      </div>
    </header>
  )
}