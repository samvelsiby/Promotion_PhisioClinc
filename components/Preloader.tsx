'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      const timer = setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }, 1500)
      return () => clearTimeout(timer)
    }

    // Wait for page load
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }, 1500)
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Navbar SVG with scale animation */}
        <div className="mb-8 animate-scale-in">
          <Image
            src="/navbar/Navbar.svg"
            alt="Pro Motion Physiotherapy Logo"
            width={250}
            height={80}
            priority
            className="object-contain"
          />
        </div>

        {/* Motto with delay */}
        <p className="mb-8 animate-fade-in-delay text-xs font-medium text-gray-600 sm:text-sm">
          Driven by Care. Powered by Motion.
        </p>

        {/* Loading Progress Bar */}
        <div className="relative w-48 sm:w-64">
          <div className="h-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-full animate-loading bg-gradient-to-r from-transparent via-[#e63939] to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-loading {
          animation: loading 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

