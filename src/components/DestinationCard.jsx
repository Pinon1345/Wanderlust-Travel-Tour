import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiMapPin } from 'react-icons/bi';
import { CiCircleCheck } from 'react-icons/ci';
import { MdArrowOutward } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, country, destinationName, duration, price, category } = destination
    return (
        <div className="border-2 border-slate-100 rounded-2xl shadow-lg shadow-slate-200 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300 hover:border-cyan-200">
            <div className='mb-2'>
                <Image
                    className='w-full h-64 bg-gray-100 object-cover rounded-2xl'
                    src={imageUrl}
                    alt={destinationName}
                    width={800}
                    height={800}
                ></Image>
            </div>

            <div className='py-2 px-3 font-semibold'>
                <div className='flex items-center gap-1 text-gray-500 pb-2 text-lg'>
                    <BiMapPin></BiMapPin>
                    <p>{country}</p>
                </div>
                <div className='flex justify-between gap-4 items-center font-bold text-2xl pb-2'>
                    <h2>{destinationName}</h2>
                    <h2 className='text-slate-900/70'>${price}<span className='font-semibold text-lg text-gray-400'>/Person</span></h2>
                </div>
                <div className='flex items-center gap-1 pb-2'>
                    <CiCircleCheck></CiCircleCheck>
                    <p>{category}</p>
                </div>
                <div className='flex items-center gap-1 pb-2'>
                    <SlCalender></SlCalender>
                    <p>{duration}</p>
                </div>
            </div>

            {/* Button */}

            <Link href={`/destinations/${_id}`}>
                <Button
                    variant='ghost'
                    className="text-cyan-500 flex items-center gap-1 text-lg font-bold mx-4 mt-2 mb-5 underline underline-offset-4"
                >
                    <h2 className='pt-1'>BOOK NOW</h2>
                    <MdArrowOutward className='w-6 h-6'></MdArrowOutward>
                </Button>
            </Link>

        </div>
    );
};

export default DestinationCard;