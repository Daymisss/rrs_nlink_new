export function PartnersSection() {
  // Recommended: replace logoUrl with real partner logo public URLs or upload them to /public/partners
  const partners = [
    { name: 'Mitre 10', description: 'Building supplies', website: 'https://www.mitre10.co.nz' },
    { name: 'Bunnings NZ', description: 'Building supplies', website: 'https://www.bunnings.co.nz' },
    { name: 'ColorSteel', description: 'Steel roofing solutions', website: 'https://www.colorsteel.co.nz' },
    { name: 'VELUX', description: 'Skylight specialists', website: 'https://www.velux.co.nz' },
    { name: 'Master Builders', description: 'Industry association', website: 'https://www.masterbuilders.org.nz' },
    { name: 'WorkSafe NZ', description: 'Safety & compliance', website: 'https://www.worksafe.govt.nz' },
    { name: 'BRANZ', description: 'Building research', website: 'https://www.branz.co.nz' },
    { name: 'ColorCote', description: 'Protective coatings', website: 'https://www.colorcote.co.nz' },
    { name: 'VELSITE', description: 'Site services', website: '#' },
    { name: 'Roof Makers', description: 'Quality installations', website: '#' },
    { name: 'Site Safe', description: 'Construction safety', website: 'https://www.sitesafe.org.nz' },
    { name: 'Local Suppliers', description: 'Regional suppliers', website: '#' }
  ]

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-gray-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with New Zealand's leading suppliers and industry professionals to ensure 
            the highest quality materials and standards in every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-colors duration-300">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-lg group-hover:text-gray-800 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Certified and approved by New Zealand's top building and safety organizations
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Licensed Building Practitioners
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              WorkSafe NZ Certified
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Master Builders Member
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}