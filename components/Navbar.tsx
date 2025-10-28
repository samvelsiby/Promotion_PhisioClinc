'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Meet Our Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <div className={styles.topBar}></div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Promotion Physiotherapy Logo"
              width={60}
              height={60}
              priority
              className={styles.logo}
            />
          </div>

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

          {/* Contact Button */}
          <button className={styles.contactButton}>Contact</button>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
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
            <button className={styles.mobileContactButton}>Contact</button>
          </div>
        )}
      </nav>
    </>
  )
}
