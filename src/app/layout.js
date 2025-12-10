import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: 'Brillion Group - Financial Excellence & Business Advisory Services',
    template: '%s | Brillion Group'
  },
  description: 'Brillion Group delivers tailored accounting, tax, back-office, and business advisory solutions. Empowering businesses with innovative financial strategies across all industries.',
  keywords: [
    'accounting services',
    'tax preparation',
    'business advisory',
    'bookkeeping',
    'financial consulting',
    'back office services',
    'Toronto accounting firm',
    'business incorporation',
    'tax planning',
    'financial management'
  ],
  authors: [{ name: 'Brillion Group' }],
  creator: 'Brillion Group',
  publisher: 'Brillion Group',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://brilliongroup.com',
    siteName: 'Brillion Group',
    title: 'Brillion Group - Financial Excellence & Business Advisory Services',
    description: 'Brillion Group delivers tailored accounting, tax, back-office, and business advisory solutions. Empowering businesses with innovative financial strategies.',
    images: [
      {
        url: '/BRILLION GROUP LOGO PNG.png',
        width: 1200,
        height: 630,
        alt: 'Brillion Group Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brillion Group - Financial Excellence & Business Advisory Services',
    description: 'Brillion Group delivers tailored accounting, tax, back-office, and business advisory solutions.',
    images: ['/BRILLION GROUP LOGO PNG.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  alternates: {
    canonical: 'https://brilliongroup.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
