"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Briefcase, 
  Wrench, 
  Target, 
  Hand, 
  Waves, 
  Footprints, 
  Dumbbell, 
  Radio,
  Circle,
  Crosshair,
  Dot,
  Zap,
  Gauge
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { allBentoItems } from "@/components/BentoGrid/bentoItems";

type ServiceCategory = "Physiotherapy" | "Manual Techniques" | "Modalities" | "Occupational Therapy";

const services: Array<{
  id: number;
  title: string;
  icon: LucideIcon;
  category: ServiceCategory;
  description: string;
  benefits: string[];
}> = [
  {
    id: 1,
    title: "Physiotherapy",
    icon: Activity,
    category: "Physiotherapy" as ServiceCategory,
    description: "Comprehensive physiotherapy services to address a wide range of musculoskeletal conditions, injuries, and movement disorders. Our registered physiotherapists provide evidence-based treatment to restore function and improve quality of life.",
    benefits: ["Pain Relief", "Improved Mobility", "Functional Recovery"]
  },
  {
    id: 2,
    title: "Ergonomic Training",
    icon: Briefcase,
    category: "Occupational Therapy" as ServiceCategory,
    description: "Workplace ergonomic assessments and training to prevent work-related injuries and improve posture. We help you set up your workspace for optimal health and productivity.",
    benefits: ["Injury Prevention", "Posture Improvement", "Productivity"]
  },
  {
    id: 4,
    title: "Instrument-Assisted Soft Tissue Mobilization (IASTM)",
    icon: Wrench,
    category: "Manual Techniques" as ServiceCategory,
    description: "Advanced technique using specialized tools to break down scar tissue, reduce fascial restrictions, and improve tissue mobility. Effective for chronic pain and restricted movement.",
    benefits: ["Scar Tissue Reduction", "Improved Flexibility", "Pain Relief"]
  },
  {
    id: 5,
    title: "Kinesio Taping",
    icon: Target,
    category: "Modalities" as ServiceCategory,
    description: "Therapeutic taping technique that supports muscles and joints while allowing full range of motion. Helps reduce pain, improve circulation, and support healing.",
    benefits: ["Pain Reduction", "Improved Circulation", "Muscle Support"]
  },
  {
    id: 6,
    title: "Manual Therapy",
    icon: Hand,
    category: "Manual Techniques" as ServiceCategory,
    description: "Hands-on techniques including joint mobilization, soft tissue massage, and manipulation to restore movement, reduce pain, and improve function.",
    benefits: ["Joint Mobility", "Pain Management", "Improved Function"]
  },
  {
    id: 7,
    title: "Myofascial Release",
    icon: Waves,
    category: "Manual Techniques" as ServiceCategory,
    description: "Specialized technique to release tension in the fascia (connective tissue) that surrounds muscles. Effective for chronic pain, restricted movement, and postural issues.",
    benefits: ["Pain Relief", "Improved Flexibility", "Postural Correction"]
  },
  {
    id: 8,
    title: "Cupping",
    icon: Circle,
    category: "Manual Techniques" as ServiceCategory,
    description: "Traditional therapy using suction cups to improve blood flow, reduce muscle tension, and promote healing. Effective for pain relief and muscle recovery.",
    benefits: ["Improved Circulation", "Muscle Relaxation", "Pain Relief"]
  },
  {
    id: 9,
    title: "Dry Needling",
    icon: Crosshair,
    category: "Manual Techniques" as ServiceCategory,
    description: "Technique using fine needles to target trigger points and tight muscle bands. Helps relieve pain, improve range of motion, and reduce muscle tension.",
    benefits: ["Trigger Point Release", "Pain Relief", "Improved Mobility"]
  },
  {
    id: 10,
    title: "Acupuncture",
    icon: Dot,
    category: "Modalities" as ServiceCategory,
    description: "Traditional Chinese medicine technique using fine needles at specific points to balance energy flow, reduce pain, and promote healing and wellness.",
    benefits: ["Pain Management", "Stress Reduction", "Improved Energy Flow"]
  },
  {
    id: 11,
    title: "IFC (Interferential Current Therapy)",
    icon: Zap,
    category: "Modalities" as ServiceCategory,
    description: "Electrical stimulation therapy using two medium-frequency currents to penetrate deeper tissues. Effective for pain relief, muscle stimulation, and reducing inflammation.",
    benefits: ["Deep Tissue Stimulation", "Pain Relief", "Reduced Inflammation"]
  },
  {
    id: 12,
    title: "Balance Training",
    icon: Gauge,
    category: "Physiotherapy" as ServiceCategory,
    description: "Specialized exercises and training to improve balance, coordination, and proprioception. Essential for fall prevention, rehabilitation, and athletic performance.",
    benefits: ["Fall Prevention", "Improved Coordination", "Enhanced Stability"]
  },
  {
    id: 13,
    title: "Orthotics",
    icon: Footprints,
    category: "Modalities" as ServiceCategory,
    description: "Custom orthotic devices, supports, braces, and corrective devices to improve alignment, reduce pain, and enhance function. We provide comprehensive assessment and fitting.",
    benefits: ["Improved Alignment", "Pain Reduction", "Enhanced Function"]
  },
  {
    id: 14,
    title: "Therapeutic Exercise",
    icon: Dumbbell,
    category: "Physiotherapy" as ServiceCategory,
    description: "Customized exercise programs designed to strengthen, stretch, and stabilize your body. Each program is tailored to your specific needs, goals, and condition.",
    benefits: ["Strength Building", "Flexibility", "Functional Improvement"]
  },
  {
    id: 15,
    title: "Ultrasound Therapy",
    icon: Radio,
    category: "Modalities" as ServiceCategory,
    description: "Therapeutic ultrasound and other modalities including heat/cold therapy and electrical stimulation. Used to reduce pain, inflammation, and promote healing as part of comprehensive physiotherapy treatment.",
    benefits: ["Pain Relief", "Reduced Inflammation", "Faster Healing"]
  }
];

