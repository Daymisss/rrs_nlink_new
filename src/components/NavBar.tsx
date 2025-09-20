import React from 'react'

export default function NavBar() {
  return (
    <div className="floating-nav">
      <div className="flex items-center justify-between w-full relative z-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-bold">
            RRS
          </div>
          <div>
            <div className="text-sm font-medium text-gray-800 leading-tight">
              Reliable Roofing
            </div>
            <div className="text-xs text-gray-500 leading-tight">
              Solutions
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Contact & CTA */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V21a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 016.12 14.9a19.86 19.86 0 01-3.07-8.67A2 2 0 015.11 4h4.09a2 2 0 012 1.72c.127 1.204.335 2.394.62 3.57a2 2 0 01-.45 2.11L9.09 13.91a16 16 0 007 7l2.47-2.28a2 2 0 012.11-.45c1.176.285 2.366.493 3.57.62A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+64 9 123 4567</span>
          </div>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            Free Quote
          </button>
        </div>
      </div>
    </div>
  )
}
