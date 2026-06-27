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
import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import Link from 'next/link';
import { TfiFaceSad } from 'react-icons/tfi';
import { IoChevronBackOutline } from 'react-icons/io5';

const MyBookingsPage = async () => {

    // JWT secure in this server component

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const bookings = await res.json()
    console.log(bookings)

    return (
        <div className='container w-11/12 mx-auto pt-6 pb-6'>
            <h2 className='text-2xl md:text-3xl font-bold text-purple-700 pt-6'>My Bookings</h2>
            <p className='text-lg text-gray-400 pt-1 pb-4'>Manage and view your upcoming travel plans</p>

            <div>

                {
                    bookings.length === 0
                        ?
                        (
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center shadow-sm mt-6 mb-6 flex flex-col items-center justify-center">
                                <TfiFaceSad className='font-bold mb-6 w-15 h-15 text-purple-600'></TfiFaceSad>
                                <h3 className="text-3xl font-bold text-gray-700">
                                    No Bookings Yet
                                </h3>

                                <p className="text-gray-500 mt-3 mb-6">
                                    Please add a booking from the Destination Details page.
                                </p>

                                <Link href="/destinations">
                                    <Button
                                        color="primary"
                                        className="flex items-center gap-2 font-semibold pt-1 text-lg"
                                    >
                                        <IoChevronBackOutline></IoChevronBackOutline>
                                        <h2 className='pt-0.5'>Explore Destinations</h2>
                                    </Button>
                                </Link>
                            </div>
                        )
                        :
                        (

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

                                            <p className='text-lg pb-2'>Booking ID: {booking._id}</p>

                                            <h2 className='text-2xl md:text-3xl text-blue-700 font-bold mt-2'>${booking.price}</h2>
                                        </div>

                                    </div>

                                    {/* Right side */}

                                    <div className='flex justify-start pr-4 pb-4 pt-6 gap-3'>

                                        {/* Cancel */}

                                        <BookingCancelAlert booking={booking}></BookingCancelAlert>


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

                        )

                }

            </div>

        </div>
    );
};

export default MyBookingsPage;