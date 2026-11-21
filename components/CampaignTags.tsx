'use client'

import { useEffect } from 'react'
import { rememberCampaign, withCampaign } from '@/lib/analyticsEvents'

// Carries the campaign a visit came from into booking links, so the booking
// portal step counter can report completed bookings by campaign.
//
// Rendered by CookieConsent under the same rule as the visit counter: left out
// once a visitor has chosen "Reject optional".
export default function CampaignTags() {
  useEffect(() => {
    rememberCampaign()
    const tag = (event: Event) => {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest('a')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href) return
      const tagged = withCampaign(link.href)
      if (tagged !== link.href) link.href = tagged
    }
    // pointerdown covers taps, middle clicks and "open in new tab"; click covers the keyboard.
    document.addEventListener('pointerdown', tag, true)
    document.addEventListener('click', tag, true)
    return () => {
      document.removeEventListener('pointerdown', tag, true)
      document.removeEventListener('click', tag, true)
    }
  }, [])
  return null
}
