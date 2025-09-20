import { Home, Wrench, Building, Droplets, Sun, Shield, Zap, FileText } from 'lucide-react'

export function Services() {
  const coreServices = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes including installation, replacement, and maintenance.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364523775-0.webp",
      features: ["New Installations", "Roof Replacements", "Maintenance", "Storm Damage"]
    },
    {
      icon: Wrench,
      title: "Roof Repairs",
      description: "Fast and reliable roof repair services for leaks, storm damage, and wear & tear.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364524151-0.webp",
      features: ["Leak Detection", "Shingle Replacement", "Flashing Repair", "24/7 Emergency"]
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Professional commercial roofing services for businesses and industrial properties.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364526252-0.webp",
      features: ["Flat Roofing", "EPDM Systems", "TPO Installation", "Maintenance Plans"]
    },
    {
      icon: Droplets,
      title: "Gutters & Downpipes",
      description: "Complete gutter system installation, cleaning, and maintenance services.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364524151-0.webp",
      features: ["Gutter Installation", "Cleaning Service", "Downpipe Repair", "Leaf Guards"]
    }
  ]

  const specialtyServices = [
    {
      icon: Sun,
      title: "Skylight Installation",
      description: "Professional skylight installation and replacement to bring natural light into your home.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364530490-0.webp",
      price: "From $899"
    },
    {
      icon: Shield,
      title: "Roof Insulation",
      description: "High-quality insulation services to improve energy efficiency and comfort.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364523775-0.webp",
      price: "From $1,299"
    },
    {
      icon: Zap,
      title: "Solar Panel Integration",
      description: "Seamless integration of solar panels with your roofing system for energy efficiency.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364524151-0.webp",
      price: "Custom Quote"
    },
    {
      icon: FileText,
      title: "Roof Ventilation Systems",
      description: "Advanced ventilation solutions to improve air circulation and energy efficiency.",
      image: "https://storage.googleapis.com/blink-core-storage/projects/reliable-roofing-solutions-website-zqr94aeq/images/generated-image-1758364526252-0.webp",
      price: "From $599"
    }
  ]

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive roofing solutions backed by decades of experience and quality craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-200 rounded-xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                    Get Quote
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Specialty Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Specialty Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized roofing services to enhance your property's functionality and value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialtyServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-200 rounded-xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="w-full btn-primary py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-200 font-semibold">
                    Book Service
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}