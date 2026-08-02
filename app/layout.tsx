import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://safin-portfolio.vercel.app";
const NAME = "Shafin Imtiaz";
const GITHUB_URL = "https://github.com/shafinSI";
// REPLACE with your real LinkedIn profile URL
const LINKEDIN_URL = "https://www.linkedin.com/in/shafin-imtiaz-81a084267/";
const EMAIL = "shafinimtiaz21@gmail.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} | Full Stack Developer & AI Enthusiast`,
    template: `%s | ${NAME}`,
  },
  description:
    "Portfolio of Shafin Imtiaz — Full Stack Developer, AI/ML enthusiast, and Cybersecurity learner based in Dhaka, Bangladesh. Explore projects, skills, and experience in Next.js, React, TypeScript, and Python.",
  keywords: [
    "Shafin Imtiaz",
    "Full Stack Developer",
    "Next.js Developer Bangladesh",
    "React Developer",
    "AI Enthusiast",
    "Machine Learning Portfolio",
    "Cybersecurity Learner",
    "Software Engineer Portfolio Dhaka",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${NAME} | Full Stack Developer & AI Enthusiast`,
    description:
      "Full Stack Developer, AI/ML enthusiast, and Cybersecurity learner. Explore projects, skills, and experience.",
    siteName: `${NAME} | Portfolio`,
    locale: "en_US",
    // Add an OG image at public/og-image.png (1200x630) for a richer preview
    // when links to this site are shared on social media / iMessage / Slack.
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${NAME} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} | Full Stack Developer & AI Enthusiast`,
    description:
      "Full Stack Developer, AI/ML enthusiast, and Cybersecurity learner.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Once you set up Google Search Console, put the verification code here:
  // verification: { google: "REPLACE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [GITHUB_URL, LINKEDIN_URL].filter((url) => !url.includes("REPLACE")),
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Machine Learning",
      "Cybersecurity",
      "IoT",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${NAME} | Portfolio`,
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: NAME,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
