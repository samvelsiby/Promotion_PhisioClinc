'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { clinicLinkEvent, consentState, isProductionAnalyticsHost, recordClinicEvent } from '@/lib/analyticsEvents';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Consent Mode v2.
//
// The tag loads on every production page view. Until the visitor accepts, every
// consent signal is "denied": no cookies are set or read, and GA4 receives only
// cookieless pings that it uses to model aggregate totals. On accept, consent is
// updated to "granted" and normal measurement starts. Ad personalization is never
// granted.
export default function GoogleAnalytics({
  measurementId,
  consent,
}: {
  measurementId: string;
  consent: boolean;
}) {
  const [enabled, setEnabled] = useState(false);
  // Capture the state the tag booted with so the inline script does not re-render.
  const [initialConsent] = useState(consent);

  // GA4 enhanced measurement already records history-based page changes.
  // Count intentional clinic-link clicks separately from completed enquiries.
  useEffect(() => {
    if (!measurementId || !isProductionAnalyticsHost(window.location.hostname)) return;
    setEnabled(true);
    const trackClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      if (!link) return;
      const hit = clinicLinkEvent(link.href);
      if (hit) recordClinicEvent(hit.event, hit.location);
    };
    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, [measurementId]);

  // Push consent changes made after boot (accept, or withdraw via Cookie settings).
  useEffect(() => {
    if (!enabled || consent === initialConsent) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', consentState(consent));
  }, [enabled, consent, initialConsent]);

  // Do not even load Google's scripts on localhost or preview deployments.
  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', ${JSON.stringify({ ...consentState(initialConsent), wait_for_update: 500 })});
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
