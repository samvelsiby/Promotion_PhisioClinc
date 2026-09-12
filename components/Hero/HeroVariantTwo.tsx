import Image from 'next/image'
import { ArrowUpRight, Phone, MapPin, CalendarDays, BadgeCheck } from 'lucide-react'
import { COMPANY_CONTACT } from '@/lib/constants'
import styles from './HeroVariantTwo.module.css'

export default function HeroVariantTwo() {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <div id="home-hero" className={styles.inner}>
        <div className={styles.headingRow}>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.location}>Physiotherapy in St. Vital, Winnipeg</span>
            <span className={styles.headline}>Driven by care.<br />Powered by motion.</span>
          </h1>
          <a href="#physiotherapists" className={styles.teamLink}>
            <span className={styles.portraits} aria-hidden="true">
              <Image src="/team/ben-studio.png" alt="" width={48} height={64} className={styles.portrait} />
              <Image src="/team/lijo-studio.png" alt="" width={48} height={64} className={styles.portrait} />
            </span>
            <span>Meet the people<br /><strong>behind your care</strong></span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.storyRow}>
          <figure className={styles.figure}>
            <div className={styles.photo}>
              <div className={styles.crop}>
                <Image src="/hero2/Hero page (1).png" alt="Physiotherapist assessing a patient's shoulder movement during treatment" fill priority sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 90vw, 152vw" quality={80} className={styles.image} />
              </div>
            </div>
            <figcaption className={styles.caption}><MapPin size={16} aria-hidden="true" />{COMPANY_CONTACT.ADDRESS.street}, Winnipeg</figcaption>
          </figure>

          <div className={styles.story}>
            <div className={styles.brandMark} aria-hidden="true"><span /><span /><span /></div>
            <p className={styles.description}>Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care. We provide evidence-based treatments tailored to your unique needs.</p>
            <a href={COMPANY_CONTACT.BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.book}>Book an appointment <ArrowUpRight size={22} aria-hidden="true" /></a>
            <a href={`tel:${COMPANY_CONTACT.PHONE}`} className={styles.call}><Phone size={16} aria-hidden="true" />{COMPANY_CONTACT.PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className={styles.details}>
          <span><CalendarDays size={17} aria-hidden="true" />Open 7 days a week</span>
          <a href="/insurance"><BadgeCheck size={17} aria-hidden="true" />Direct billing available</a>
          <a href="/what-we-treat">Find care for your condition <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
