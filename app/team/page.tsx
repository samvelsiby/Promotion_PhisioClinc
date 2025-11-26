"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

// --- Data Configuration ---
const teamMembers = [
  {
    id: 1,
    name: "BEN BASTIN JOSE",
    role: "Registered Physiotherapist",
    bio: "Ben Bastin Jose is a Registered Physiotherapist in Manitoba with over four years of experience delivering compassionate, evidence-based care to clients across a wide range of physical conditions. He earned his Bachelor's Degree in Physiotherapy from Mahatma Gandhi University, India, in 2013. After relocating to Canada, Ben successfully completed the Canadian Physiotherapy Competency Examination in September 2021, earning his professional license to practise in Manitoba.",
    imageSrc: "/team/ben.png", 
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 2,
    name: "LIJO PAUL",
    role: "Registered Physiotherapist",
    bio: "I am an enthusiastic, internationally trained Registered Physiotherapist with over nine years of clinical experience, licensed with the College of Physiotherapists of Manitoba. I possess excellent communication skills and am fluent in English, Hindi, Malayalam, and Tamil. I completed my Bachelor of Physiotherapy (BPT) in 2008 and Master of Physiotherapy (MPT) in Musculoskeletal and Sports Injuries in 2011.",
    imageSrc: "/team/lijo.png",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 3,
    name: "BENCY THEKKINETH",
    role: "Community Occupational Therapist",
    bio: "I am an experienced and compassionate community occupational therapist with over 10 years of practice in community and long-term care settings. She specializes in seating and positioning, pressure management, mobility and adaptive equipment, and home safety assessments. Bency earned her Master's in Occupational Therapy from the University of Manitoba (2013) and a Bachelor of Science in Biochemistry from the University of Toronto (2008).",
    imageSrc: "/team/bency.png",
    socials: { instagram: "#", linkedin: "#" }
  }
];

// --- Main Component ---
export default function MeetOurTeamPage() {
  return (
    <section className="w-full py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tight mb-4">
            MEET OUR TEAM
          </h2>
          <div className="mt-4 h-2 w-32 bg-[#e63939] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team of healthcare professionals is dedicated to helping you achieve your best health
          </p>
        </div>

        {/* Cards Loop */}
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={member.id} 
            member={member} 
            isReversed={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
}

// --- Sub Component (The Card) ---
const TeamCard = ({ member, isReversed }: { member: any, isReversed: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // Get first line (up to first period or first 100 characters)
  const firstLineEnd = member.bio.indexOf('.') !== -1 ? member.bio.indexOf('.') + 1 : Math.min(100, member.bio.length)
  const firstLine = member.bio.substring(0, firstLineEnd).trim()
  const shouldTruncate = member.bio.length > firstLine.length

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl`}>
      
      {/* Left/Right Section: Image + Social Bar */}
      <div className={`relative w-full md:w-[35%] flex ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Red Social Sidebar */}
        <div className="w-16 bg-[#EE1C25] flex flex-col items-center pt-8 gap-6 shrink-0 z-10">
          <a href={member.socials.instagram} className="text-white hover:text-white/80 transition-colors p-2">
            <Instagram size={24} />
          </a>
          <a href={member.socials.linkedin} className="text-white hover:text-white/80 transition-colors p-2">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 bg-gray-200 flex items-center justify-center overflow-hidden h-[350px] sm:h-[400px] md:h-[450px]">
          <div className="relative w-full h-full max-w-full">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 35vw"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[65%] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
          {member.name}
        </h3>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-6">
          {member.role}
        </p>
        
        {/* Description */}
        <div className="text-gray-600 leading-relaxed text-sm md:text-[0.95rem] space-y-4">
          <p className="md:block">
            {/* Show first line only on mobile, full on desktop */}
            <span className="md:hidden">
              {isExpanded ? member.bio : firstLine}
            </span>
            <span className="hidden md:inline">{member.bio}</span>
          </p>
          
          {/* Read More/Less Button - Mobile Only */}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden inline-flex items-center gap-1 text-[#e63939] font-semibold text-sm hover:text-[#c62828] transition-colors mt-2"
            >
              {isExpanded ? (
                <>
                  Read Less
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
