"use client";

import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export function DeleteAlert() {
    return (
        <AlertDialog>

            <Button
                variant='outline'
                className="text-lg text-red-600 border-red-600 font-semibold hover:bg-red-500 hover:text-white px-6 py-4 rounded-lg"
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
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="pt-1">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" className="pt-1">
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}