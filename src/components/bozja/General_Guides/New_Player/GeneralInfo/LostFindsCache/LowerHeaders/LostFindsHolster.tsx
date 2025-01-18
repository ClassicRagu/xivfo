"use client";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function LostFindsHolster() {

  return (
    <>
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
    </>
  );
}
