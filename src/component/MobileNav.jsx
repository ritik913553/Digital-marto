import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const MobileNav = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -100 }}
            className="mt-4 poppins-font text-lg pb-10 font-bold flex flex-col gap-y-5 p-1  "
        >
            <ul className="flex flex-col gap-y-5">
                <li>Features</li>
                <li>Projects</li>
                <li>Pricing</li>
            </ul>
            <Button title="Get Started" />
        </motion.div>
    );
};

export default MobileNav;
