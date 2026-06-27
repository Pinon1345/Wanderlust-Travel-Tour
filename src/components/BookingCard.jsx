"use client";

import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';

const BookingCard = ({ destination }) => {

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;
    console.log(user)

    const [departureDate, setDepartureDate] = useState(null)
    console.log(new Date(departureDate))

    console.log(destination);

    const { price, _id, destinationName, imageUrl, country } = destination

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            imageUrl,
            price,
            country,
            departureDate: new Date(departureDate),
        }

        // Access JWT Token

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json()

        toast.success("Thank for booked a new destination.")

    }

    return (
        <div className='flex-1 bg-base-100 border-2 border-slate-100 shadow-lg shadow-gray-200 p-6 rounded-md mb-4 mt-2'>

            <p className='font-semibold py-2'>Starting from</p>

            <h2 className='text-cyan-900/70 pb-2 font-bold text-2xl'>${price}<span className='font-semibold text-lg text-gray-400'>/Person</span></h2>

            <div className='bg-slate-100 rounded-xl shadow-md p-4 mt-2 mb-6 shadow-gray-50'>

                <div>

                    <DateField onChange={setDepartureDate} className="w-[256px] pb-2" name="date">

                        <div className='flex items-center gap-2 mb-2'>
                            <SlCalender></SlCalender>
                            <Label className='text-lg font-semibold pt-1'>Departure Date</Label>
                        </div>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>

                    </DateField>

                </div>

            </div>

            {/* Button */}

            <Button onClick={handleBooking} className="flex flex-row items-center mt-4 mb-6 gap-2 bg-cyan-700 text-white rounded-lg px-4 py-6 w-full">
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
    );
};

export default BookingCard;