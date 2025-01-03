export const appConfig = {
    i18n: {
      // locales: ["en", "de", "es"] as const,
      locales: ["en", "zh", "hi", "ph", "id", "br", "it", "bd", "de", "my", "pl", "pk", "np", "vn"] as const,
      defaultLocale: "en" as const,
      localeLabels: {
        en: "English",
        zh: "简体中文",
        hi: 'हिंदी',
        ph: 'Cebuano',
        id: 'Bahasa Indonesia',
        br: 'Português',
        it: 'Italiano',
        bd: 'বাংলা',
        de: 'Deutsch',
        my: 'Bahasa Melayu',
        pl: 'Polski',
        pk: 'اردو',
        np: 'नेपाली',
        vn: 'Tiếng Việt'
        // es: "Español",
        // de: "Deutsch",
        // fr: "asdf",
      },
      localeDetection: false,
      localeCurrencies: {
        /* This only works with Stripe for now. For LemonSqueezy, we need to set the currency in the LemonSqueezy dashboard and there can only be one. */
        en: "USD",
        zh: "CNY",
        hi: "INR",
        ph: "PHP",
        id: "IDR",
        br: "BRL",
        it: "EUR",
        bd: "BDT",
        de: "EUR",
        my: "MYR",
        pl: "PLN",
        pk: "PKR",
        np: "NPR",
        vn: "VND"
      },
    },
    auth: {
      oAuthProviders: ["google", "github"],
    },
    siteImage: {
      favicon: "/favicon.ico",
      thumbnail: "/images/thumbnail.jpg",
      logo: "/images/logo.png"
    }
  };
  
