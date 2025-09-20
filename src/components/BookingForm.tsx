import { useState } from 'react'
import { X, Calendar, Clock, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react'
import { blink } from '../blink/client'

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    serviceCategory: 'core',
    appointmentDate: '',
    appointmentTime: '',
    additionalNotes: ''
  })

  const coreServices = [
    'Residential Roofing',
    'Roof Repairs',
    'Commercial Roofing',
    'Gutters & Downpipes'
  ]

  const specialtyServices = [
    'Skylight Installation',
    'Roof Insulation'
  ]

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save appointment to database and capture created record
      const created = await blink.db.appointments.create({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        serviceType: formData.serviceType,
        serviceCategory: formData.serviceCategory,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        additionalNotes: formData.additionalNotes,
        status: 'pending'
      })

      // Prepare payload for notifications (include created record fields when available)
      const bookingPayload = {
        ...created,
        customerName: created.customerName || formData.customerName,
        customerEmail: created.customerEmail || formData.customerEmail,
        customerPhone: created.customerPhone || formData.customerPhone,
        serviceType: created.serviceType || formData.serviceType,
        appointmentDate: created.appointmentDate || formData.appointmentDate,
        appointmentTime: created.appointmentTime || formData.appointmentTime,
        additionalNotes: created.additionalNotes || formData.additionalNotes,
        createdAt: created.createdAt || new Date().toISOString()
      }

      // Send calendar & email/sms notifications via edge functions
      try {
        const calResp = await fetch('https://functions.blink.new/reliable-roofing-solutions-website-zqr94aeq/send-calendar-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ appointmentData: bookingPayload })
        })
        const notifResp = await fetch('https://functions.blink.new/reliable-roofing-solutions-website-zqr94aeq/send-booking-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ booking: bookingPayload })
        })

        if (calResp.ok) {
          const result = await calResp.json()
          console.log('Calendar sent:', result)
        }
        if (notifResp.ok) {
          const result2 = await notifResp.json()
          console.log('Notification result:', result2)
        }
      } catch (notificationError) {
        console.error('Error sending notifications:', notificationError)
      }

      setIsConfirmed(true)
    } catch (error) {
      console.error('Error booking appointment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setIsConfirmed(false)
    setFormData({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      serviceType: '',
      serviceCategory: 'core',
      appointmentDate: '',
      appointmentTime: '',
      additionalNotes: ''
    })
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  if (isConfirmed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-6">
            Thank you, {formData.customerName}! Your appointment for {formData.serviceType} on {formData.appointmentDate} at {formData.appointmentTime} has been confirmed.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            We'll contact you within 24 hours to confirm details and provide a free estimate.
          </p>
          <button
            onClick={handleClose}
            className="w-full btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full my-8">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Free Estimate</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center mb-8">
            <div className={`flex items-center ${step >= 1 ? 'text-gray-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">Service</span>
            </div>
            <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-gray-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Schedule</span>
            </div>
            <div className={`flex-1 h-0.5 mx-4 ${step >= 3 ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-gray-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium">Contact</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Service Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('serviceCategory', 'core')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        formData.serviceCategory === 'core' 
                          ? 'border-gray-500 bg-gray-50 text-gray-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">Core Services</div>
                      <div className="text-sm text-gray-500">Essential roofing services</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('serviceCategory', 'specialty')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        formData.serviceCategory === 'specialty' 
                          ? 'border-gray-500 bg-gray-50 text-gray-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">Specialty Services</div>
                      <div className="text-sm text-gray-500">Specialized installations</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Service Type
                  </label>
                  <div className="grid gap-3">
                    {(formData.serviceCategory === 'core' ? coreServices : specialtyServices).map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleInputChange('serviceType', service)}
                        className={`p-4 border rounded-lg text-left transition-colors ${
                          formData.serviceType === service 
                            ? 'border-gray-500 bg-gray-50 text-gray-700' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.serviceType}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next: Schedule
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.appointmentDate}
                    onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Available Times
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleInputChange('appointmentTime', time)}
                        className={`p-3 border rounded-lg text-sm transition-colors ${
                          formData.appointmentTime === time 
                            ? 'border-gray-500 bg-gray-50 text-gray-700' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.appointmentDate || !formData.appointmentTime}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next: Contact Info
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                      className="input w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="h-4 w-4 inline mr-1" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    placeholder="Tell us more about your project or any specific requirements..."
                    className="input w-full resize-none"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Service: {formData.serviceType}</div>
                    <div>Date: {formData.appointmentDate}</div>
                    <div>Time: {formData.appointmentTime}</div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.customerName || !formData.customerEmail || !formData.customerPhone}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}