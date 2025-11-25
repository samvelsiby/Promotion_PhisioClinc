"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Activity, 
  User, 
  Footprints, 
  BriefcaseMedical, 
  Bone, 
  Dumbbell, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

// --- 1. The Data Structure (Organized by Body Part) ---
const treatments = [
  {
    id: 'head-neck',
    label: 'Head & Neck',
    icon: User,
    title: 'Headaches, Vertigo & Neck Pain',
    description: 'Neck pain and headaches often stem from poor posture, stress, or whiplash. We specialize in treating the root cause of cervicogenic headaches and jaw (TMJ) dysfunction.',
    conditions: [
      'Cervicogenic Headaches',
      'TMJ (Jaw) Dysfunction',
      'Whiplash Associated Disorders',
      'Vertigo & Dizziness',
      'Concussion Management',
      'Chronic Neck Stiffness'
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    id: 'shoulder',
    label: 'Shoulder & Arm',
    icon: Activity,
    title: 'Shoulder Mobility & Strength',
    description: 'The shoulder is the most mobile joint in the body, making it susceptible to injury. We restore range of motion and strengthen the rotator cuff to prevent re-injury.',
    conditions: [
      'Rotator Cuff Tendonitis',
      'Frozen Shoulder (Adhesive Capsulitis)',
      'Shoulder Impingement',
      'Tennis / Golfer\'s Elbow',
      'Carpal Tunnel Syndrome',
      'Dislocations & Instability'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'back',
    label: 'Back & Spine',
    icon: Bone,
    title: 'Spinal Health & Lower Back Pain',
    description: 'Back pain is the most common reason patients seek physiotherapy. Our evidence-based approach focuses on manual therapy, core stabilization, and posture correction.',
    conditions: [
      'Sciatica & Nerve Pain',
      'Disc Herniation / Bulges',
      'Lumbar Spinal Stenosis',
      'Scoliosis Management',
      'Degenerative Disc Disease',
      'Postural Kyphosis'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 'hip-knee',
    label: 'Hip & Knee',
    icon: Dumbbell,
    title: 'Lower Limb Stability',
    description: 'Whether it is arthritis or a sports injury, hip and knee pain can severely limit mobility. We focus on alignment, strengthening, and gait retraining.',
    conditions: [
      'Osteoarthritis (Hip/Knee)',
      'ACL / MCL Ligament Injuries',
      'Meniscus Tears',
      'Patellofemoral Pain Syndrome',
      'Hip Bursitis',
      'IT Band Syndrome'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 'foot-ankle',
    label: 'Foot & Ankle',
    icon: Footprints,
    title: 'Foot Mechanics & Balance',
    description: 'Your feet carry your entire body weight. We treat soft tissue injuries and biomechanical issues that cause pain with every step.',
    conditions: [
      'Plantar Fasciitis',
      'Achilles Tendonitis',
      'Ankle Sprains & Strains',
      'Metatarsalgia',
      'Heel Spurs',
      'Post-Fracture Rehab'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    id: 'post-surgical',
    label: 'Post-Surgical',
    icon: BriefcaseMedical,
    title: 'Pre & Post-Op Rehabilitation',
    description: 'Surgery is just the first step. Our specialized post-op protocols ensure you regain full function and return to your daily activities faster.',
    conditions: [
      'Total Knee/Hip Replacements',
      'Rotator Cuff Repairs',
      'ACL Reconstruction',
      'Spinal Decompression Surgery',
      'Fracture Fixation',
      'Arthroscopic Surgeries'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
];

export default function WhatWeTreat() {
  const [activeTab, setActiveTab] = useState(treatments[0]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-[#e63939] uppercase tracking-[0.2em] bg-red-50 px-4 py-2 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            WHAT WE TREAT
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            We take a holistic, body-part specific approach to recovery. Explore our specialized treatments below.
          </p>
        </div>

        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((item) => {
            const isActive = activeTab.id === item.id;
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 border-2 ${
                  isActive
                    ? `bg-gradient-to-br ${item.color} border-transparent text-white shadow-2xl scale-105`
                    : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300 hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {/* Background gradient overlay on hover */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                )}

                {/* Icon */}
                <div className={`relative z-10 mb-4 inline-flex p-3 rounded-xl ${
                  isActive 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : `${item.bgColor}`
                }`}>
                  <Icon 
                    size={32} 
                    className={isActive ? 'text-white' : item.iconColor} 
                  />
                </div>

                {/* Title */}
                <h3 className={`relative z-10 text-xl font-bold mb-2 transition-colors ${
                  isActive ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.label}
                </h3>

                {/* Description */}
                <p className={`relative z-10 text-sm leading-relaxed mb-4 transition-colors ${
                  isActive ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {item.description.substring(0, 80)}...
                </p>

                {/* Arrow indicator */}
                <div className={`relative z-10 flex items-center gap-2 transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-900'
                }`}>
                  <span className="text-sm font-semibold">
                    {isActive ? 'Selected' : 'Learn More'}
                  </span>
                  <ArrowRight 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      isActive || isHovered ? 'translate-x-1' : ''
                    }`}
                  />
          </div>

                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30" />
                )}
            </button>
            );
          })}
        </div>

        {/* Detailed Content Panel */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl transition-all duration-500"
          key={activeTab.id}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.color} opacity-5`} />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Header with icon */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className={`inline-flex p-4 rounded-2xl ${activeTab.bgColor}`}>
                <activeTab.icon className={activeTab.iconColor} size={40} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {activeTab.title}
              </h3>
                <div className={`h-1.5 w-24 bg-gradient-to-r ${activeTab.color} rounded-full`} />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">
              {activeTab.description}
            </p>

            {/* Conditions Grid */}
            <div className="mb-10">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Conditions We Treat
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeTab.conditions.map((condition, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                  >
                    <CheckCircle2 
                      size={20} 
                      className={`${activeTab.iconColor} shrink-0 group-hover:scale-110 transition-transform`} 
                    />
                    <span className="text-gray-700 font-medium group-hover:text-gray-900">
                      {condition}
                </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-gray-200">
              <a 
                href="https://pmphysio.juvonno.com/portal/publicbook.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 bg-gradient-to-r ${activeTab.color} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <span>Book Appointment for {activeTab.label}</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
