"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Acupuncture & Dry Needling",
    icon: "🎯",
    description: "Traditional and modern needle therapy techniques to release muscle tension, reduce pain, and promote natural healing. Our certified practitioners target trigger points for immediate relief.",
    benefits: ["Pain Relief", "Muscle Relaxation", "Improved Circulation"]
  },
  {
    id: 2,
    title: "Sports Injury Rehabilitation",
    icon: "⚡",
    description: "Specialized recovery programs for athletes at all levels. We address acute injuries and chronic conditions to get you back in the game stronger than before.",
    benefits: ["Faster Recovery", "Injury Prevention", "Performance Enhancement"]
  },
  {
    id: 3,
    title: "Manual Therapy",
    icon: "🤲",
    description: "Hands-on techniques including joint mobilization, soft tissue massage, and manipulation to restore movement and reduce pain naturally.",
    benefits: ["Joint Mobility", "Pain Management", "Postural Correction"]
  },
  {
    id: 4,
    title: "Exercise Therapy",
    icon: "💪",
    description: "Customized exercise programs designed to strengthen, stretch, and stabilize your body. Each program is tailored to your specific needs and goals.",
    benefits: ["Strength Building", "Flexibility", "Core Stability"]
  },
  {
    id: 5,
    title: "Post-Surgical Rehab",
    icon: "🏥",
    description: "Comprehensive rehabilitation following orthopedic surgeries. We work closely with your surgical team to optimize your recovery timeline.",
    benefits: ["Safe Recovery", "Scar Management", "Function Restoration"]
  },
  {
    id: 6,
    title: "Chronic Pain Management",
    icon: "🌿",
    description: "Multi-modal approach to managing persistent pain conditions. We combine various techniques to improve your quality of life and daily function.",
    benefits: ["Long-term Relief", "Coping Strategies", "Quality of Life"]
  },
  {
    id: 7,
    title: "Pelvic Floor Therapy",
    icon: "🦋",
    description: "Specialized treatment for pelvic health concerns including incontinence, pelvic pain, and pre/postnatal care in a comfortable, private setting.",
    benefits: ["Core Strength", "Bladder Control", "Postnatal Recovery"]
  },
  {
    id: 8,
    title: "Concussion Management",
    icon: "🧠",
    description: "Evidence-based concussion assessment and rehabilitation. We guide you through safe return-to-activity protocols with comprehensive monitoring.",
    benefits: ["Safe Return to Activity", "Symptom Management", "Cognitive Support"]
  },
  {
    id: 9,
    title: "Orthopedic Physio",
    icon: "🦴",
    description: "Treatment for musculoskeletal conditions affecting bones, joints, muscles, and connective tissues. Expert care for fractures, arthritis, and joint replacements.",
    benefits: ["Joint Health", "Mobility Restoration", "Pain Reduction"]
  },
  {
    id: 10,
    title: "Vestibular Rehab",
    icon: "🌀",
    description: "Specialized therapy for dizziness, vertigo, and balance disorders. Our targeted exercises help retrain your vestibular system for improved stability.",
    benefits: ["Balance Improvement", "Vertigo Relief", "Fall Prevention"]
  },
  {
    id: 11,
    title: "TMJ Treatment",
    icon: "😊",
    description: "Relief for jaw pain, clicking, and temporomandibular joint dysfunction. We address the root causes of TMJ issues for lasting improvement.",
    benefits: ["Jaw Pain Relief", "Improved Function", "Headache Reduction"]
  },
  {
    id: 12,
    title: "Massage Therapy",
    icon: "✨",
    description: "Therapeutic massage services to complement your physiotherapy treatment. Our registered massage therapists provide targeted relief and relaxation.",
    benefits: ["Stress Relief", "Muscle Recovery", "Relaxation"]
  }
];

const brandColors = {
  primary: "#C41E3A",
  primaryDark: "#9B1B30",
  white: "#FFFFFF",
  lightGrey: "#F5F5F5",
  mediumGrey: "#E0E0E0",
  darkGrey: "#4A4A4A",
  charcoal: "#2D2D2D",
};

