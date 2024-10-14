import React from 'react';

const Card = ({ icon, title, description, button }) => (
    <a href="#" className="  card block max-w-sm p-6 bg-[#F8F9FA] border border-[#F8F9FA] rounded-lg shadow hover:bg-gray-100 text-center w-[375px]">
        <div className="w-6 h-6 mb-4">{icon}</div>
        <h5 className="mb-2 text-2xl font-bold tracking-tig ht text-gray-900">{title}</h5>
        <p className="font-normal text-gray-700">{description}</p>
    </a>
);

const Blog = () => {
    const cards = [
        // {
        //     title: 'Lorem ipsum',
        //     description: 'dolor sit amet',
        //     button: 'View more'
        // },
        // {
        //     title: 'Lorem ipsum',
        //     description: 'dolor sit amet',
        //     button: 'Get started'
        // },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className='w-10 h-10'><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="#2090FF"></path></svg>
            ),
            title: 'DDoS protection',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className='w-10 h-10'><path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z" fill="#2090FF"></path></svg>
            ),
            title: 'Wide infrastructure',
            description: 'lorem ipsum dolor sit amet consectetur',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className="w-10 h-10"><path d="M21.5 14.98c-.02 0-.03 0-.05.01A3.49 3.49 0 0 0 18 12c-1.4 0-2.6.83-3.16 2.02A2.988 2.988 0 0 0 12 17c0 1.66 1.34 3 3 3l6.5-.02a2.5 2.5 0 0 0 0-5zm.01 3.02H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5c-.01.27-.23.5-.5.5zM10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73A7.942 7.942 0 0 1 4 12c0-3.73 2.55-6.85 6-7.74zM20 6h-2.73a7.98 7.98 0 0 1 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6v2z" fill="#2090FF"></path></svg>
            ),
            title: 'Automated Synchronization',
            description: 'lorem ipsum dolor sit amet consectetur',

        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className='w-10 h-10'><path d="M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07zM15 10.5v5H9v-5h1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89h1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75s.75.34.75.75zM13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1z" fill="#2090FF"></path></svg>

            ),
            title: 'Secure Remote Acces',
            description: 'lorem ipsum dolor sit amet consectetur',
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className='w-10 h-10'><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" fill="#2090FF"></path><circle cx="9" cy="13" r="1" fill="#2090FF"></circle><circle cx="15" cy="13" r="1" fill="#2090FF"></circle><path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z" fill="#2090FF"></path></svg>

            ),
            title: '24/7 Support',
            description: 'lorem ipsum dolor sit amet consectetur'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className='w-10 h-10'><path d="M11 8v5l4.25 2.52l.77-1.28l-3.52-2.09V8H11zm10 2V3l-2.64 2.64A8.937 8.937 0 0 0 12 3a9 9 0 1 0 9 9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7s3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10h7z" fill="#2090FF"></path></svg>
            ),
            title: 'Automatic Deployment',
            description: 'lorem ipsum dolor sit amet consectetur'
        }
    ];

    return (
        <main className="Blog mb-20">
            <h1 className="mb-5 mt-14 text-[30px]">Why QuantumSky?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center 2xl:w-[70%] w-[85%] mx-auto">
                {cards.map((card, index) => (
                    <Card key={index} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>
            <button className="bg-transparent hover:bg-[#2090FF] text-[#2090FF] font-semibold hover:text-white py-2 px-4 border border-[#2090FF] hover:border-transparent rounded mt-10 flex items-center mx-auto ">
                Get started today
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2  group-hover:fill-white">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z" fill="#2090FF" />
                </svg>
            </button>
        </main>
    );
};

export default Blog;

