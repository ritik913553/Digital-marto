import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from "../component/MobileNav";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // Only trigger after scrolling 1 viewport height
            if (currentScroll > window.innerHeight - 600) {
                if (currentScroll > lastScroll) {
                    setShow(false); // scrolling down
                } else {
                    setShow(true); // scrolling up
                }
            } else {
                setShow(true); // always show at top
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    const current = useLocation().pathname;
    useEffect(() => {
        console.log(current);
    }, [current]);

    return (
        <div
            className={`poppins-font fixed top-0 z-50 w-full  sm:px-40 px-5 transition-transform duration-500 ${
                show ? "translate-y-0" : "-translate-y-full"
            } bg-transparent backdrop-blur-md`}
        >
            <div className="h-20 flex items-center justify-between w-full">
                <a href="/" className="cursor-pointer h-22 w-22 ">
                    <img
                        src="/logo2.png"
                        className="h-full w-full scale-170"
                        alt=""
                    />
                </a>
                <div className="hidden  sm:flex justify-between w-full pl-20 items-center ">
                    <ul className="flex items-center gap-8 font-medium  text-sm">
                        <li  onMouseEnter={() => setShowServices(true)}>
                            <Link
                                to="/"
                                className=" px-3 py-2 flex items-center gap-x-2 hover:bg-gray-200 rounded-full duration-400  transition-all "
                                style={{
                                    top: showServices ? "5rem" : "auto",
                                }}
                            >
                                Services <FaAngleDown />
                            </Link>
                            {showServices && (
                                <div
                                    onMouseLeave={() => setShowServices(false)}
                                    className="bg-gray-100 w-64  p-10 absolute top-20 rounded-xl"
                                >
                                    <ul className="flex flex-col gap-y-3 ">
                                        <li
                                            className={`${
                                                current === "/restaurants"
                                                    ? "border-b-2"
                                                    : ""
                                            } px-2 py-1  hover:bg-gray-200 rounded-md`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setShowServices(false)
                                                }
                                                to="/restaurants"
                                            >
                                                Restaurants & Cafes
                                            </Link>
                                        </li>
                                        <li
                                            className={`${
                                                current === "/salon"
                                                    ? "border-b-2"
                                                    : ""
                                            } px-2 py-1  hover:bg-gray-200 rounded-md`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setShowServices(false)
                                                }
                                                to="/salon"
                                            >
                                                Saloon & Spa
                                            </Link>
                                        </li>
                                        <li
                                            className={`${
                                                current === "/interior-designe"
                                                    ? "border-b-2"
                                                    : ""
                                            } px-2 py-1  hover:bg-gray-200 rounded-md`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setShowServices(false)
                                                }
                                                to="/interior-designe"
                                            >
                                                Interior Design Studios
                                            </Link>
                                        </li>
                                        <li
                                            className={`${
                                                current === "/edtech"
                                                    ? "border-b-2"
                                                    : ""
                                            } px-2 py-1  hover:bg-gray-200 rounded-md`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setShowServices(false)
                                                }
                                                to="/edtech"
                                            >
                                                EdTech Brands
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className={`${current === "/" ? "border-b-2" : ""}`}
                        >
                            <Link
                                to="/"
                                className="px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all"
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            className={`${
                                current === "/contact-us" ? "border-b-2" : ""
                            }`}
                        >
                            <Link
                                to="/contact-us"
                                className="px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li
                            className={`${
                                current === "/about-us" ? "border-b-2" : ""
                            }`}
                        >
                            <Link
                                to="/about-us"
                                className="px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <div className="flex gap-x-5">
                        <Button title="Get Started" />
                    </div>
                </div>
                {!mobileNavOpen ? (
                    <button
                        onClick={() => setMobileNavOpen(true)}
                        className=" sm:hidden text-4xl"
                    >
                        {" "}
                        <FiAlignJustify />{" "}
                    </button>
                ) : (
                    <button
                        onClick={() => setMobileNavOpen(false)}
                        className=" sm:hidden text-4xl"
                    >
                        {" "}
                        <RxCross1 />{" "}
                    </button>
                )}
            </div>
            <div className="sm:hidden overflow-hidden ">
                {mobileNavOpen && (
                    <MobileNav setMobileNavOpen={setMobileNavOpen} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
