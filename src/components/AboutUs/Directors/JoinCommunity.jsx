import React from 'react';

const JoinCommunity = () => {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">

            <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">

                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>Empowering</span> Dreams !
                </h2>

                <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
                Enriching Lives Since 2020
                </h3>

                <svg viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stopColor="#3b82f6"></stop>
                            <stop offset="1" stopColor="#1d4ed8"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>

        </div>
    );
}

export default JoinCommunity;