const ServiceModal = ({ service, onClose }: { service: typeof services[0] | null; onClose: () => void }) => {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(45, 45, 45, 0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: brandColors.white,
          borderRadius: "20px",
          padding: "0",
          maxWidth: "480px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          boxShadow: "0 25px 60px -12px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.primaryDark} 100%)`,
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            style={{ 
              fontSize: "52px", 
              display: "block", 
              marginBottom: "16px",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
            }}
          >
            {service.icon}
          </motion.span>
          <h2
            style={{
              color: brandColors.white,
              fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
              fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
              fontWeight: 700,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {service.title}
          </h2>
          </div>

        <div style={{ padding: "28px" }}>
          <p
            style={{
              color: brandColors.darkGrey,
              fontSize: "15px",
              lineHeight: 1.75,
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              margin: "0 0 24px 0",
            }}
          >
            {service.description}
          </p>

          <div>
            <h4
              style={{
                color: brandColors.primary,
                fontSize: "12px",
                fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "14px",
              }}
            >
              Key Benefits
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {service.benefits.map((benefit, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  style={{
                    background: brandColors.lightGrey,
                    color: brandColors.charcoal,
                    padding: "10px 18px",
                    borderRadius: "25px",
                    fontSize: "13px",
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontWeight: 600,
                    border: `1px solid ${brandColors.mediumGrey}`,
                  }}
                >
                  {benefit}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(196, 30, 58, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            style={{
              width: "100%",
              marginTop: "28px",
              padding: "16px 24px",
              background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.primaryDark} 100%)`,
              color: brandColors.white,
              border: "none",
              borderRadius: "12px",
              fontSize: "15px",
              fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(196, 30, 58, 0.3)",
            }}
          >
            Book Appointment
          </motion.button>
      </div>
      </motion.div>
    </motion.div>
  );
};

const organizeRows = (servicesArray: typeof services, colsPerRow: number) => {
  const rows = [];
  for (let i = 0; i < servicesArray.length; i += colsPerRow) {
    rows.push(servicesArray.slice(i, i + colsPerRow));
  }
  return rows;
};

