export function PartnersSection() {
  const partners = [
    { name: "Diamond Roofing", logo: "💎" },
    { name: "KONNECT", logo: "🔗" },
    { name: "Stronghold Partners", logo: "🏗️" },
    { name: "Bunnings Warehouse", logo: "🏪" },
    { name: "ColorSteel", logo: "🎨" },
    { name: "ColorCote", logo: "✨" },
    { name: "VELUX", logo: "🪟" },
    { name: "Master Builders", logo: "👷" },
    { name: "Roofing NZ", logo: "🏠" },
    { name: "Skills", logo: "⚡" },
    { name: "Licensed Builders", logo: "🔧" },
    { name: "Site Safe", logo: "🦺" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--luxury-grey)) 2px, transparent 2px),
            radial-gradient(circle at 80% 50%, hsl(var(--luxury-grey)) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading suppliers and organizations to ensure 
            the highest quality materials and professional standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality You Can Trust</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our partnerships with New Zealand's leading roofing suppliers and industry bodies 
              ensure we deliver only the best materials and maintain the highest professional standards. 
              From premium ColorSteel products to VELUX skylights, we source quality materials that last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}