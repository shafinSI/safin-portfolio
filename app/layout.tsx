import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://safin-portfolio.vercel.app";
const NAME = "Shafin Imtiaz";
const ALT_NAME = "Safin Imtiaz";
const GITHUB_URL = "https://github.com/shafinSI";
const LINKEDIN_URL = "https://www.linkedin.com/in/shafin-imtiaz-81a084267/";
const EMAIL = "shafinimtiaz21@gmail.com";

const TITLE = `${NAME} | ML Engineer & Full-Stack Developer`;
const DESCRIPTION =
  "Shafin Imtiaz (Safin Imtiaz) is a final-year CSE student at United International University and Machine Learning Engineering Intern at FlyRank AI, building full-stack web apps and ML projects with Next.js, React and Python. Based in Dhaka, Bangladesh.";

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
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Shafin Imtiaz",
    "Safin Imtiaz",
    "Shafin Imtiaz portfolio",
    "Machine Learning Engineer Bangladesh",
    "Full Stack Developer",
    "Next.js Developer Bangladesh",
    "React Developer",
    "FlyRank AI intern",
    "United International University",
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
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${NAME} | Portfolio`,
    locale: "en_US",
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
    title: TITLE,
    description: DESCRIPTION,
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
    alternateName: [ALT_NAME],
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    jobTitle: "Machine Learning Engineering Intern",
    worksFor: {
      "@type": "Organization",
      name: "FlyRank AI",
    },
    affiliation: {
      "@type":