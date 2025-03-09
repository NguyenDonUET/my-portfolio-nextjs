import Footer from "@/components/Footer"
import Header from "@/components/header/Header"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Dôn Nguyên",
  description: "Personal portfolio of Dôn Nguyên",
  keywords: ["portfolio", "personal", "Dôn Nguyên", "developer", "frontend"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className='mt-[80px]'>{children}</main>

        {/* <ToggleTheme /> */}
        <Footer />
      </body>
    </html>
  )
}
