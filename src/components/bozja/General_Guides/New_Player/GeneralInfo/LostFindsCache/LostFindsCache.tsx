"use client";
import { Box, Link, Modal, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function LostFindsCache() {
  const [lostFindsCacheModelState, setLostFindsCacheModelState] =
    React.useState(false);
  const [insideCacheModelState, setInsideCacheModelState] =
    React.useState(false);

  return (
    <div>
      <Link component={NextLink} href="#actions">
        <Typography id="actions" variant="h4" component="h3" sx={{ mb: 1 }}>
          The Lost Finds Cache (Actions/Essences)
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
      <Link component={NextLink} href="#holster">
        <Typography id="holster" variant="h5" component="h4" sx={{ mb: 1 }}>
          The Lost Finds Holster + Equipping Actions and Essences
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        Starting off with the Lost Finds Holster, this is the menu to the right
        when you access the Lost Finds Cache. This effectively acts as your
        inventory in Bozja and has a limit to how much you can carry. This is
        represented in your Maximum Capacity displayed at the bottom of the
        menu. Each action and item in the Lost Cache has a different weight
        value. Once you have the actions and items you want, you can hit the
        &quot;Confirm&quot; button on the bottom of the Lost Finds Cache to lock
        in your changes.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        You can access your holster at any time from the main resistance
        menu&apos;s &quot;Lost Finds Holster&quot; button.
      </Typography>
      <Box
        component="img"
        sx={{
          minWidth: "250px",
          width: "28%",
          height: "auto",
        }}
        alt="The Lost Finds Holster"
        src="/Bozja/Guide/LostFindsHolster.PNG"
      />
      <Typography component="p" sx={{ mb: 2 }}>
        Once you have actions and essences in your holster you can equip them.
        Equipping them is luckily very easy, for essences just click it in the
        holster and you will use it like any other item. For actions you click
        them and you will have the following menu displayed to you, just click a
        slot and it will put the action in one of your two duty action slots.
      </Typography>
      <Box
        component="img"
        sx={{
          minWidth: "250px",
          width: "28%",
          height: "auto",
        }}
        alt="The Lost Finds Holster"
        src="/Bozja/Guide/EquipAction.PNG"
      />
      <Typography component="p" sx={{ mb: 2 }}>
        Essences will remain applied to you for the duration of the instance in
        most cases as long as you do not switch jobs, apply another essence, or
        click off the buff.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        Actions will remain applied to you between instances so once an action
        is equipped it can only be unequipped by overwriting it with another
        action or using the Mimic Lost Action.
      </Typography>
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
