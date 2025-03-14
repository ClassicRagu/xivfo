"use client"
import { Box, Modal } from "@mui/material";
import { useState } from "react";

type ImageWithPopupProps = {
    src: string
    alt: string
    maxWidth: number
    widthPercent: string
}

export const ImageWithPopup = (props: ImageWithPopupProps) => {
    const [openState, setOpenState] = useState(false)

    return (
        <>
            <Box
                component="img"
                sx={{
                    minWidth: "250px",
                    width: props.widthPercent,
                    height: "auto",
                }}
                alt={props.alt}
                src={props.src}
                onClick={() => {
                    setOpenState(true);
                }}
            />
            <Modal
                open={openState}
                onClose={() => setOpenState(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="img"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",
                        height: "auto",
                        maxWidth: props.maxWidth,
                    }}
                    src={props.src}
                />
            </Modal>
        </>)
}