import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MobileNav = ({ setMobileNavOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const current = useLocation().pathname;

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -100 }}
            className="mt-4 poppins-font text-lg pb-10 font-bold flex flex-col gap-y-5 p-1  "
        >
            <ul className="flex flex-col gap-y-5">
                 <Link
                    onClick={() => setMobileNavOpen(false)}
                    to="/"
                    className={`${current === "/" ? "text-[#0488A0]" : ""}`}
                >
                    Home
                </Link>
               <Link
                    to={"/our-team"}
                    onClick={() => setMobileNavOpen(false)}
                    className={`${
                        current === "/our-team" ? "text-[#0488A0]" : ""
                    }`}
                >
                    Our Team
                </Link>
                <li
                    className="flex  py-2  items-center gap-x-3 cursor-pointer"
                    onClick={toggleOpen}
                >
                    Industries <FaAngleDown />
                </li>
                {isOpen && (
                    <div className="flex flex-col gap-y-3 ml-7">
                        <Link
                            onClick={() => setMobileNavOpen(false)}
                            to="/restaurants"
                            className={`text-lg ${
                                current === "/restaurants"
                                    ? "text-[#0488A0]"
                                    : ""
                            } `}
                        >
                            Restaurants & Cafes
                        </Link>

                        <Link
                            onClick={() => setMobileNavOpen(false)}
                            to="/salon"
                            className={`text-lg ${
                                current === "/salon" ? "text-[#0488A0]" : ""
                            } `}
                        >
                            Salons & Spas
                        </Link>

                        <Link
                            onClick={() => setMobileNavOpen(false)}
                            to="/interior-designe"
                            className={`text-lg ${
                                current === "/interior-designe"
                                    ? "text-[#0488A0]"
                                    : ""
                            } `}
                        >
                            Interior Designe Studios
                        </Link>

                        <Link
                            onClick={() => setMobileNavOpen(false)}
                            to="/edtech"
                            className={`text-lg ${
                                current === "/edtech" ? "text-[#0488A0]" : ""
                            } `}
                        >
                            EdTech 
                        </Link>
                    </div>
                )}
               
               
            </ul>
            <Button title="Get Started" />
        </motion.div>
    );
};

export default MobileNav;
