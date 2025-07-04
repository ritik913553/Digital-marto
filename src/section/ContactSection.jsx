import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const ContactSection = () => {
    return (
        <div className="poppins-font p-10">
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
                            20619 Torrence Chapel Rd
                            <br />
                            Suite 116 #1040
                            <br />
                            Cornelius, NC 28031
                            <br />
                            United States
                        </div>
                        <div className="text-sm  mt-5 flex gap-x-10 items-center justify-center">
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
                    <div className="grid grid-cols-3 sm:mt-10 gap-8 text-sm">
                        {/* Quick Links */}
                        <div>
                            <h3 className="font-black mb-3">Quick links</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="font-black mb-3">Social</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/share/1Ay5UYR62T/"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        Facebook 
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/digitalmato_?igsh=MTlvN3J3NmFjaGlrNg=="
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-black mb-3">Legal</h3>
                            <ul className="space-y-1">
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
                    © 2024 Skipmatrix. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default ContactSection;
