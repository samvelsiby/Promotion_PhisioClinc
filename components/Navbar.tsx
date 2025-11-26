'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Phone } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Insurance Providers', href: '/insurance' },
    { name: 'About Us', href: '/about' },
    { name: 'What We Treat', href: '/what-we-treat' },
    { name: 'How We Treat', href: '/how-we-treat' },
    { name: 'Meet Our Team', href: '/team' },
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
              alt="Promotion Physiotherapy Logo"
              width={180}
              height={60}
              priority
              className={styles.logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Call Now Button */}
          <a 
            href="tel:+12045551234" 
            className={styles.contactButton}
          >
            <Phone className="h-4 w-4 mr-2" />
            (204) 555-1234
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+12045551234" 
              className={styles.mobileContactButton}
            >
              <Phone className="h-4 w-4 mr-2" />
              (204) 555-1234
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
