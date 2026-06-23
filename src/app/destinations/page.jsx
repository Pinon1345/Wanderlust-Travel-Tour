import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch("http://localhost:5000/destination")
    const destinations = await res.json()

    console.log(destinations);

    return (
        <div className='container w-11/12 mx-auto'>
            <h2 className='font-bold text-4xl text-center text-cyan-600 pt-6 pb-2 mt-2'>ALL DESTINATIONS</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mb-2'>

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

export default DestinationsPage;