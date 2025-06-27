import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../provider/Provider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TeamUp",
  description: "A collaborative platform for teams",
  icons: {
    icon:"/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <Providers>
     <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </Providers>
 
  );
}
