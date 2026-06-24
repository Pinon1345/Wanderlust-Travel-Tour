"use client";

import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import Link from 'next/link';

import React from 'react';
import { toast } from 'react-toastify';

const AddDestinationPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())

        console.log("Form Information:", destination);

        const res = await fetch('http://localhost:5000/destination', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()
        toast.success("Congratulations! Form Successfully Submitted.")
        console.log(data);
    }

    return (
        <div className='p-5 max-w-5xl mx-auto'>
            <h2 className='font-bold text-3xl text-center text-blue-600 mt-4 mb-2'>ADD DESTINATION FORM</h2>

            <Card className='mt-6 mb-6 shadow-md'>
                <form
                    onSubmit={onSubmit}
                    className="p-10 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label>Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-2xl mt-1" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>
                            <Input placeholder="Indonesia" className="rounded-2xl mt-1" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Category</Label>
                                <Select.Trigger className="rounded-2xl mt-1">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Beach" textValue="Beach">
                                            Beach
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                            Mountain
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="City" textValue="City">
                                            City
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                            Adventure
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural">
                                            Cultural
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl mt-1"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label>Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-2xl mt-1"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-2xl mt-1" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl mt-1"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl mt-1"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        // isLoading={isPending}
                        className=" rounded-none w-full bg-cyan-500 text-white"
                    >
                        <h2 className='font-bold text-lg pt-1'>Add Travel Package</h2>
                        {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                    </Button>

                </form>
            </Card>

        </div>
    );
};

export default AddDestinationPage;