import './globals.css';
import '@radix-ui/themes/styles.css';
import React from 'react';
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout';
import { Metadata } from 'next'
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { PlausibleAnalyticsScript } from "@/components/analytics/PlausibleAnalyticsScript";
import GoogleAdsenseScript from "@/components/ads/GoogleAdsenseScript";
import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { appConfig } from '@/lib/appConfig'

const inter = Inter({ subsets: ['latin'] })
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'Bogus Skill: Explore the World of Fruitmaster Manga & Anime',
    template: '%s | Bogus Skill'
  },
  description: 'Dive into the thrilling universe of Bogus Skill. Read manga, watch anime, and join our passionate community!',
  authors: { name: 'Bogus Skill', url: 'https://bogusskill.com/' },
  keywords: 'manga, anime, bogus skill, fruitmaster, fantasy manga',
  alternates: {
    canonical: "https://bogusskill.com/", 
    languages: {
      "en-US": "https://bogusskill.com/en/",
      "zh-CN": "https://bogusskill.com/zh/",
    }
  },
  icons: {
    icon: appConfig.siteImage.favicon,
  },
  openGraph: {
    images: [appConfig.siteImage.thumbnail],
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <meta name="google-adsense-account" content="ca-pub-8919061004428483" />
          <link rel="icon" href={appConfig.siteImage.favicon} />
        </head>
        <body className={cn(inter.className, sansFont.variable)}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider 
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              <Layout>{children}</Layout>
              <GoogleAdsenseScript />
              <GoogleAnalyticsScript />
              <PlausibleAnalyticsScript />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}