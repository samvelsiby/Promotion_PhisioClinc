'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroVariantTwo() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Decorative Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract gradient blobs */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#e63939]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-pink-200/20 blur-2xl"></div>
        
        {/* Geometric shapes */}
        <svg className="absolute top-10 right-1/4 w-32 h-32 text-[#e63939]/15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="15" fill="currentColor"/>
        </svg>
        
        {/* Medical cross pattern */}
        <svg className="absolute bottom-40 left-20 w-24 h-24 text-[#e63939]/10" viewBox="0 0 100 100">
          <rect x="40" y="20" width="20" height="60" fill="currentColor" rx="2"/>
          <rect x="20" y="40" width="60" height="20" fill="currentColor" rx="2"/>
        </svg>
        
        {/* Flowing organic shapes */}
        <svg className="absolute top-1/4 right-10 w-40 h-40 text-orange-300/15" viewBox="0 0 200 200">
          <path d="M100,20 Q150,50 150,100 T100,180 Q50,150 50,100 T100,20" fill="currentColor"/>
        </svg>
        
        {/* Grid pattern */}
        <svg className="absolute bottom-10 right-1/3 w-32 h-32 text-pink-300/10" viewBox="0 0 100 100">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
        
        {/* Wavy flowing lines */}
        <svg className="absolute top-1/3 left-0 w-full h-40 opacity-15" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,10 600,50 T1200,50" fill="none" stroke="#e63939" strokeWidth="3"/>
          <path d="M0,70 Q300,30 600,70 T1200,70" fill="none" stroke="#ff6b6b" strokeWidth="2"/>
          <path d="M0,90 Q300,50 600,90 T1200,90" fill="none" stroke="#ffa07a" strokeWidth="1.5"/>
        </svg>
        
        {/* Curved arc */}
        <svg className="absolute top-0 left-1/4 w-64 h-64 text-[#e63939]/10" viewBox="0 0 200 200">
          <path d="M20,100 Q100,20 180,100" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M30,110 Q100,40 170,110" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        
        {/* Plus and cross symbols */}
        <div className="absolute top-1/4 right-20 text-[#e63939]/15 text-5xl font-bold">+</div>
        <div className="absolute bottom-1/3 left-32 text-orange-400/15 text-4xl font-bold">+</div>
        <div className="absolute top-2/3 right-1/3 text-pink-400/15 text-3xl font-bold">×</div>
        
        {/* Dotted circles */}
        <svg className="absolute bottom-1/4 right-40 w-20 h-20 text-[#e63939]/15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
        </svg>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              DRIVEN BY{' '}
              <span className="text-[#e63939]">CARE.</span>{' '}
              <br />
              POWERED BY{' '}
              <span className="text-[#e63939]">MOTION.</span>
            </motion.h1>

            <motion.p
              className="mb-8 text-lg leading-relaxed text-gray-700 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              Located on St. Anne's Road, we provide compassionate, evidence-based care tailored to your unique needs.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <Button
                asChild
                size="lg"
                className="h-12 bg-[#e63939] px-8 text-base font-semibold text-white transition-all hover:bg-[#c62828] sm:h-14 sm:px-10 sm:text-lg"
              >
                <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold text-gray-900 border-2 border-gray-900 transition-all hover:bg-gray-900 hover:text-white sm:h-14 sm:px-10 sm:text-lg"
              >
                <a href="/about#appointment-form" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
            >
              {/* Background Image */}
              <div className="relative h-[500px] w-full overflow-hidden lg:h-[600px]">
                <Image
                  src="/Hero/hero1.jpg"
                  alt="Physiotherapy session"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>

              {/* Testimonial Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-xl p-4 shadow-2xl border border-white/30 sm:p-5">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                  "I highly recommend Pro-Motion Physiotherapy. The staff are excellent, and the clinic is always clean and welcoming. Ben is knowledgeable, professional, and genuinely caring. He explains what's going on clearly and makes it easy to understand both the issue and how to fix it."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#e63939] to-[#c62828] text-white font-bold text-lg">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jabin James</p>
                    <p className="text-sm text-gray-600">Google Review</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dedicated Professionals Card */}
          <motion.a
            href="/team"
            className="group relative overflow-hidden bg-[#e63939]/90 backdrop-blur-md p-8 transition-all hover:scale-105 cursor-pointer block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            {/* Decorative curved lines */}
            <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,50 200,150 T400,150" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="text-3xl font-bold text-white leading-tight max-w-[200px]">
                  Dedicated Professionals
                </h3>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#e63939] transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-7 w-7" />
                </div>
              </div>
              <p className="text-white/95 text-lg leading-relaxed">
                We go above and beyond to understand clients' needs, providing solutions that are tailored to their goals.
              </p>
            </div>
          </motion.a>

          {/* Treatment Image Card */}
          <motion.div
            className="relative h-full min-h-[280px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
          >
            <Image
              src="/Hero/hero2.jpg"
              alt="Professional treatment"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          {/* Satisfied Clients Card */}
          <motion.a
            href="https://share.google/HAWazXFacwaQqbU8P"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 transition-all hover:scale-105 border-2 border-white/50 cursor-pointer block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            {/* Decorative curved lines */}
            <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,50 200,150 T400,150" fill="none" stroke="#e63939" strokeWidth="2"/>
              <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="#e63939" strokeWidth="2"/>
              <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="#e63939" strokeWidth="2"/>
            </svg>
            
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <motion.div 
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#e63939] to-[#c62828] text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-4xl font-bold">5.0</span>
                </motion.div>
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:rotate-45"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="h-7 w-7" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900 leading-tight">
                Our Satisfied Clients
              </h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                  >
                    <Star className="h-6 w-6 fill-[#e63939] text-[#e63939]" />
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Google Reviews</span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
