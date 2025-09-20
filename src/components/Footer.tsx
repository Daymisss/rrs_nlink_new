import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Reliable Roofing Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for all roofing needs. Licensed, insured, and committed to excellence with 25+ years of experience.
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-600 px-4 py-2 rounded-lg text-center">
                <div className="font-bold text-lg">25+</div>
                <div className="text-xs text-blue-200">Years</div>
              </div>
              <div className="bg-blue-600 px-4 py-2 rounded-lg text-center">
                <div className="font-bold text-lg">5K+</div>
                <div className="text-xs text-blue-200">Projects</div>
              </div>
              <div className="bg-blue-600 px-4 py-2 rounded-lg text-center">
                <div className="font-bold text-lg">100%</div>
                <div className="text-xs text-blue-200">Satisfied</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-medium">(555) 123-4567</div>
                  <div className="text-sm text-gray-300">24/7 Emergency Line</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-medium">info@reliableroofing.com</div>
                  <div className="text-sm text-gray-300">Free Estimates</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-medium">123 Main Street</div>
                  <div className="text-sm text-gray-300">Your City, ST 12345</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">Monday - Friday</div>
                  <div className="text-sm text-gray-300">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">Saturday</div>
                  <div className="text-sm text-gray-300">9:00 AM - 4:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">Emergency Service</div>
                  <div className="text-sm text-gray-300">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Reliable Roofing Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>BBB A+ Rated</span>
              <span>•</span>
              <span>Free Estimates</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}