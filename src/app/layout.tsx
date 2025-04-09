import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'; // Added this import
import Image from 'next/image'
import logo from "../../public/img/logo.png"
import Navigation from '../../components/Navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Tajikistan App",
  description: "Explore Tajikistan culture and travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
      <nav className="w-full bg-white shadow-sm border-b border-gray-200 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src={logo}
        alt="Tajikistan Logo"
        width={80}
        height={50}
        priority
        className="h-16 w-auto object-contain"
      />
      
    </Link>

    <Navigation />
  </div>
</nav>


        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="bg-white mt-12 py-6 border-t">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
            © {new Date().getFullYear()} My Tajikistan App
          </div>
        </footer>
      </body>
    </html>
  );
}