'use client'

import styles from './ComingSoon.module.css'

export default function ComingSoon() {

  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundCircle1}></div>
      <div className={styles.backgroundCircle2}></div>
      
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            src="/logo.jpeg"
            alt="Promotion Physiotherapy Logo"
            className={styles.logo}
          />
        </div>

        {/* Main Heading */}
        <h1 className={styles.heading}>We're Coming Soon</h1>
        
        {/* Motto */}
        <p className={styles.motto}>Driven by Care. Powered by Motion.</p>

        {/* Description */}
        <p className={styles.description}>
          Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care.
        </p>

        {/* Location */}
        <div className={styles.locationBox}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>567 St. Anne's Rd, Winnipeg, MB R2M 5B2</span>
        </div>

        {/* Tagline */}
        <p className={styles.communityText}>
          Your Journey to Better Health Starts Here
        </p>
      </div>

      {/* Wave Decoration */}
      <div className={styles.wave}></div>
    </div>
  )
}
