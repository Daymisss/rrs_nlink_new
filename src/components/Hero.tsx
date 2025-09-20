import { Phone, Star } from 'lucide-react'

function RoofIcon({ className = 'h-8 w-8 text-gray-300' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2 10L12 3L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11V18H19V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero({ onBookNow }: { onBookNow: () => void }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <RoofIcon />
              <span className="text-xl font-semibold">Reliable Roofing Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Roofing Services You Can
              <span className="text-gray-300 block">Trust</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              From residential repairs to commercial installations, we deliver quality roofing solutions 
              with 25+ years of experience. Licensed, insured, and guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={onBookNow}
                className="btn-primary text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Book Free Estimate
              </button>
              <a href="tel:+640212488722" className="btn-secondary text-lg px-8 py-4 rounded-xl font-semibold bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">25+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">5000+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-300 text-sm">5-Star Rating</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Estimate</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-1">Service Type</div>
                    <div className="font-semibold">Residential Roofing</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-1">Response Time</div>
                    <div className="font-semibold">Within 24 Hours</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-1">Free Estimate</div>
                    <div className="font-semibold">No Obligation</div>
                  </div>
                </div>
                <button 
                  onClick={onBookNow}
                  className="w-full mt-6 bg-white text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}