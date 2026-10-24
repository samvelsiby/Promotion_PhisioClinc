import Image from 'next/image'
import { ArrowUpRight, Phone, MapPin, CalendarDays, BadgeCheck } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/constants'
import styles from './HeroArch.module.css'

export default function HeroArch() {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <div id="home-hero" className={styles.panel}>
        <div className={`${styles.media} ${styles.mediaLeft}`}>
          <Image
            src="/Hero/hero2.jpg"
            alt="Physiotherapist assessing a patient's shoulder movement during treatment"
            width={6720}
            height={4480}
            priority
            sizes="(max-width: 900px) 80vw, 420px"
            quality={80}
          />
        </div>
        <div className={`${styles.media} ${styles.mediaRight}`} aria-hidden="true">
          <Image
            src="/Hero/hero1.jpg"
            alt=""
            width={5472}
            height={3648}
            sizes="460px"
            quality={80}
          />
        </div>

        <div className={styles.copy}>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.location}>Physiotherapy in St. Vital, Winnipeg</span>
            <span className={styles.headline}>Driven by care.<br />Powered by motion.</span>
          </h1>
          <p className={styles.description}>
            Founded by two dedicated physiotherapists with a shared dream and vision to help and
            serve our community with compassionate, personalized care. We provide evidence-based
            treatments tailored to your unique needs.
          </p>
          <div className={styles.actions}>
            <a
              href={COMPANY_CONTACT.BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.book}
            >
              Book an appointment <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={`tel:${COMPANY_CONTACT.PHONE}`} className={styles.call}>
              <Phone size={16} aria-hidden="true" />
              {COMPANY_CONTACT.PHONE_DISPLAY}
            </a>
          </div>
          <p className={styles.lastMinute}>
            Looking for an earlier appointment?{' '}
            <a href="https://www.lastminutephysio.com/" target="_blank" rel="noopener noreferrer">
              Check Last Minute Physio <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </p>
          <a href="/what-we-treat" className={styles.findCare}>
            Find care for your condition <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <a href="#physiotherapists" className={styles.teamCard}>
          <span className={styles.portraits} aria-hidden="true">
            <Image src="/team/ben-studio.png" alt="" width={48} height={64} className={styles.portrait} />
            <Image src="/team/lijo-studio.png" alt="" width={48} height={64} className={styles.portrait} />
          </span>
          <span className={styles.teamText}>
            Meet the people
            <strong>behind your care</strong>
          </span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <div className={styles.details}>
          <span><CalendarDays size={17} aria-hidden="true" />Open 7 days a week</span>
          <a href="/insurance"><BadgeCheck size={17} aria-hidden="true" />Direct billing available</a>
          <span><MapPin size={17} aria-hidden="true" />{COMPANY_CONTACT.ADDRESS.street}, Winnipeg</span>
        </div>
      </div>
    </section>
  )
}
