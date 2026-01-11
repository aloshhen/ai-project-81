import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Tariffs from './components/Tariffs'
import Promotions from './components/Promotions'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <Tariffs />
      <Promotions />
      <Contact />
      <Footer />
    </div>
  )
}