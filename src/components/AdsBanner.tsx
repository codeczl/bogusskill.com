'use client'

import Script from 'next/script'

export default function AdsBanner() {
  return (
    <div className="ads-section">
      {process.env.NODE_ENV === 'development' ? (
        // 本地开发环境显示占位符
        <div className="ads-placeholder">
          广告位占位符 - 仅在生产环境显示实际广告
        </div>
      ) : (
        // 生产环境显示实际广告
        <>
          <Script
            async
            data-cfasync="false"
            src="//pl25470335.profitablecpmrate.com/5b554fd1d4e1b17be7b15fe64fe29aec/invoke.js"
            strategy="afterInteractive"
          />
          <div id="container-5b554fd1d4e1b17be7b15fe64fe29aec"></div>
        </>
      )}
    </div>
  )
} 