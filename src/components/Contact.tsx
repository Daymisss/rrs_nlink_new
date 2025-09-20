import { Phone, Mail, MapPin, Clock, Shield, Award, Star, Users } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your home or business? Contact our expert team for a free consultation and personalized roofing solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-lg text-blue-600 font-medium">+64 21 248 8722</div>
                    <div className="text-sm text-gray-600">24/7 Emergency Service Available</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-lg text-blue-600 font-medium">info@reliableroofing.co.nz</div>
                    <div className="text-sm text-gray-600">Free estimates & consultations</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Service Areas</div>
                    <div className="text-lg text-gray-900 font-medium">Auckland & North Island</div>
                    <div className="text-sm text-gray-600">Serving residential & commercial properties</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="space-y-1 text-gray-900">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea 
                  placeholder="Tell us about your roofing needs..." 
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Company Details & Credentials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Company Details</h3>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8" />
                  <div>
                    <h4 className="text-2xl font-bold">Reliable Roofing Solutions</h4>
                    <p className="text-blue-100">Your Trusted Roofing Partner</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="font-bold text-2xl">25+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="font-bold text-2xl">5000+</div>
                    <div className="text-sm text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="font-bold text-2xl">100%</div>
                    <div className="text-sm text-blue-100">Customer Satisfaction</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="font-bold text-2xl">24/7</div>
                    <div className="text-sm text-blue-100">Emergency Service</div>
                  </div>
                </div>
              </div>

              {/* Certifications & Credentials */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-600">Fully licensed roofing contractor with comprehensive insurance coverage</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-900">5-Star Rated</div>
                    <div className="text-sm text-gray-600">Consistently rated 5 stars by customers across all platforms</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Master Builders Member</div>
                    <div className="text-sm text-gray-600">Certified member of Master Builders Association</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">WorkSafe Certified</div>
                    <div className="text-sm text-gray-600">Compliant with all WorkSafe NZ safety standards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Guarantee */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Our Service Guarantee</h4>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Free, no-obligation consultations and estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>10-year workmanship warranty on all installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Emergency response within 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Clean-up and debris removal included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>100% satisfaction guarantee or money back</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}