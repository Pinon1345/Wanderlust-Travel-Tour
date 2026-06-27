"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export function BookingCancelAlert({ booking }) {

    const { destinationName, _id } = booking

    const handleCancelBooking = async () => {

        // JWT Security in this Client component

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()
        window.location.reload();
        console.log(data)
    }

    return (
        <AlertDialog>

            <Button
                variant='outline'
                className="text-lg text-red-600 border-red-600 font-semibold hover:bg-red-500 hover:text-white px-5 py-4 rounded-lg"
            >
                <RiDeleteBin6Line></RiDeleteBin6Line>
                <p className='pt-1'>Cancel</p>
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete your booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="pt-1">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger" className="pt-1">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}