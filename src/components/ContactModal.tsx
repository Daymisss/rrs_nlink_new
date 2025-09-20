import React, { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now just close and clear — booking persistence handled elsewhere
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[hsl(var(--luxury-grey-light)/0.75)] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-[95%] max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white/95 border border-[hsl(var(--border)/0.6)]">
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Left: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-[#2563EB]">Get Your Free Quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">Fill out the form and our team will get back to you promptly.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="input" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="input" type="email" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="input" />
                <select className="input" defaultValue="Residential Roofing">
                  <option>Residential Roofing</option>
                  <option>Roof Repairs</option>
                  <option>Commercial Roofing</option>
                  <option>Gutters &amp; Downpipes</option>
                  <option>Skylight Installation</option>
                  <option>Roof Insulation</option>
                </select>
              </div>

              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Project details" className="input h-28" />

              <div className="flex items-center gap-3">
                <button type="submit" className="btn-primary">Send Message</button>
                <button type="button" onClick={onClose} className="btn-secondary">Close</button>
              </div>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="pl-2">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <p className="mt-2 text-sm text-muted-foreground">We're here to help with all your roofing needs. Call or email us for fast quotes and emergency support.</p>

            <div className="mt-6 space-y-4">
              <div className="card p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F0FF] flex items-center justify-center text-[#2563EB]">📞</div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+64 21 248 8722</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F0FF] flex items-center justify-center text-[#2563EB]">✉️</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">info@reliableroofing.co.nz</div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F0FF] flex items-center justify-center text-[#2563EB]">📍</div>
                  <div>
                    <div className="font-medium">Service Area</div>
                    <div className="text-sm text-muted-foreground">Auckland and surrounding areas</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Close X */}
        <button onClick={onClose} aria-label="Close contact modal" className="absolute top-3 right-3 text-muted-foreground hover:text-gray-800">
          ✕
        </button>
      </div>
    </div>
  )
}
