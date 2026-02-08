'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { Phone, ChevronDown, Star } from 'lucide-react'
import styles from './Navbar.module.css'
import { allBentoItems } from './BentoGrid/bentoItems'
import { COMPANY_CONTACT } from '@/lib/constants'

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

          <div className="flex gap-4">
            {/* Review Us Button */}
            <a
              href="https://www.google.com/search?q=promotion+physiotherapy+winnipeg&sca_esv=2c3166719956691c&sxsrf=ANbL-n5ImlEWpIcsRL6XoCVQda6ySlt6NQ%3A1768778154620&ei=qmltaa_LJdKDp84PgZfDqAI&oq=promotion+physiotherapy+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHByb21vdGlvbiBwaHlzaW90aGVyYXB5ICoCCAAyBBAjGCcyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyCxAAGIAEGJECGIoFMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiyClDKAVjKAXABeAGQAQCYAdUBoAHVAaoBAzItMbgBA8gBAPgBAZgCAqAC4gHCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBZgDAIgGAZAGCpIHBTEuMC4xoAfRCrIHAzItMbgH4AHCBwcwLjEuMC4xyAcKgAgA&sclient=gws-wiz-serp#lrd=0x52ea7719c694ca6f:0xcc3a91f85bf16305,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewButton}
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Review Us
            </a>

            {/* Contact Us Button */}
            <a
              href={`tel:${COMPANY_CONTACT.PHONE}`}
              className={styles.contactButton}
            >
              <Phone className="h-4 w-4 fill-current" />
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.mobileMenuButtonOpen : ''
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
          <div className={styles.mobileMenuLogo}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/navbar/Navbar.svg"
                alt="Pro Motion Physiotherapy Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
            <button
              className={styles.mobileMenuClose}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <div className={styles.mobileMenuCloseIcon}></div>
            </button>
          </div>
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
            <div className={styles.mobileActionButtons}>
              <a
                href="https://www.google.com/search?q=promotion+physiotherapy+winnipeg&sca_esv=2c3166719956691c&sxsrf=ANbL-n5ImlEWpIcsRL6XoCVQda6ySlt6NQ%3A1768778154620&ei=qmltaa_LJdKDp84PgZfDqAI&oq=promotion+physiotherapy+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHByb21vdGlvbiBwaHlzaW90aGVyYXB5ICoCCAAyBBAjGCcyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyCxAAGIAEGJECGIoFMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiyClDKAVjKAXABeAGQAQCYAdUBoAHVAaoBAzItMbgBA8gBAPgBAZgCAqAC4gHCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBZgDAIgGAZAGCpIHBTEuMC4xoAfRCrIHAzItMbgH4AHCBwcwLjEuMC4xyAcKgAgA&sclient=gws-wiz-serp#lrd=0x52ea7719c694ca6f:0xcc3a91f85bf16305,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileReviewButton}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Review Us
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.PHONE}`}
                className={styles.mobileContactButton}
              >
                <Phone className="h-4 w-4 mr-2" />
                {COMPANY_CONTACT.PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
