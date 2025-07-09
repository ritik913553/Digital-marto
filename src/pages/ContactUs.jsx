// ContactUs.jsx
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React, { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
        document.title = "DigitalMato | ContactUs";
    }, []);
    return (
        <div
            style={{
              background: "#a4dfe0",
                background:
                    "linear-gradient(355deg,rgba(164, 223, 224, 1) 10%, rgba(255, 255, 255, 1) 80%)",
            }}
            className="poppins-font min-h-screen pt-20 bg-black"
        >
            {" "}
            <div className="h-full  max-w-6xl mx-auto text-white flex flex-col md:flex-row p-4 md:p-12 gap-8">
                {/* Left: Contact Info */}
                <div className="bg-gradient-to-b from-blue-400 to-white text-black rounded-xl p-5 sm:p-8 w-full md:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Let’s Build Your Brand Together
                        </h2>
                        <p className="text-sm">
                            We’re just a message away. Whether you're ready to
                            grow or just exploring, we’d love to hear from you.
                        </p>
                        <div className="mt-6">
                            <h3 className="font-semibold">Visit us</h3>
                            <p className="text-sm">
                                Come say hello at our office HQ.
                                <br />
                                <span className="text-sm">
                                   Digitalmato HQ, Bengaluru, India
                                </span>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold">Chat to us</h3>
                            <p className="text-sm">
                                Our friendly team is here to help.
                                <br />
                                <a
                                    href="mailto:hello@paysphere.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    hello@digitalmato.com
                                </a>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold">Call us</h3>
                            <p className="text-sm">
                                Mon–Fri from 8am to 6pm
                                <br />
                                <span className="text-sm">
                                   +91 98765 43210
                                </span>
                            </p>
                        </div>

                        <div className="mt-4"> 
                            <h3 className="font-semibold">Social media</h3>
                            <div className="flex gap-4 mt-3 text-sm ">
                              <a href=""> <Facebook size={20} /> </a>
                              <a href=""> <Linkedin size={20} /> </a>
                              <a href=""> <Instagram size={20} /> </a>



                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="w-full md:w-2/3 space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 p-3 outline-none rounded bg-transparent text-black border border-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 p-3  outline-none rounded bg-transparent text-black border border-gray-700"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Business Name"
                        className="w-full p-3  outline-none rounded bg-transparent text-black border border-gray-700"
                    />
                    <select
                        className="w-full  outline-none p-3 rounded bg-transparent text-black border border-gray-700"
                    >
                        <option value="" disabled selected>
                            Select Industry
                        </option>
                        <option value="salon">Salon & spa</option>
                        <option value="edtech">EdTech</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="interior-design">Interior Design Studio</option>
                        <option value="interior-design">Other</option>

                    </select>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full outline-none p-3 rounded bg-transparent text-black border border-gray-700"
                    />

                  
                    <textarea
                        placeholder="Tell us what we can help you with"
                        rows={4}
                        className="w-full outline-none p-3 rounded bg-transparent text-black border border-gray-700"
                    />

                    <div className="flex items-start gap-2 bg-transparent text-black">
                        <input type="checkbox" className="mt-1" />
                        <label className="text-sm text-black bg-transparent">
                            I’d like to receive more information about company.
                            I understand and agree to the{" "}
                            <a href="#" className="text-blue-500 underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded w-full">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