export default function PhysiotherapyHoneycomb() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [columns, setColumns] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setColumns(2);
      } else if (width < 768) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.benefits.some((benefit) =>
      benefit.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const rows = organizeRows(filteredServices, columns);
  const numRows = rows.length;

  const cssStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        .honeycomb-page {
          min-height: 100vh;
          background: #FFFFFF;
          padding: 50px 16px 70px;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .honeycomb-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .honeycomb-title {
          font-family: 'Montserrat', 'Segoe UI', sans-serif;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          font-weight: 800;
          color: #2D2D2D;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .honeycomb-title-accent {
          color: #C41E3A;
        }

        .honeycomb-subtitle {
          font-family: 'Open Sans', -apple-system, sans-serif;
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          color: #666666;
          margin: 0;
          font-weight: 400;
        }

        .honeycomb-tagline {
          font-family: 'Montserrat', 'Segoe UI', sans-serif;
          font-size: clamp(0.7rem, 1.8vw, 0.85rem);
          color: #C41E3A;
          margin: 16px 0 0 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .honeycomb-grid {
          --hex-width: 200px;
          --hex-height: calc(var(--hex-width) * 1.1547);
          --gap: 6px;
          --vertical-spacing: calc(var(--hex-height) * 0.75 + var(--gap) * 0.5);
          
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }

        .hex-row {
          position: absolute;
          left: 50%;
          display: flex;
          justify-content: center;
          transform: translateX(-50%);
        }

        .hex-row.offset {
          transform: translateX(calc(-50% + var(--hex-width) / 2 + var(--gap) / 2));
        }

        @media (max-width: 767px) {
          .hex-row {
            left: 50%;
            transform: translateX(-60%);
          }

          .hex-row.offset {
            transform: translateX(calc(-60% + var(--hex-width) / 2 + var(--gap) / 2));
          }
        }

        .hex-cell {
          width: var(--hex-width);
          height: var(--hex-height);
          margin: 0 calc(var(--gap) / 2);
          position: relative;
          cursor: pointer;
          transition: transform 0.25s ease, z-index 0s;
          flex-shrink: 0;
        }

        .hex-cell:hover {
          transform: scale(1.08);
          z-index: 10;
        }

        .hex-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 28px 20px;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .hex-red {
          background: linear-gradient(145deg, #C41E3A 0%, #9B1B30 100%);
          color: #FFFFFF;
        }

        .hex-red:hover {
          background: linear-gradient(145deg, #A81830 0%, #7A1526 100%);
        }

        .hex-white {
          background: linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%);
          color: #2D2D2D;
          box-shadow: inset 0 0 0 2px #E0E0E0;
        }

        .hex-white:hover {
          background: linear-gradient(145deg, #F5F5F5 0%, #E8E8E8 100%);
        }

        .hex-icon {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          margin-bottom: 8px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        .hex-title {
          font-family: 'Montserrat', 'Segoe UI', sans-serif;
          font-size: clamp(0.7rem, 1.5vw, 0.95rem);
          font-weight: 700;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-bar-container {
          max-width: 600px;
          margin: 0 auto 40px;
          padding: 0 16px;
        }

        .search-bar {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #E0E0E0;
          border-radius: 50px;
          font-size: 16px;
          font-family: 'Open Sans', -apple-system, sans-serif;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-bar:focus {
          border-color: #C41E3A;
          box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.1);
        }

        .search-results-count {
          text-align: center;
          margin-top: 12px;
          font-size: 14px;
          color: #666666;
          font-family: 'Open Sans', -apple-system, sans-serif;
        }

        /* Mobile: 2 columns - keep hexagons large */
        @media (max-width: 499px) {
          .honeycomb-grid {
            --hex-width: 140px;
            --gap: 6px;
          }
          .hex-icon {
            font-size: 2rem;
          }
          .hex-title {
            font-size: 0.65rem;
          }
          .search-bar {
            padding: 12px 18px;
            font-size: 14px;
          }
        }

        /* Tablet: 3 columns */
        @media (min-width: 500px) and (max-width: 767px) {
          .honeycomb-grid {
            --hex-width: 180px;
            --gap: 6px;
          }
          .hex-icon {
            font-size: 2.6rem;
          }
          .hex-title {
            font-size: 0.8rem;
          }
        }

        /* Desktop: 4 columns */
        @media (min-width: 768px) and (max-width: 1050px) {
          .honeycomb-grid {
            --hex-width: 200px;
          }
        }

        @media (min-width: 1051px) {
          .honeycomb-grid {
            --hex-width: 220px;
          }
          .hex-icon {
            font-size: 3rem;
            margin-bottom: 12px;
          }
          .hex-title {
            font-size: 0.95rem;
          }
        }
      `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div className="honeycomb-page">
        <header className="honeycomb-header">
          <motion.h1
            className="honeycomb-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="honeycomb-title-accent">Services</span>
          </motion.h1>
          <motion.p
            className="honeycomb-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive physiotherapy care tailored to your unique needs
          </motion.p>
          <motion.p
            className="honeycomb-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Driven by Care • Powered by Motion
          </motion.p>
        </header>

        <div className="search-bar-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services... (e.g. acupuncture, sports, manual therapy)"
            className="search-bar"
          />
          {searchQuery && (
            <p className="search-results-count">
              Found {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <div 
          className="honeycomb-grid"
          style={{
            height: `calc(var(--hex-height) + var(--vertical-spacing) * ${numRows - 1})`,
          }}
        >
          {rows.map((row, rowIndex) => {
            const isOffset = rowIndex % 2 === 1;
            
            return (
              <div 
                key={rowIndex} 
                className={`hex-row ${isOffset ? 'offset' : ''}`}
              style={{
                  top: `calc(var(--vertical-spacing) * ${rowIndex})`,
                }}
              >
                {row.map((service, cellIndex) => {
                  const globalIndex = filteredServices.indexOf(service);
                  const isRed = (rowIndex + cellIndex) % 2 === 0;
                  
                  return (
                    <motion.div
                      key={service.id}
                      className="hex-cell"
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: globalIndex * 0.05,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 120,
                      }}
                      onClick={() => setSelectedService(service)}
                      onMouseEnter={() => setHoveredId(service.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className={`hex-inner ${isRed ? 'hex-red' : 'hex-white'}`}>
                        <span className="hex-title">{service.title}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && searchQuery && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ color: '#666666', fontSize: '16px', fontFamily: "'Open Sans', -apple-system, sans-serif" }}>
              No services found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                background: '#C41E3A',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '25px',
                fontSize: '14px',
                fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9B1B30';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C41E3A';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
