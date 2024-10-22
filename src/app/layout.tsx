import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/Style/Tailwind.css"
import "@/Style/Global.css"
import { ToastContainer } from 'react-toastify';
import Whatsapp from "@/components/Whatsapp";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medhavi",
  description: "NEET Online Test Series 2022, Best NEET Coaching in Ranchi. Medhavi is your sarthi(Charioteer) for NEET preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
        
      <div id="chat-widget" data-key="6717f7b4d63f600148209adf"></div>
      <Script src="https://cdn.jsdelivr.net/gh/helio-ai/widget@latest/main.js"></Script>
      </body>
    </html>
  );
}