const categoryColors: Record<ServiceCategory, { bg: string; hover: string; text: string }> = {
  "Physiotherapy": { bg: "#EC1C24", hover: "#C41A20", text: "#FFFFFF" },
  "Manual Techniques": { bg: "#231F20", hover: "#1A1617", text: "#FFFFFF" },
  "Modalities": { bg: "#EC1C24", hover: "#C41A20", text: "#FFFFFF" },
  "Occupational Therapy": { bg: "#58595B", hover: "#4A4B4D", text: "#FFFFFF" },
};

const brandColors = {
  primary: "#EC1C24",
  primaryDark: "#C41A20",
  white: "#FFFFFF",
  lightGrey: "#F5F5F5",
  mediumGrey: "#E0E0E0",
  darkGrey: "#58595B",
  charcoal: "#231F20",
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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            style={{ 
              display: "flex", 
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
            }}
          >
            {React.createElement(service.icon, { size: 48, color: brandColors.white })}
          </motion.div>
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
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");

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

  // First filter the local services
  const filteredLocalServices = services.filter((service) => {
    const matchesSearch = 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.benefits.some((benefit) =>
      benefit.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Also search through all bento items (treatment conditions)
  const filteredBentoItems = allBentoItems.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Combine both results - prioritize local services
  const filteredServices = filteredLocalServices;

  // Sort services by category for better organization
  const sortedServices = [...filteredServices].sort((a, b) => {
    if (selectedCategory !== "All") return 0;
    return a.category.localeCompare(b.category);
  });

  const rows = organizeRows(sortedServices, columns);
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
          color: #EC1C24;
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
          color: #EC1C24;
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

        .hex-inner {
          transition: all 0.25s ease;
        }

        .hex-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }
        
        .hex-icon svg {
          width: clamp(1.8rem, 4vw, 2.4rem);
          height: clamp(1.8rem, 4vw, 2.4rem);
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
          border-color: #EC1C24;
          box-shadow: 0 0 0 3px rgba(236, 28, 36, 0.1);
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
          .hex-icon svg {
            width: 2rem;
            height: 2rem;
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
          .hex-icon svg {
            width: 2.6rem;
            height: 2.6rem;
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
          .hex-icon svg {
            width: 3rem;
            height: 3rem;
          }
          
          .hex-icon {
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
          {(searchQuery || selectedCategory !== "All") && (
            <div className="search-results-count">
              <p>
                Found {sortedServices.length} service{sortedServices.length !== 1 ? 's' : ''}
              </p>
              {searchQuery && filteredBentoItems.length > 0 && (
                <p style={{ marginTop: '8px', fontSize: '13px' }}>
                  Also found {filteredBentoItems.length} treatment condition{filteredBentoItems.length !== 1 ? 's' : ''} matching your search.{' '}
                  <a 
                    href="/what-we-treat/all" 
                    style={{ 
                      color: '#EC1C24', 
                      textDecoration: 'underline',
                      fontWeight: 600 
                    }}
                  >
                    View all treatments
                  </a>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Category Filter Buttons */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 40px',
          padding: '0 16px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setSelectedCategory("All")}
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              border: selectedCategory === "All" ? '2px solid #EC1C24' : '2px solid #E0E0E0',
              background: selectedCategory === "All" ? '#EC1C24' : '#FFFFFF',
              color: selectedCategory === "All" ? '#FFFFFF' : '#231F20',
              fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== "All") {
                e.currentTarget.style.background = '#F5F5F5';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== "All") {
                e.currentTarget.style.background = '#FFFFFF';
              }
            }}
          >
            All Services
          </button>
          {Object.keys(categoryColors).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as ServiceCategory)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: selectedCategory === category ? `2px solid ${categoryColors[category as ServiceCategory].bg}` : '2px solid #E0E0E0',
                background: selectedCategory === category ? categoryColors[category as ServiceCategory].bg : '#FFFFFF',
                color: selectedCategory === category ? '#FFFFFF' : categoryColors[category as ServiceCategory].bg,
                fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = categoryColors[category as ServiceCategory].bg + '15';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = '#FFFFFF';
                }
              }}
            >
              {category}
            </button>
          ))}
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
                  const globalIndex = sortedServices.indexOf(service);
                  const categoryColor = categoryColors[service.category];
                  
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
                      <div 
                        className="hex-inner"
                        style={{
                          background: `linear-gradient(145deg, ${categoryColor.bg} 0%, ${categoryColor.hover} 100%)`,
                          color: categoryColor.text,
                          boxShadow: hoveredId === service.id 
                            ? `0 8px 25px ${categoryColor.bg}80` 
                            : '0 4px 15px rgba(0,0,0,0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(145deg, ${categoryColor.hover} 0%, ${categoryColor.bg} 100%)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `linear-gradient(145deg, ${categoryColor.bg} 0%, ${categoryColor.hover} 100%)`;
                        }}
                      >
                        <span className="hex-icon">
                          {React.createElement(service.icon, { size: 32 })}
                        </span>
                        <span className="hex-title">{service.title}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {sortedServices.length === 0 && (searchQuery || selectedCategory !== "All") && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ color: '#666666', fontSize: '16px', fontFamily: "'Open Sans', -apple-system, sans-serif" }}>
              No services found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                background: '#EC1C24',
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
                e.currentTarget.style.background = '#C41A20';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#EC1C24';
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
