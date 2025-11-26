'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navLinks = [
    { name: 'Insurance Providers', href: '/insurance' },
    { name: 'About Us', href: '/about' },
    { name: 'What We Treat', href: '/services' },
    { name: 'How We Treat', href: '/how-we-treat' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blogs' },
  ]

  const services = [
    {
      name: 'Electrotherapeutic Modalities',
      href: '/services/electrotherapeutic-modalities',
    },
    {
      name: 'Pre/ Post Surgical Conditions',
      href: '/services/pre-post-surgical-conditions',
    },
    {
      name: 'Motor Vehicle Accident Recovery',
      href: '/services/motor-vehicle-accident-recovery',
    },
    {
      name: 'Work Reconditioning Program',
      href: '/services/work-reconditioning-program',
    },
    {
      name: 'Sports Injury Rehabilitation',
      href: '/services/sports-injury-rehabilitation',
    },
    {
      name: 'Acupuncture & Dry Needling',
      href: '/services/acupuncture-dry-needling',
    },
    {
      name: 'Chronic Pain Management',
      href: '/services/chronic-pain-management',
    },
    {
      name: 'Workplace Injury Treatment',
      href: '/services/workplace-injury-treatment',
    },
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
              alt="Promotion Physiotherapy Logo"
              width={180}
              height={60}
              priority
              className={styles.logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navLinks.map((link) =>
              link.name === 'What We Treat' ? (
                <li
                  key={link.name}
                  className={styles.navItemWithDropdown}
                >
                  <button
                    type="button"
                    className={styles.navLinkButton}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    aria-expanded={isServicesOpen}
                  >
                    {link.name}
                    <span className={styles.navLinkCaret}>▾</span>
                  </button>
                  <div
                    className={`${styles.servicesDropdown} ${
                      isServicesOpen ? styles.servicesDropdownOpen : ''
                    }`}
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className={styles.servicesDropdownItem}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.name}>
                  <a href={link.href} className={styles.navLink}>
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Contact Button */}
          <a 
            href="https://pmphysio.juvonno.com/portal/publicbook.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            Contact
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
            {navLinks.map((link) =>
              link.name === 'What We Treat' ? (
                <div key={link.name} className={styles.mobileServicesGroup}>
                  <button
                    type="button"
                    className={styles.mobileServicesToggle}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    aria-expanded={isServicesOpen}
                  >
                    <span>What We Treat</span>
                    <span
                      className={`${styles.mobileServicesCaret} ${
                        isServicesOpen ? styles.mobileServicesCaretOpen : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {isServicesOpen && (
                    <div className={styles.mobileServicesList}>
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className={styles.mobileServicesItem}
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <a 
              href="https://pmphysio.juvonno.com/portal/publicbook.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileContactButton}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
