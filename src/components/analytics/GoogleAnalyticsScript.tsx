"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID ='G-8LB0LQQGKM';

export function GoogleAnalyticsScript() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `
        }}
      />
    </>
  );
}

export function useGoogleAnalytics() {
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    if (typeof window === "undefined" || !(window as any).gta) {
      return;
    }

    (window as any).gta("event", event, data);
  };

  return {
    trackEvent,
  };
}
