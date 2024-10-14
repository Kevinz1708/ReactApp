import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                    {/* Logo Column */}
                    <div className="flex items-center justify-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="./Img/Logo.png" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold">QuantumSky Solutions</span>
                    </div>

                    {/* Navigation Column */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">Navigation</h2>
                        <ul className="flex flex-col items-center md:items-start">
                            <li className="mb-1">
                                <a href="#" className="text-white hover:underline">Home</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-white hover:underline">Solutions</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-white hover:underline">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-white hover:underline">Pricing</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-white hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* About Us Column */}
                    <div className="text-sm text-gray-400 text-center md:text-left">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <p className="mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra interdum felis, ut fermentum est sodales et. Curabitur ac massa in nisi elementum dapibus.
                        </p>
                    </div>
                </div>

                {/* Horizontal Rule and Copyright Information */}
                <hr className="my-6 border-gray-700" />
                <span className="block text-sm text-gray-400 text-center">
                    © 2023 QuantumSky Solutions. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
