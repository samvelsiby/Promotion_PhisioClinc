import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone, MapPin, CalendarDays, BadgeCheck, Star } from 'lucide-react'
import { COMPANY_CONTACT, GOOGLE_RATING, bookingHref } from '@/lib/constants'
import styles from './HeroVariantTwo.module.css'

export default function HeroVariantTwo() {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <div id="home-hero" className={styles.inner}>
        <div className={styles.headingRow}>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.location}>Physiotherapy in St. Vital, Winnipeg</span>
            <span className={styles.headline}>Driven by care.<br /><span className={styles.motionLine}>Powered by motion.</span></span>
          </h1>
          <p className={styles.mobileIntro}>Hands-on care for pain and injury.<br />A recovery plan built around you.</p>
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
              <Image src="/Hero/hero2.jpg" alt="Physiotherapist assessing a patient's shoulder movement during treatment" width={6720} height={4480} priority sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw" quality={80} className={styles.image} />
            </div>
            <figcaption className={styles.caption}><MapPin size={16} aria-hidden="true" />{COMPANY_CONTACT.ADDRESS.street}, Winnipeg</figcaption>
          </figure>

          <div className={styles.story}>
            <div className={styles.brandMark} aria-hidden="true"><span /><span /><span /></div>
            <p className={styles.description}>Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care. We provide evidence-based treatments tailored to your unique needs.</p>
            <p className={`${styles.description} ${styles.serviceDescription} mt-4 [&_a]:underline [&_a]:underline-offset-4`}>Visit our Meadowood clinic on St. Anne’s Road for <Link href="/services/back-pain-sciatica-relief">back pain and sciatica care</Link>, <Link href="/services/motor-vehicle-accident-recovery">rehabilitation after a collision</Link> or <Link href="/services/work-injuries">work-injury physiotherapy</Link>. Check <Link href="/first-visit">first-visit information</Link> before booking.</p>
            <a
              href={COMPANY_CONTACT.REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rating}
              aria-label={`Rated ${GOOGLE_RATING.value} out of 5 from ${GOOGLE_RATING.count} Google reviews. Read the reviews on Google.`}
            >
              <svg className={styles.googleMark} viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <strong className={styles.ratingValue}>{GOOGLE_RATING.value}</strong>
              <span className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </span>
              <span className={styles.ratingCount}>{GOOGLE_RATING.count} Google reviews</span>
            </a>
            <div className={styles.actions}>
              <a href={bookingHref('hero')} data-rt-goal="book-hero" target="_blank" rel="noopener noreferrer" className={styles.book}>Book an appointment <ArrowUpRight size={22} aria-hidden="true" /></a>
              <Link href="/request-appointment" data-rt-goal="request-hero" className={styles.request}>
                <span>Request an appointment<small>No account needed. We call you back.</small></span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <a href={`tel:${COMPANY_CONTACT.PHONE}`} className={styles.call}><Phone size={16} aria-hidden="true" />{COMPANY_CONTACT.PHONE_DISPLAY}</a>
            </div>
            <p className={styles.lastMinute}>
              Looking for an earlier appointment?{' '}
              <a href="https://www.lastminutephysio.com/" target="_blank" rel="noopener noreferrer">Check Last Minute Physio <ArrowUpRight size={15} aria-hidden="true" /></a>
            </p>
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
