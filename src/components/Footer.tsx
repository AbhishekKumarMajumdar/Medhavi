import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/Images/Logo/Medhavi.png"
import Privacy from './Privacy'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="">
                        <Image
                            src={Logo}
                            alt="logo"
                            height={224}
                            width={156}
                        />
                        <p className='text-sm pl-6 font-medium text-white'>305, 3rd Floor Hari Om Tower , Ranchi - 834001 </p>

                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
                    >
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Company</p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/">
                                            Chapters
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/">
                                            Community
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/">
                                            Mentorship
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Legal</p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/Privacy">
                                            Privacy
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="/">
                                            Terms
                                        </a>
                                    </li>


                                </ul>
                            </nav>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Social Media</p>

                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="https://www.facebook.com/profile.php?id=61558591095562&mibextid=rS40aB7S9Ucbxw6v">
                                            <FaFacebook size={22} />
                                        </a>
                                    </li>


                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="https://www.instagram.com/_classesmedhavi?igsh=Ymhlc3M4bnRxYWRl">
                                            <FaInstagram size={22} />
                                        </a>
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div className="text-center sm:text-left justify-center items-center flex flex-col flex-wrap">
                            <div className="mb-4">

                                <Image
                                    src={"https://via.placeholder.com/100x100"}
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="text-lg font-medium text-white">Download the app</p>

                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-12 border-t border-gray-800">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2024 Copyright Medhavi. & Design by OSCode &trade; All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer