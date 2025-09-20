import { useState } from 'react'
import NavBar from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { PartnersSection } from './components/PartnersSection'
import { BookingForm } from './components/BookingForm'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)

  const handleBookNow = () => {
    setSelectedService(undefined)
    setSelectedCategory(undefined)
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
    setSelectedService(undefined)
    setSelectedCategory(undefined)
  }

  const openBookingWithService = (serviceTitle: string, category?: string) => {
    setSelectedService(serviceTitle)
    setSelectedCategory(category)
    setIsBookingOpen(true)
    // Ensure modal is visible on small viewports
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero onBookNow={handleBookNow} />
      <Services onRequestBooking={openBookingWithService} />
      <WhyChooseUs />
      <PartnersSection />
      <Contact />
      <Footer />
      
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialService={selectedService}
        initialCategory={selectedCategory}
      />
      
      {/* Floating CTA Button */}
      <button
        onClick={handleBookNow}
        className="fixed bottom-6 right-6 btn-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold z-40"
      >
        Book Now
      </button>
    </div>
  )
}

export default App