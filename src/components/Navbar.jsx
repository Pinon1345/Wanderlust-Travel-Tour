'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser, FaTimes } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-slate-50 rounded-b-3xl shadow-md shadow-gray-400 sticky top-0 z-50'>

            <nav className='mx-6 flex items-center justify-between py-5'>

                {/* LEFT (Desktop) */}

                <ul className='hidden md:flex items-center gap-6 text-lg font-semibold'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/destinations">Destinations</Link></li>
                    <li><Link href="/my-bookings">My Bookings</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                    {/* Extra */}
                    <li><Link href="/add-destination">Add Destination</Link></li>
                </ul>

                {/* LOGO */}

                <div className='flex items-center justify-center'>
                    <Image
                        src={"/assets/Wanderlast.png"}
                        alt='Logo'
                        width={170}
                        height={170}
                    />
                </div>

                {/* RIGHT (Desktop) */}

                <ul className='hidden md:flex items-center gap-4 text-lg font-semibold'>

                    <li
                        className='flex items-center border border-gray-200 font-bold gap-1 px-4 py-1 rounded-md text-gray-700 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-sm active:scale-95'>
                        <FaRegUser />
                        <Link href="/profile" className='pt-1'>Profile</Link>
                    </li>

                    <li className='btn-global'>
                        <Link
                            href="/login">
                            Sign In
                        </Link>
                    </li>

                    <li className='btn-global'>
                        <Link
                            href="/signup">
                            Sign Up
                        </Link>
                    </li>
                </ul>

                {/* MOBILE BUTTON */}

                <button
                    className='md:hidden text-2xl'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes className='rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 active:scale-95' /> : <TiThMenu className='rounded-lg text-2xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 active:scale-95'></TiThMenu>}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className='md:hidden flex justify-between items-start px-5 pb-4 space-y-3 font-semibold text-lg mt-2'>

                    <div className='flex flex-col items-start gap-3'>

                        <Link
                            className='text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-blue-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md hover:shadow-blue-100 active:scale-95 border border-transparent hover:border-blue-200 hover:px-6'
                            href="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>

                        <Link
                            className='text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-blue-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md hover:shadow-blue-100 active:scale-95 border border-transparent hover:border-blue-200 hover:px-6'
                            href="/destinations" onClick={() => setOpen(false)}>
                            Destinations
                        </Link>

                        <Link
                            className='text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-blue-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md hover:shadow-blue-100 active:scale-95 border border-transparent hover:border-blue-200 hover:px-6'
                            href="/my-bookings" onClick={() => setOpen(false)}>
                            My Bookings
                        </Link>

                        <Link
                            className='text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-blue-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md hover:shadow-blue-100 active:scale-95 border border-transparent hover:border-blue-200 hover:px-6'
                            href="/admin" onClick={() => setOpen(false)}>
                            Admin
                        </Link>

                    </div>

                    <div className='flex flex-col items-end gap-4'>

                        <div
                            className='flex items-center border border-gray-300 mb-1 font-bold gap-1 px-4 py-1 rounded-md text-gray-700 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-sm active:scale-95'>
                            <FaRegUser />
                            <Link href="/profile" onClick={() => setOpen(false)} className='pt-1'>Profile</Link>
                        </div>

                        <Link
                            className='btn-global py-1'
                            href="/login" onClick={() => setOpen(false)}>
                            Sign In
                        </Link>

                        <Link
                            className='btn-global'
                            href="/signup" onClick={() => setOpen(false)}>
                            Sign Up
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;