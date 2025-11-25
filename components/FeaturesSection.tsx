'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './FeaturesSection.module.css'

// Icon Component
const Icon = ({ name }: { name: string }) => {
  const iconStyles: React.CSSProperties = {
    width: '30px',
    height: '30px',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (name) {
    case 'person-group':
      return (
        <svg viewBox="0 0 24 24" style={iconStyles}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'hospital':
      return (
        <svg viewBox="0 0 24 24" style={iconStyles}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      )
    case 'document-check':
      return (
        <svg viewBox="0 0 24 24" style={iconStyles}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <polyline points="9 15 12 18 22 8" />
        </svg>
      )
    default:
      return null
  }
}

interface FeatureCard {
  icon: string
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: 'person-group',
    title: 'Trusted Licensed Therapists',
    description:
      'Our two licensed physiotherapists bring experience and personalized care to guide your journey toward pain relief and improved mobility — every step of the way.',
  },
  {
    icon: 'hospital',
    title: 'Fast Access to Care',
    description:
      'When pain strikes, don\'t wait. We offer same-day physiotherapy appointments here to provide you with prompt, effective treatment when you need it most.',
  },
  {
    icon: 'document-check',
    title: 'Stress-Free Insurance Billing',
    description:
      'We simplify your billing by directly working with all major insurance providers, including WCB and MVA claims, so you can focus completely on your recovery.',
  },
]

export default function FeaturesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== null) {
            setActiveIndex(index)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of card is visible
      }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`${styles.card} ${
                activeIndex === index || index === 1 ? styles.cardActive : ''
              } ${index === 1 ? styles.cardMiddle : ''}`}
            >
              <div className={styles.icon}>
                <Icon name={feature.icon} />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer" className={styles.seeMore}>
                Book Appointment
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
