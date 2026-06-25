"use client";

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        console.log(user);

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })

        console.log({ data, error });

        if (data) {
            toast.success("Congratulations! Successfully Sign Up an Account.")
            redirect("/")
        }

        if (error) {
            toast.error("Ahh! Sign Up Failed. Please try again later.")
        }
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className='bg-slate-100 rounded-t-2xl pt-8 pb-8'>

            <h2 className='text-3xl md:text-4xl font-bold text-center pt-4 pb-1'>Create Account</h2>

            <p className='text-lg md:text-xl font-semibold text-center text-gray-400 pb-4'>Start your adventure with Wanderlust</p>

            <div className='container w-10/12 md:w-7/12 max-w-7xl mx-auto mt-4 mb-4'>

                <Card className='border border-gray-100 shadow-xl'>
                    <Form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-4 px-4 py-2">

                        {/* Name */}

                        <TextField
                            isRequired
                            name="name"
                            type="text"

                        >
                            <Label className='text-lg font-semibold'>Name</Label>
                            <Input placeholder="Enter Your Full Name" className="bg-slate-100" />
                            <FieldError />
                        </TextField>

                        {/* Image URL */}

                        <TextField
                            name="image"
                            type="url"

                        >
                            <Label className='text-lg font-semibold'>Image_URL</Label>
                            <Input placeholder="Enter Your Image_URL  (highly recommended)" className="bg-slate-100" />

                        </TextField>

                        {/* Email */}

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-lg font-semibold'>Email</Label>
                            <Input placeholder="Enter Your Email Address" className="bg-slate-100" />
                            <FieldError />
                        </TextField>

                        {/* Password */}

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-lg font-semibold'>Password</Label>
                            <Input placeholder="Enter Your Password" className="bg-slate-100" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>


                        {/* Form Button */}


                        <div className="flex gap-2 mt-2">
                            <Button type="submit" className="bg-[#15A1BF] w-full rounded-md text-lg font-bold pt-1">
                                Create Account
                            </Button>

                        </div>
                    </Form>

                    {/* Sign Up with Google */}

                    <div className='px-4'>

                        <div className="flex items-center my-4">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <span className="px-4 text-gray-500 text-sm">OR</span>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>

                        <Button onClick={handleGoogleSignIn} variant='btn-outline' size='lg' className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 mb-2">
                            {/* <img src="/google.svg" alt="Google" className="w-5 h-5" /> */}
                            <FcGoogle className='w-6 h-6'></FcGoogle>
                            <h1 className='text-lg font-bold pt-1'>Sign Up With Google</h1>
                        </Button>

                        <h2 className='text-center text-lg pb-6 pt-2'>Already have an account? <span className='font-bold text-xl text-blue-600'><Link href={"/signin"}>Sign In</Link></span></h2>

                    </div>


                </Card>

            </div>

        </div>
    );
};

export default SignUpPage;