

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../provider/Provider";
import { Toaster } from "react-hot-toast";









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
  description: "Team Collaboration Tools",
};

export default function RootLayout({ children }) {
  return (
       
    <Providers>
     <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                  <Toaster position="top-center"></Toaster>
              {children}

      </body>
    </html>
    </Providers>
         
 
  );
}
