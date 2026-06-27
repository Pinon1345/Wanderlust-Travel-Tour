"use client";

import { Envelope, PencilToSquare } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextField, Select, TextArea } from "@heroui/react";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

export function EditModal({ destination }) {

    const { _id, description, imageUrl, country, destinationName, duration, price, category, departureDate } = destination

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())

        // console.log("Form Information:", destination);



        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()
        toast.success("Congratulations! Form Successfully Updated.")
        console.log(data);



    }

    return (
        <Modal>
            <Button
                variant='outline'
                className="text-lg font-semibold hover:bg-slate-900 hover:text-white px-6 py-4 rounded-lg"
            >
                <FiEdit></FiEdit>
                <p className='pt-1'>Edit</p>
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <PencilToSquare className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Destination</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Destination Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                <Label>Destination Name</Label>
                                                <Input
                                                    placeholder="Bali Paradise"
                                                    className="rounded-2xl mt-1" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField defaultValue={country} name="country" isRequired>
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
                                                defaultValue={category}
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
                                        <TextField defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl mt-1"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}
                                        <TextField defaultValue={duration} name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="7 Days / 6 Nights"
                                                className="rounded-2xl mt-1"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Departure Date */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl mt-1" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
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
                                            <TextField defaultValue={description} name="description" isRequired>
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

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary" className="pt-1">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close" className="pt-1">Confirm</Button>
                                    </Modal.Footer>
                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}