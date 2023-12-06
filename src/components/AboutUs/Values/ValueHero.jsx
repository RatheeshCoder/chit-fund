import React from 'react';

const ValueHero = () => {
    return (
        <div className="max-w-2xl mx-auto text-center mt-40">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
            Awards and achievements

            </h1>
            <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
            At Vanmoh Chitfunds, our ethos is the heartbeat of our organisation, shaping our identity 
            and guiding every interaction. Rooted in our unwavering commitment to integrity, 
            transparency, and customer-centricity, our values define the essence of who we are and 
            how we operate.

            </p>
            <div className="mt-8">
                <a href="#" target="_blank" className="block">
                    <button
                        className="flex content-center transition items-center justify-center text-center px-8 py-4 text-xl font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 mx-auto px-8"
                        style={{ flexShrink: 0 }}
                    >
                        <div className="flex items-center justify-start space-x-1.5">
                            <span>Know More </span>
                        </div>
                    </button>
                </a>
            </div>
            <p className="mt-8 text-sm font-normal text-gray-600">
            Honest Chits, Open Rewards !!!
            </p>
        </div>
    );
};

export default ValueHero;
