'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { clinicLinkEvent, isProductionAnalyticsHost, recordClinicEvent } from '@/lib/analyticsEvents';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  const [enabled, setEnabled] = useState(false);
  // GA4 enhanced measurement already records history-based page changes.
  // Count intentional clinic-link clicks separately from completed enquiries.
  useEffect(() => {
    if (!measurementId || !isProductionAnalyticsHost(window.location.hostname)) return;
    setEnabled(true);
    const trackClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      if (!link) return;
      const name = clinicLinkEvent(link.href);
      if (name) recordClinicEvent(name);
    };
    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, [measurementId]);

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
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
