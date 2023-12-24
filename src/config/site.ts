import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://www.tanthif.com"),
  title: {
    default: "تنظيف",
    template: "%s | تنظيف",
  },
  manifest: "/manifest.json",
  applicationName: "تنظيف",
  creator: "تنظيف",
  authors: [
    {
      name: "تنظيف",
      url: "https://www.tanthif.com/about",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description: "تنظيف توفر خدمات التنظيف المحترفة في منطقتك",
  openGraph: {
    title: "تنظيف",
    description: "تنظيف توفر خدمات التنظيف المحترفة في منطقتك",
    url: new URL("https://www.tanthif.com"),
    siteName: "تنظيف",
    images: ["/og-image.jpg"],
    locale: "ar",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "",
    creator: "",
    card: "summary_large_image",
    images: [""],
  },

  keywords: [
    "تنظيف",
    "تنظيف المنازل",
    "تنظيف الشقق",
    "خدمات التنظيف",
    "شركات التنظيف",
    "منظفات",
    "منظفات طبيعية",
    "تنظيف خضراء",
    "نصائح التنظيف",
    "ترتيب",
    "تنظيم",
  ],
};

export const links = {
  twitter: "",
  facebook: "",
  tel: "",
};
