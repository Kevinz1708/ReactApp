import React from 'react';
import RocketImage from '/IMG/RocketMoon.svg';

const Grid = ({ title, description, image }) => {
    return (
        <div className="mt-10"> {/* Increased margin */}
            <div className="grid md:grid-cols-2 place-items-center text-center md:text-left"> {/* Center text on mobile */}
                <div className="image justify-self-center mb-4 md:mb-0"> {/* Added bottom margin for mobile spacing */}
                    <img className="w-full md:w-[400px] h-auto" src={image} alt="Grid item" />
                </div>
                <div className="text md:w-[70%] w-[90%] content-center justify-self-center">
                    <h1 className="text-[24px] font-bold">{title}</h1> {/* Adjusted title size */}
                    <p className="text-sm">{description}</p> {/* Smaller description text */}
                </div>
            </div>
        </div>
    );
};

const Body = () => {
    const items = [
        {
            title: 'Our Mission',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe numquam tenetur vitae vel tempora facere maxime officia veniam delectus at placeat dignissimos obcaecati sed impedit, beatae modi, necessitatibus quidem.',
            image: RocketImage,
        },
        {
            title: 'Newest Technology',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus, ad dolore aliquam perferendis vero assumenda neque cum est placeat laborum ab non vitae qui totam soluta.',
            image: RocketImage,
        }
    ];

    return (
        <main className="grid mt-20 place-items-center">
            {/* Mobile layout: Image 1, Text 1, Image 2, Text 2 */}
            <div className="block md:hidden w-full">
                {items.map((item, index) => (
                    <Grid key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>

            {/* Desktop layout: Image left, Text right, Text left, Image right */}
            <div className="hidden md:flex flex-col">
                {/* Item 1: Image left, Text right */}
                <div className="grid md:grid-cols-2 place-items-center">
                    <div className="image justify-self-end mb-4"> {/* Adjusted alignment */}
                        <img className="w-full md:w-[400px] h-auto" src={items[0].image} alt="Grid item" />
                    </div>
                    <div className="text md:w-[40%] w-[90%] content-center justify-self-center">
                        <h1 className="text-[24px] font-bold">{items[0].title}</h1>
                        <p className="text-sm">{items[0].description}</p>
                    </div>
                </div>

                {/* Item 2: Text left, Image right */}
                <div className="grid md:grid-cols-2 place-items-center">
                    <div className="text md:w-[40%] w-[90%] content-center justify-self-center">
                        <h1 className="text-[24px] font-bold">{items[1].title}</h1>
                        <p className="text-sm">{items[1].description}</p>
                    </div>
                    <div className="image justify-self-start mb-4">
                        <img className="w-full md:w-[400px] h-auto" src={items[1].image} alt="Grid item" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Body;
