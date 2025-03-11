import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/home/header";
// import { Footer } from "./components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s - GM',
    default: 'GM Concept :: Home',
  },
  description: "GM is a creative studio focused on studio photography, framing, and events.",
  generator: 'GM Studio',
  applicationName: 'GM Studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['studio shoot', 'photography', 'events', 'content', 'publication'],
  authors: [{ name: 'Agbasimere Joshua Francis' }],
  creator: 'NT Systems',
  publisher: '',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL('https://www.gmcreativeconcept.com'),

  openGraph: {
    title: {
      template: '%s - GM',
      default: 'GM Concept :: Home',
    },
    description: "GM is a creative studio focused on studio photography, framing, and events.",
    images: [
      {
        url: 'https://cdn.netintui.com/image/platform/netintui_masthead.png',
        // width: 1200,
        // height: 630,
        alt: "GM Concept Studio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gmconcept',
    title: 'GM Concept',
    description: "GM is a creative studio focused on studio photography, framing, and events.",
    images: ['https://cdn.netintui.com/image/platform/netintui_masthead.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
