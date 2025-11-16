'use client'

import Image from 'next/image'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleRequestAppointment = () => {
    setShowAppointmentPopup(true)
  }

  const handleChat = () => {
    setShowChat(!showChat)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Request Appointment Button - Top Right */}
      <div className="fixed bottom-24 right-4 z-50 sm:right-6">
        <button
          onClick={handleRequestAppointment}
          className="group relative flex h-14 w-auto items-center justify-center transition-all duration-300 hover:scale-105 sm:h-16 lg:h-[58px]"
          aria-label="Request Appointment"
        >
          {/* SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/popout/request-appointment.svg"
              alt=""
              width={368}
              height={59}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
          
          {/* Text Overlay */}
          <span className="relative z-10 px-6 text-sm font-semibold text-white sm:text-base lg:text-lg">
            Request Appointment
          </span>
        </button>
      </div>

      {/* Chat Widget Button - Bottom Right Corner */}
      <button
        onClick={handleChat}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#e63939] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#c62828] sm:right-6 sm:h-16 sm:w-16"
        aria-label="Open Chat"
      >
        <MessageCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
      </button>

      {/* Appointment Popup Modal */}
      {showAppointmentPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <button
              onClick={() => setShowAppointmentPopup(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Request Appointment
            </h2>
            
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
                  placeholder="+1 (432) 098-567"
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
                />
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full rounded-md bg-[#e63939] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#c62828]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-28 right-4 z-[100] w-80 rounded-lg bg-white shadow-2xl sm:right-6 sm:w-96 lg:bottom-6 lg:right-24">
          <div className="flex items-center justify-between rounded-t-lg bg-[#e63939] p-4">
            <h3 className="font-semibold text-white">Chat with us</h3>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4">
            <div className="mb-4 rounded-lg bg-gray-100 p-3">
              <p className="text-sm text-gray-800">
                Hi! How can we help you today?
              </p>
            </div>
          </div>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#e63939] focus:outline-none focus:ring-1 focus:ring-[#e63939]"
              />
              <button className="rounded-md bg-[#e63939] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c62828]">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
