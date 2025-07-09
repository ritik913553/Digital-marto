import { FacebookIcon, Instagram, LinkedinIcon, Twitter, Youtube } from "lucide-react";
import React from "react";
import {Link} from 'react-router-dom'
const ContactSection = () => {
    return (
        <div className="poppins-font sm:p-10 p-5">
            {" "}
            <footer className="bg-white text-black max-w-4xl mx-auto ">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Left Section */}
                    <div className="flex flex-col gap-3 max-w-sm">
                        <div className="">
                            <img
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                                src="./logo2.png"
                                className="h-24 w-24 scale-150 cursor-pointer hover:scale-125 -ml-2 "
                                alt=""
                            />
                        </div>
                        <div className="text-sm leading-6">
                            Jamshedpur, <br /> Jharkhand, India
                        </div>
                        <div className="text-sm  mt-5 flex gap-x-10 items-center justify-start">
                            <p>
                                <span className="font-semibold">
                                    Phone number
                                </span>
                                <br />
                                +91-9876543210
                            </p>
                            <p className="">
                                <span className="font-semibold">Email</span>
                                <br />
                                <a
                                    href="mailto:support@skipmatrix.com"
                                    className="hover:underline"
                                >
                                    hello@digitalmato.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Link Sections */}
                    <div className="grid grid-cols-3 sm:mt-10 gap-10 sm:text-sm text-xs">
                        {/* Quick Links */}
                        <div>
                            <h3 className="font-black mb-3">Quick links</h3>
                            <ul className="sm:space-y-2 space-y-5">
                                <li>
                                    <Link to={'/restaurants'} className="hover:underline hover:text-blue-600">
                                        Restaurants & Cafes
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/salon'} className="hover:underline hover:text-blue-600">
                                        Salon & Spa
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/edtech'} className="hover:underline hover:text-blue-600">
                                        EdTech Brands
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/interior-designe'} className="hover:underline hover:text-blue-600">
                                        Interior Design Studios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline hover:text-blue-600">
                                        About us
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="hover:underline hover:text-blue-600">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="">
                            <h3 className="font-black mb-3">Social</h3>
                            <ul className="space-y-4 text-center">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/share/1Ay5UYR62T/"
                                        className=" text-[#048099] flex items-center gap-2"
                                    >
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/digitalmato_?igsh=MTlvN3J3NmFjaGlrNg=="
                                        className="text-[#7255A1]"
                                    >
                                        <Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=" text-[#048099]">
                                        <LinkedinIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="">
                                        <Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className=" text-red-500">
                                        <Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-black mb-3">Legal</h3>
                            <ul className="space-y-4 sm:space-y-2">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms of service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Cookie policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-sm text-gray-800 mt-10">
                    © 2024 digitalmato. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default ContactSection;
