import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import DestinationCard from './DestinationCard';

const FeaturedPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinations = await res.json()
    console.log(destinations)

    return (
        <div className='container w-11/12 mx-auto mt-8 mb-8'>

            <div className='flex flex-col md:flex-row justify-between items-center gap-4 mt-8 mb-8'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-bold text-blue-700'>Featured Destinations</h2>
                    <p className='text-lg text-gray-400'>Handpicked travel experiences for the adventure seekers</p>
                </div>

                {/* Button */}

                <Link
                    href="/destinations"
                    className='block'
                >
                    <Button
                        size='lg'
                        variant='outline'
                        className="flex flex-row rounded-lg text-cyan-600 gap-2 items-center transition-all duration-300 hover:scale-105 shadow-md">
                        <h2 className='pt-1'>ALL  DESTINATIONS</h2>
                        <FaArrowRight></FaArrowRight>
                    </Button>
                </Link>

            </div>

            {/* Cards */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    destinations.map(destination => <DestinationCard
                        key={destination._id}
                        destination={destination}
                    >
                    </DestinationCard>)
                }

            </div>

        </div>
    );
};

export default FeaturedPage;