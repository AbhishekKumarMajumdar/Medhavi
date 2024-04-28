
import Image from "next/image";
import Defualt from "@/Images/Products/defult.jpg"
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import Review from "@/components/Review";
import Text from "@/components/Text";
import BasicCard from "@/components/BasicCard";
import CardSection from "@/components/CardSection";
import CourseSection from "@/components/CourseSection";
import Teacher from "@/components/Teacher";
import Ten from "@/Images/Banner/10.png"
import Samagra from "@/Images/Banner/Samagra.png"
import DAKSH from "@/Images/Banner/1.jpg"
import Contect from "@/components/Contect";
import Application from "@/components/Application";
import Cat from "@/Images/Banner/2.jpg"
export default function Home() {

  const data = [
    {
      title: "Class VI to  X ",
      classes: "For Event Student",
      list: [
        "Online Test Series (Monthly Test)",
        "Complete coverage of Board NCERT with special Focus on NTSE",
        "Chapter wise Tests and Major Tests",
        "Live doubt Session",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: Ten,
      direction: true,
    },
    {
      title: "UPSC / JPSC / BPSC",
      classes: "For Event Student",
      list: [
        "This subscription will be valid till 31 march 2025.",
        "Recorded Lectures of class XI syllabus",
        "10000+ quality questions prepared by20+ Top Kota faculties ",
        "DPP, Chapter-wise practice test with solutions and PYQ's",
        "Performance Analysis report to identify weak areas",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: Samagra,
      direction: false,
    },
    {
      title: "Class XI and  XII ",
      classes: "For Event Student",
      list: [
        "Online Test Series (Monthly Test)",
        "Complete coverage of Board NCERT with special Focus on NTSE",
        "Chapter wise Tests and Major Tests",
        "Live doubt Session",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: DAKSH,
      direction: true,
    },
    {
      title: "SSC / Railway / Banking",
      classes: "For every students",
      list: [
        "This subscription will be valid till 31 march 2025.",
        "Recorded Lectures of class XI syllabus",
        "10000+ quality questions prepared by20+ Top Kota faculties ",
        "DPP, Chapter-wise practice test with solutions and PYQ's",
        "Performance Analysis report to identify weak areas",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: DAKSH,
      direction: false,
    }, {
      title: "CAT / XAT / MAT ",
      classes: "For Event Student",
      list: [
        "Online Test Series (Monthly Test)",
        "Complete coverage of Board NCERT with special Focus on NTSE",
        "Chapter wise Tests and Major Tests",
        "Live doubt Session",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: Cat,
      direction: true,
    },
  ]
  return (
    <>
      <Header />
      <Text />
      <CardSection />
      {data.map((e) => (
        <CourseSection key={e.title} data={e} />

      ))}
      <Teacher />
      <Application />
      <CallToAction />
      <Faq />
      <Review />
      <Contect />
    </>
  );
}
