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
        <div
      id="chat-widget"
      data-domain="EduCompass"
      data-ref="medhaviclass"
      data-assistants="Teacher,Student"
      data-subject="UPSC, JPSC, BPSC, General Studies, Optional Subjects, Essay Writing, CSAT, CAT, XAT, MAT, Quantitative Aptitude, Logical Reasoning, Data Interpretation, Verbal Ability, Reading Comprehension, Decision Making, NEET, IIT, Physics, Chemistry, Biology, Mathematics, Class 6-12, Social Studies, History, Civics, Geography, Economics, English, Hindi">
      
      </div>
    

      <link href="https://scintillating-starship-0e06e5.netlify.app/main.css" rel="stylesheet"/>
      <Script src= "https://scintillating-starship-0e06e5.netlify.app/main.js" ></Script>
      </body>
    </html>
  );
}
