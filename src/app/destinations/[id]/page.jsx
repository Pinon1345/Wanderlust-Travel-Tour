import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiMapPin } from 'react-icons/bi';
import { CiCircleCheck } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { GiCheckMark } from 'react-icons/gi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { TbFileDescription } from 'react-icons/tb';

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params

    const res = await fetch(`http://localhost:5000/destination/${id}`)

    const destination = await res.json()

    console.log(destination);

    const { imageUrl, country, destinationName, duration, price, category, description } = destination;

    return (
        <div className='container w-11/12 mx-auto py-4 mt-4 mb-6'>

            <div className='border-2 border-cyan-50 shadow-sm rounded-2xl px-2 py-6'>

                {/* Top Button */}

                <div className='flex justify-between mx-4 pb-5'>

                    <Link
                        href={"/destinations"}
                        className='flex items-center gap-2 text-lg font-semibold text-cyan-500'
                    >
                        <FaArrowLeftLong></FaArrowLeftLong>
                        <h2 className='pt-1'>Back to Destinations</h2>
                    </Link>

                    <div className='flex flex-row items-center gap-4'>

                        <EditModal destination={destination}></EditModal>

                        <DeleteAlert destination={destination}></DeleteAlert>

                    </div>

                </div>

                {/* Details portion */}

                <div>
                    <Image
                        className='w-full h-160 bg-gray-100 object-fill rounded-2xl'
                        src={imageUrl}
                        alt={destinationName}
                        width={800}
                        height={800}
                    ></Image>
                </div>

                <div className=' border-b-2 border-slate-100 w-10/12 mx-auto py-6'>
                </div>

                {/* Text part */}

                <div className='pt-4 flex flex-col md:flex-row gap-6 justify-between items-start mx-4 mt-4'>
                    {/* left side */}
                    <div className='py-2 px-3 font-semibold flex-3 pb-2'>
                        <div className='flex items-center gap-1 text-gray-500 pb-2 text-lg'>
                            <BiMapPin></BiMapPin>
                            <p>{country}</p>
                        </div>

                        <h2 className='font-bold text-4xl pb-2 mt-2 text-purple-700'>{destinationName}</h2>

                        <div className='flex items-center gap-1 pb-2 text-lg pt-2'>
                            <CiCircleCheck></CiCircleCheck>
                            <p>{category}</p>
                        </div>

                        <div className='flex items-center font-semibold text-lg gap-1 pb-3 pt-1'>
                            <TbFileDescription className='text-red-300'></TbFileDescription>
                            <p className='text-amber-400 pt-1'>{description}</p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Overview</h2>

                            <p className='text-lg text-gray-400 pt-2 pb-4'>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>Highlights</h2>
                            <p className='text-lg text-gray-400 pt-2 pb-4'>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>

                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Luxury beachfront accommodation</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Sunrise trek to Mount Batur</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Traditional Balinese spa treatment</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Visit Uluwatu Temple at sunset</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Private beach dinner experience</p>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex-1 bg-base-100 border-2 border-slate-100 shadow-lg shadow-gray-200 p-6 rounded-md mb-4 mt-2'>

                        <p className='font-semibold py-2'>Starting from</p>

                        <h2 className='text-slate-900/60 pb-2 font-bold text-2xl'>${price}<span className='font-semibold text-lg text-gray-400'>/Person</span></h2>

                        <div className='bg-slate-100 rounded-xl shadow-md p-4 mt-2 mb-6 shadow-gray-50'>

                            <div className='flex items-center gap-2'>
                                <SlCalender></SlCalender>
                                <p className='text-lg font-semibold pt-1'>{duration}</p>
                            </div>

                        </div>

                        {/* Button */}

                        <Button className="flex flex-row items-center mt-4 mb-6 gap-2 bg-cyan-700 text-white rounded-lg px-4 py-6 w-full">
                            <p className='text-lg font-bold pt-1'>Book Now</p>
                            <FaArrowRight></FaArrowRight>
                        </Button>

                        <div className='mt-2 mb-4'>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Free cancellation up to 7 days</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>Travel insurance included</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GiCheckMark className='text-green-400'></GiCheckMark>
                                <p className='text-gray-500'>24/7 customer support</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;