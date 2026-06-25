import { auth } from '@/lib/auth';
import { CircleCheckFill } from '@gravity-ui/icons';
import { Button, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { MdOutlineAddLocation } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { LuEye } from "react-icons/lu";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)

    const bookings = await res.json()
    console.log(bookings)

    return (
        <div className='container w-11/12 mx-auto pt-6 pb-6'>
            <h2 className='text-2xl md:text-3xl font-bold text-purple-700 pt-6'>My Bookings</h2>
            <p className='text-lg text-gray-400 pt-1 pb-4'>Manage and view your upcoming travel plans</p>

            <div>

                {
                    bookings.map(booking =>
                        <div
                            key={booking._id}
                            className='border-2 border-gray-200 rounded-lg shadow-lg mt-4 mb-8 p-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-4'
                        >
                            {/* Left side */}

                            <div className='flex flex-col items-center md:flex-row md:items-start py-1 gap-6'>

                                <Image
                                    className='w-90 h-65 object-cover rounded-2xl shadow-md shadow-slate-400'
                                    src={booking.imageUrl}
                                    alt={booking.destinationName}
                                    width={800}
                                    height={800}
                                ></Image>

                                <div className='pt-2 pl-6'>
                                    <Chip color="success" className='px-6 py-1 rounded-full text-sm mb-3'>
                                        <CircleCheckFill width={12} />
                                        <Chip.Label className='pt-0.5'>Confirmed</Chip.Label>
                                    </Chip>

                                    <h2 className='text-3xl font-bold pt-3'>{booking.destinationName}</h2>

                                    <div className='flex items-center gap-1 pb-2'>
                                        <SlCalender></SlCalender>
                                        <p className='pt-1 text-lg font-semibold'>Departure: {new Date(booking.departureDate).toLocaleDateString(
                                            "en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        }
                                        )}</p>
                                    </div>

                                    <p className='text-lg pb-2'>Booking ID: b1</p>

                                    <h2 className='text-2xl md:text-3xl text-blue-600 font-bold mt-2'>${booking.price}</h2>
                                </div>

                            </div>

                            {/* Right side */}

                            <div className='flex justify-start pr-4 pb-4 pt-6 gap-3'>
                                {/* Cancel */}
                                <Button
                                    variant='outline'
                                    className="text-lg text-red-600 border-red-600 font-semibold hover:bg-red-500 hover:text-white px-5 py-4 rounded-lg"
                                >
                                    <RiDeleteBin6Line></RiDeleteBin6Line>
                                    <p className='pt-1'>Cancel</p>
                                </Button>

                                {/* View */}
                                <Button
                                    variant='outline'
                                    className="text-lg bg-[#15A1BF] text-white font-semibold hover:bg-cyan-800 hover:text-white px-6 py-4 rounded-lg"
                                >
                                    <LuEye></LuEye>
                                    <p className='pt-1'>View</p>
                                </Button>

                            </div>


                        </div>)

                }

            </div>

        </div>
    );
};

export default MyBookingsPage;