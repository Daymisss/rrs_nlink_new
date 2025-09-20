export function PartnersSection() {
  const partners = [
    { 
      name: 'Dimond Roofing', 
      description: 'Premium roofing solutions', 
      website: 'https://www.dimond.co.nz',
      logo: '/partners/dimond-roofing.svg'
    },
    { 
      name: 'Konnect Fastening', 
      description: 'Fastening systems', 
      website: 'https://www.konnectfastening.com',
      logo: '/partners/konnect-fastening.svg'
    },
    { 
      name: 'Stronghold Fasteners', 
      description: 'Quality fasteners', 
      website: 'https://www.strongholdfasteners.com',
      logo: '/partners/stronghold-fasteners.svg'
    },
    { 
      name: 'Bunnings', 
      description: 'Building supplies', 
      website: 'https://www.bunnings.co.nz',
      logo: '/partners/bunnings.svg'
    },
    { 
      name: 'ColorSteel', 
      description: 'Steel roofing solutions', 
      website: 'https://www.colorsteel.co.nz',
      logo: '/partners/colorsteel.svg'
    },
    { 
      name: 'ColorCote', 
      description: 'Coating solutions', 
      website: 'https://www.colorcote.co.nz',
      logo: '/partners/colorcote.svg'
    },
    { 
      name: 'VELUX', 
      description: 'Skylight specialists', 
      website: 'https://www.velux.co.nz',
      logo: '/partners/velux.svg'
    },
    { 
      name: 'Site Safe', 
      description: 'Construction safety', 
      website: 'https://www.sitesafe.org.nz',
      logo: '/partners/site-safe.svg'
    },
    { 
      name: 'Mitre 10', 
      description: 'Building supplies', 
      website: 'https://www.mitre10.co.nz',
      logo: '/partners/mitre10.svg'
    },
    { 
      name: 'WorkSafe NZ', 
      description: 'Safety & compliance', 
      website: 'https://www.worksafe.govt.nz',
      logo: '/partners/worksafe-nz.svg'
    },
    { 
      name: 'BRANZ', 
      description: 'Building research', 
      website: 'https://www.branz.co.nz',
      logo: '/partners/branz.svg'
    },
    { 
      name: 'PlaceMakers', 
      description: 'Building supplies', 
      website: 'https://www.placemakers.co.nz',
      logo: '/partners/placemakers.svg'
    },
    { 
      name: 'Winstone Wallboards', 
      description: 'Building materials', 
      website: 'https://www.gib.co.nz',
      logo: '/partners/winstone-wallboards.svg'
    },
    { 
      name: 'James Hardie', 
      description: 'Building products', 
      website: 'https://www.jameshardie.co.nz',
      logo: '/partners/james-hardie.svg'
    },
    { 
      name: 'Altus', 
      description: 'Building materials', 
      website: 'https://www.altus.co.nz',
      logo: '/partners/altus.svg'
    }
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
              <div className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-gray-200 transition-all duration-300">
                <div className="h-12 flex items-center justify-center">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const textSpan = target.nextElementSibling as HTMLSpanElement;
                        if (textSpan) textSpan.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span className="text-gray-600 font-bold text-sm group-hover:text-gray-800 transition-colors" style={{ display: partner.logo ? 'none' : 'block' }}>
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