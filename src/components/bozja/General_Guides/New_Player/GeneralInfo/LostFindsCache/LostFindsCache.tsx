"use client";
import { Box, Link, Modal, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import LostFindsHolster from "./LowerHeaders/LostFindsHolster";

export default function LostFindsCache() {
  const [lostFindsCacheModelState, setLostFindsCacheModelState] =
    React.useState(false);
  const [insideCacheModelState, setInsideCacheModelState] =
    React.useState(false);

  return (
    <div>
      <Link component={NextLink} href="#cache">
        <Typography id="cache" variant="h4" component="h3" sx={{ mb: 1 }}>
          The Lost Finds Cache
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        The Lost Finds Cache contains pretty much everything that makes StQ
        interesting as it contains your Lost Actions, Essences, and various StQ
        specific items. A Lost Finds Cache can be found in all StQ zones
        including Gangos itself.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        If you want details on every action and where/when it is useful please
        consult our Lost Actions Guide (under construction still)
      </Typography>
      <div style={{ flexDirection: "row" }}>
        <Box
          component="img"
          sx={{
            minWidth: "250px",
            width: "25%",
            height: "auto",
          }}
          alt="The Lost Finds Cache"
          src="/Bozja/Guide/LostFindsCache.PNG"
          onClick={() => {
            setLostFindsCacheModelState(true);
          }}
        />
        <Box
          component="img"
          sx={{
            minWidth: "250px",
            width: "38%",
            height: "auto",
          }}
          alt="The Inside of the Lost Finds Cache"
          src="/Bozja/Guide/InsideCache.PNG"
          onClick={() => {
            setInsideCacheModelState(true);
          }}
        />
      </div>
      <Typography component="p" sx={{ mb: 2 }}>
        For the sake of this guide, all you need to know is how the holster
        works, how to apply an essence how to equip actions, and how to use
        actions. We&apos;ll be supplying you with some pre-made loadouts to make
        your journey through StQ as smooth as possible.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        <b>
          It is important for you to use Actions and Essences. StQ is balanced
          around the use of them and can be extremely difficult and punishing at
          times without them.
        </b>
      </Typography>
      <LostFindsHolster />
      <Modal
        open={lostFindsCacheModelState}
        onClose={() => setLostFindsCacheModelState(false)}
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
            maxWidth: 700,
          }}
          src="/Bozja/Guide/LostFindsCache.PNG"
        />
      </Modal>
      <Modal
        open={insideCacheModelState}
        onClose={() => setInsideCacheModelState(false)}
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
            maxWidth: 1300,
          }}
          src="/Bozja/Guide/InsideCache.PNG"
        />
      </Modal>
    </div>
  );
}
