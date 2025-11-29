'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { Phone, ChevronDown } from 'lucide-react'
import styles from './Navbar.module.css'
import { allBentoItems } from './BentoGrid/bentoItems'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement | null>(null)

  // Major services for dropdown (most popular/relevant)
  const majorServices = [
    { title: 'Back Pain & Sciatica Relief', href: '/services/back-pain-sciatica-relief' },
    { title: 'Sports Injuries', href: '/services/sports-injuries' },
    { title: 'Work Injuries, WCB & Work Related Injury', href: '/services/work-injuries' },
    { title: 'Motor Vehicle Accident Injuries (MPI)', href: '/services/motor-vehicle-accident-recovery' },
    { title: 'Neck Pain Relief', href: '/services/neck-pain-relief' },
    { title: 'Shoulder Pain Relief', href: '/services/shoulder-pain-relief' },
    { title: 'Hip & Knee Pain Relief', href: '/services/hip-knee-pain-relief' },
    { title: 'Chronic Pain Relief', href: '/services/chronic-pain-relief' },
    { title: 'Pre & Post-Surgical Rehabilitation', href: '/services/pre-post-surgical-conditions' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How We Treat', href: '/how-we-treat' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Insurance Providers', href: '/insurance' },
    { name: 'Blog', href: '/blogs' },
  ]

  return (
    <>
      <div className={styles.topBar}></div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/navbar/Navbar.svg"
              alt="Pro Motion Physiotherapy Logo"
              width={180}
              height={60}
              priority
              className={styles.logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              // Insert "What We Treat" dropdown right after "About Us"
              if (link.name === 'About Us') {
                return (
                  <React.Fragment key={link.name}>
                    <li>
                      <a href={link.href} className={styles.navLink}>
                        {link.name}
                      </a>
                    </li>
                    {/* What We Treat Dropdown */}
                    <li 
                      className={styles.navItemWithDropdown} 
                      ref={dropdownRef}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        href="/what-we-treat"
                        className={styles.navLinkButton}
                      >
                        What We Treat
                        <ChevronDown className={styles.navLinkCaret} size={14} />
                      </Link>
                      <div className={`${styles.servicesDropdown} ${isDropdownOpen ? styles.servicesDropdownOpen : ''}`}>
                        {majorServices.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={styles.servicesDropdownItem}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          href="/what-we-treat"
                          className={styles.servicesDropdownItem}
                          onClick={() => setIsDropdownOpen(false)}
                          style={{ borderTop: '1px solid #f0f0f0', marginTop: '0.5rem', paddingTop: '0.75rem', fontWeight: 600 }}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </li>
                  </React.Fragment>
                )
              }
              return (
                <li key={link.name}>
                  <a href={link.href} className={styles.navLink}>
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Call Now Button */}
          <a 
            href="tel:+12045760033" 
            className={styles.contactButton}
          >
            <Phone className="h-4 w-4 mr-2" />
            (204) 576-0033
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMenuOpen ? styles.mobileMenuButtonOpen : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div 
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Sidebar */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navLinks.map((link) => {
              // Insert "What We Treat" dropdown right after "About Us" in mobile too
              if (link.name === 'About Us') {
                return (
                  <React.Fragment key={link.name}>
                    <a
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {/* Mobile What We Treat Dropdown */}
                    <div className={styles.mobileServicesGroup}>
                      <button
                        className={styles.mobileServicesToggle}
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      >
                        What We Treat
                        <ChevronDown 
                          className={`${styles.mobileServicesCaret} ${isMobileDropdownOpen ? styles.mobileServicesCaretOpen : ''}`} 
                          size={16}
                        />
                      </button>
                      {isMobileDropdownOpen && (
                        <div className={styles.mobileServicesList}>
                          {majorServices.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={styles.mobileServicesItem}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileDropdownOpen(false)
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/what-we-treat"
                            className={styles.mobileServicesItem}
                            onClick={() => {
                              setIsMenuOpen(false)
                              setIsMobileDropdownOpen(false)
                            }}
                            style={{ fontWeight: 600, color: '#e63939' }}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                )
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            })}
            <a 
              href="tel:+12045760033" 
              className={styles.mobileContactButton}
            >
              <Phone className="h-4 w-4 mr-2" />
              (204) 576-0033
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
