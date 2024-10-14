import React from 'react';

const Header = () => {
    return (
        <div className="relative">
            <img
                src="./Img/Header.png"
                className="w-screen h-[500px] md:h-[600px] object-cover"
                alt="Hero"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-20 z-10">
                <h1 className="text-3xl md:text-4xl font-bold">QuantumSky Solutions</h1>
                <p className="mt-4 max-w-lg text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci necessitatibus doloremque, iure quisquam corporis et architecto dolorem similique veniam expedita temporibus error animi rem laudantium, placeat dolore ab dolor.
                </p>
            </div>
            <div className="flex justify-center gap-6 -mt-10 relative flex-wrap mx-4 md:mx-20">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lorem Ipsum</h5>
                    <p className="mb-3 font-normal text-gray-700">Dolor sit amet</p>
                    <a href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3842FB] rounded-lg hover:bg-[#3842FB] focus:ring-4 focus:outline-none focus:ring-[3842FB] w-full justify-center">
                        View more
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lorem Ipsum</h5>
                    <p className="mb-3 font-normal text-gray-700">Dolor sit amet</p>
                    <a href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2090FF] rounded-lg hover:bg-[#2090FF] focus:ring-4 focus:outline-none focus:ring-[2090FF] w-full justify-center">
                        Get started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
