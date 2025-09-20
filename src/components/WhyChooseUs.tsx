import { Award, Heart, Home, CheckCircle, Star, Wrench, MessageSquare, Target, Play } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "A Better Roofing Experience",
      description: "We revolutionize roofing with modern approaches, cutting-edge technology, and customer-first service."
    },
    {
      icon: Heart,
      title: "Family Values, Built In",
      description: "Family-owned business with deep community roots and personal commitment to every project."
    },
    {
      icon: Home,
      title: "Generation Roofing Know-How",
      description: "Three generations of roofing expertise passed down through our family business."
    },
    {
      icon: CheckCircle,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for your complete peace of mind."
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "All work comes with our comprehensive warranty and satisfaction guarantee that you can count on."
    },
    {
      icon: Wrench,
      title: "Premium Materials",
      description: "Only the highest quality materials from trusted suppliers for lasting durability and performance."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear, honest communication throughout every step of your roofing project from start to finish."
    },
    {
      icon: Target,
      title: "Experience You Can Count On",
      description: "Over 15 years serving Auckland with consistent excellence, reliability, and professional service."
    },
    {
      icon: Play,
      title: "Delivery & Logistics",
      description: "We coordinate timely delivery of materials and manage logistics so projects start on schedule."
    }
  ]

  return (
    <>
      <div className="py-20 relative overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--luxury-grey)) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, hsl(var(--luxury-grey)) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Reliable Roofing Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience serving Auckland, we've built our reputation on quality workmanship, 
              reliability, and exceptional customer service that spans generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, hsl(var(--luxury-grey-dark)) 1px, transparent 1px),
              linear-gradient(-45deg, hsl(var(--luxury-grey-dark)) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Watch Our Craftsmen at Work</h2>
              <p className="text-xl text-gray-700 mb-8">
                See the precision, skill, and attention to detail that goes into every Reliable Roofing Solutions project. 
                From initial assessment to final installation, we maintain the highest standards throughout.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-700">Professional installation techniques</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-700">Quality control at every step</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-700">Safety-first approach</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for video - will be replaced with actual video later */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  <img 
                    src="https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364523775-0.webp"
                    alt="Roof construction process"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 group">
                      <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 ml-1" />
                    </button>
                  </div>
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
                  Professional roof installation and replacement process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-gray-600 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contact us today for your free, no-obligation roofing assessment from Auckland's trusted roofing experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <a href="tel:+640212488722" className="border border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Call (09) 212-4887
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}