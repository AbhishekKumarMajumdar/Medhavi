import CourseSection from '@/components/CourseSection'
import React from 'react'

import Ten from "@/Images/Banner/10.png"

import Samagra from "@/Images/Banner/2025.png"

import DAKSH from "@/Images/Banner/1.jpg"

import Cat from "@/Images/Banner/2.jpg"

const page = () => {
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
                "10000+ quality questions prepared by20+ Top Ranchi faculties ",
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
                "10000+ quality questions prepared by20+ Top Ranchi faculties ",
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
            <section className="w-full px-6 md:px-10 lg:px-20">
                <h1 className="text-center text-xl sm:text-2xl md:text-4xl w-full py-6 text-[#151F63] leading-[40px] md:leading-[65px]">
                    Popular Courses
                </h1>
                {data.map((e) => (
                    <CourseSection key={e.title} data={e} />

                ))}
            </section>
        </>
    )
}

export default page