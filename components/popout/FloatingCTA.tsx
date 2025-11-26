'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle, X, Calendar } from 'lucide-react'

export default function FloatingCTA() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [showAfterScroll, setShowAfterScroll] = useState(false)
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    // On home page, show CTA only after scrolling past hero section
    if (pathname === '/') {
      const handleScroll = () => {
        // Hero section is typically around 100vh, show CTA after scrolling past it
        const scrollY = window.scrollY || window.pageYOffset
        const heroHeight = window.innerHeight // Approximate hero height
        setShowAfterScroll(scrollY > heroHeight * 0.8) // Show after 80% of viewport height
      }

      // Check initial scroll position
      handleScroll()

      // Listen to scroll events
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    } else {
      // On other pages, show immediately
      setShowAfterScroll(true)
    }
  }, [pathname])

  const handleScheduleAppointment = () => {
    // Open juvonno booking portal
    if (typeof window !== 'undefined') {
      window.open('https://pmphysio.juvonno.com/portal/publicbook.php', '_blank', 'noopener,noreferrer')
    }
  }

  const handleRequestAppointment = () => {
    // Navigate to about page and scroll to form
    if (typeof window !== 'undefined') {
      window.location.href = '/about#appointment-form'
    }
  }

  const handleChat = () => {
    setShowChat(!showChat)
  }

  // Hide if manually closed or if on home page and haven't scrolled past hero
  if (!isVisible || (pathname === '/' && !showAfterScroll)) return null

  return (
    <>
      {/* CTA Buttons with Logo */}
      <div className="fixed bottom-6 right-4 z-50 sm:right-6">
        <div className="flex flex-col items-end gap-3">
          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-200 hover:bg-gray-300 hover:scale-110 sm:h-7 sm:w-7"
              aria-label="Close CTA"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
            {/* Schedule Appointment Button */}
            <button
              onClick={handleScheduleAppointment}
              className="group flex items-center justify-center gap-2 rounded-lg bg-[#e63939] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_0_0_#c62828,0_8px_16px_rgba(230,57,57,0.4)] transition-all duration-200 hover:bg-[#c62828] hover:shadow-[0_2px_0_0_#a01e1e,0_4px_8px_rgba(230,57,57,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_0_0_#a01e1e] sm:px-8 sm:py-3 sm:text-base"
              aria-label="Schedule Appointment"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Schedule Appointment</span>
            </button>
            
            {/* Request Appointment Button with Logo */}
            <button
              onClick={handleRequestAppointment}
              className="group flex items-center justify-center gap-2 rounded-lg border-2 border-[#e63939] bg-white px-6 py-2.5 text-sm font-semibold text-[#e63939] shadow-[0_4px_0_0_#d1d5db,0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[0_2px_0_0_#d1d5db,0_4px_8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_0_0_#d1d5db] sm:px-8 sm:py-3 sm:text-base"
              aria-label="Request Appointment"
            >
              <div className="relative h-4 w-4 sm:h-5 sm:w-5">
                <Image
                  src="/logo.png"
                  alt="ProMotion Physiotherapy"
                  fill
                  className="object-contain"
                  sizes="20px"
                />
              </div>
              <span>Request Appointment</span>
            </button>
          </div>

          {/* Chat Widget Button - Bottom Right Corner */}
          <button
            onClick={handleChat}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e63939] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#c62828] sm:h-16 sm:w-16"
            aria-label="Open Chat"
          >
            <MessageCircle className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </button>
        </div>
      </div>

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
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Click the button below to book your appointment directly through our online booking system.
              </p>
              
              <a
                href="https://pmphysio.juvonno.com/portal/publicbook.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md bg-[#e63939] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#c62828]"
              >
                Book Appointment Online
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-40 right-4 z-[100] w-80 rounded-lg bg-white shadow-2xl sm:right-6 sm:w-96 sm:bottom-44 lg:bottom-6 lg:right-24">
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
