"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from './teamData';

// --- Main Component ---
export default function MeetOurTeamPage() {
  return (
    <section className="w-full py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tight mb-4">
            MEET OUR TEAM
          </h2>
          <div className="mt-4 h-2 w-32 bg-[#e63939] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team of healthcare professionals is dedicated to helping you achieve your best health
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container - Grey Background */}
              <div className="relative w-full bg-gray-200 flex items-center justify-center overflow-hidden h-[400px] sm:h-[450px]">
                <div className="relative w-full h-full">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Name and Role Overlay */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#e63939] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
