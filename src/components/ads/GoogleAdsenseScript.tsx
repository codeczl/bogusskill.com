"use client";

import Script from 'next/script'

const GoogleAdsenseScript = () => {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8919061004428483`}
        crossOrigin="anonymous"
      />
      <Script id="adsbygoogle-load" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
    </>
  )
}

export default GoogleAdsenseScript