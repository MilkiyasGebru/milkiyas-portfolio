import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milkiyas Portfolio",
  description: "Milkiyas Portfolio website depicting his experience and the projects that he have worked on ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
