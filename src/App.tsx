import { useState } from 'react'
import NavBar from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { PartnersSection } from './components/PartnersSection'
import { BookingForm } from './components/BookingForm'
import { Footer } from './components/Footer'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookNow = () => {
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero onBookNow={handleBookNow} />
      <Services />
      <WhyChooseUs />
      <PartnersSection />
      <Footer />
      
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
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