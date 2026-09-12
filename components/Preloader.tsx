'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Preloader.module.css'

/** A brief brand introduction, independent of page/image loading. */
export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dismiss = () => setVisible(false)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) {
      dismiss()
      return
    }

    // CSS also dismisses the intro if hydration is delayed or unavailable.
    const timer = window.setTimeout(dismiss, 1000)
    window.addEventListener('pointerdown', dismiss, { once: true, passive: true })
    window.addEventListener('keydown', dismiss, { once: true })
    motion.addEventListener('change', dismiss)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('pointerdown', dismiss)
      window.removeEventListener('keydown', dismiss)
      motion.removeEventListener('change', dismiss)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={styles.intro}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setVisible(false)
      }}
    >
      <div className={styles.brand}>
        <Image src="/navbar/Navbar.svg" alt="" width={250} height={80} className={styles.logo} />
        <p className={styles.motto}>Driven by Care. Powered by Motion.</p>
        <span className={styles.track}><span className={styles.stroke} /></span>
      </div>
    </div>
  )
}
