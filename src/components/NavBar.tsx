import React, { useEffect, useState } from 'react'
export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const selector = '#home, #services, #about, #gallery, #contact'
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id || 'home')
          }
        })
      },
      { threshold: 0.4 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
  }

  return (
    <div className="floating-nav">
      <div className="flex items-center justify-between w-full relative z-10">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#0F172A] text-white px-3 py-1 rounded text-sm font-bold">
            RRS
          </div>
          <div>
            <div className="text-lg font-semibold text-white leading-tight">
              Reliable Roofing
            </div>
            <div className="text-sm text-gray-300 leading-tight">Solutions</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-white">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`hover:text-gray-100 transition-colors ${activeId === 'home' ? 'text-white underline' : ''}`}>
            Home
          </a>

          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`hover:text-gray-100 transition-colors ${activeId === 'services' ? 'text-white underline' : ''}`}>
            Services
          </a>

          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`hover:text-gray-100 transition-colors ${activeId === 'about' ? 'text-white underline' : ''}`}>
            About
          </a>

          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`hover:text-gray-100 transition-colors ${activeId === 'contact' ? 'text-white underline' : ''}`}>
            Contact
          </a>
        </nav>

        {/* Contact & CTA (normal) */}
        <div className="flex items-center gap-4 text-lg text-white">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V21a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 016.12 14.9a19.86 19.86 0 01-3.07-8.67A2 2 0 015.11 4h4.09a2 2 0 012 1.72c.127 1.204.335 2.394.62 3.57a2 2 0 01-.45 2.11L9.09 13.91a16 16 0 007 7l2.47-2.28a2 2 0 012.11-.45c1.176.285 2.366.493 3.57.62A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="tel:+64212488722" className="hover:underline font-medium text-white">+64 21 248 8722</a>
          </div>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-5 py-3 bg-[#0F172A] text-white rounded-lg text-lg font-semibold hover:bg-[#111827] transition-colors">
            Free Quote
          </a>
        </div>
      </div>
    </div>
  )
}