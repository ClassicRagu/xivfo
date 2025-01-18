"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const buildsObj = [
  {
    name: "Melee or Ranged",
    ranks: ["1-4", "5-7", "8-11", "12-17", "18+"],
    builds: [
      {
        Essence: "None",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 5 is an important rank as it is the first rank that can use
            Resistance Potion Kits. Potion Kits are consumable items you can put
            in your holster that heal 50% of your HP when you fall below 50% HP
            making them absurdly powerful and a must have in Bozja! Otherwise
            that&apos;s about it, enjoy the damage boost from Skirmisher.
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "Banner of Noble Ends",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 8 introduces our first damage actions in StQ, banners. Banner
            of Noble Ends, NEnds, is a powerful banner that boosts your damage
            by 50% for 15 seconds, use it during your 2 minute burst windows for
            the most value!
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "Lost Font of Power",
        Action2: "Banner of Noble Ends",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 12 introduces our second set of damage actions and arguably one
            of the most important, Lost Font of Power. Lost Font of Power, FoP,
            increases your damage dealt by 30% and critical hit rate by 40% for
            30 seconds. Luckily this action is actually on a 2 minute cooldown
            so it&apos;s more clear that you should use it during 2 minutes. Stack it
            with Banner of Noble ends for a flat 2.015x damage multiplier before
            accounting for crit rate!
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Beast",
        Action1: "Lost Assassination",
        Action2: "Lost Rampage",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 18 is the final rank with a new build switching everything over
            to a Beast + Assassination based build. Beast and Assasination alone
            are fairly bad for dealing damage, however they have a combination
            effect. When combined with beast, Lost Assassination grants Font of
            Power for 18 seconds meaning you can give yourself a never ending
            FoP buff.
            <br />
            Lost Rampage, a rank 16 action, also gets included here as it makes
            clearing out skirmishes with multiple enemies far easier and faster.
          </Typography>
        ),
      },
    ],
  },
  {
    name: "Caster DPS",
    ranks: ["1-4", "5-8", "8-11", "12-14", "15-25", "Non-BLM 18+"],
    builds: [
      {
        Essence: "None",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 5 is an important rank as it is the first rank that can use
            Resistance Potion Kits. Potion Kits are consumable items you can put
            in your holster that heal 50% of your HP when you fall below 50% HP
            making them absurdly powerful and a must have in Bozja! Otherwise
            that&apos;s about it, enjoy the damage boost from Ordained.
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Banner of Noble Ends",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 8 introduces our first damage actions in StQ, banners. Banner
            of Noble Ends, NEnds, is a powerful banner that boosts your damage
            by 50% for 15 seconds, use it during your 2 minute burst windows for
            the most value!
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Font of Magic",
        Action2: "Banner of Noble Ends",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 12 introduces our second set of damage actions and arguably one
            of the most powerful, Lost Font of Magic. Lost Font of Magi, FoM,
            increases your damage dealt by 70% for 30 seconds. Luckily this
            action is actually on a 2 minute cooldown so it&apos;s more clear that
            you should use it during 2 minutes. Stack it with Banner of Noble
            ends for a flat 2.015x damage multiplier before accounting for crit
            rate!
            <br />
            <br />
            <b>Lost Font of Magic does come with 1 major downside:</b> It drains
            your MP and once it has fully drained your MP it falls off. If you
            are using Lost Font of Magic on any job that isn&apos;t BLM you MUST have
            Resistance Ether Kits. Like potion kits, Ether Kits restore 50% of
            your MP once you fall below a certain threshold. In the case of
            Ether Kits, the threshold for activation is {"<"}20% MP remaining.
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Font of Magic",
        Action2: "Lost Flare Star",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Rank 15 introduces what is perhaps the most powerful Lost Action in
            the game, Lost Flare Star. Lost Flare Star costs 9000 MP to cast but
            puts a 350 potency dot on everything it hits around you. It is
            exceptionally powerful when combined with Lost Font of Magic.
            <br />
            As mentioned in the last set of builds, you will need Resistance
            Ether Kits for this build. Font of Magic is already rough on your
            Mana and Lost Flare Star makes that problem even worse.
            <br />
            <br />
            As one final note, do not use this build if someone else is using
            Lost Flare Star. Only one LFS can be applied at any time so it&apos;s
            better to just use the rank 12-14 or 18+ builds.
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Chainspell",
        Action2: "Lost Flare Star",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            This final build is only for RDM, SMN, and PCT only. Lost Chainspell
            is unlocked starting at rank 18 and has a combo with Essence of the
            Ordained. This combo makes the spell damage buff go from 45% to 100%
            for 30 seconds. Needless to say a full 2x damage buff to spells is
            absurd.
            <br />
            <br />
            One note here is that you can replace Lost Flare Star with Lost
            Burst if someone else is already using LFS.
          </Typography>
        ),
      },
    ],
  },
  {
    name: "Healer",
    ranks: ["2-8", "8-11", "12-14", "15-17", "18+"],
    builds: [
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            Healer, and Tanks, are perhaps the most fun jobs starting out since
            they get their essences immediately.
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Banner of Noble Ends",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Font of Magic",
        Action2: "Banner of Noble Ends",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Seraph Strike",
        Action2: "Lost Font of Magic",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Seraph Strike",
        Action2: "Lost Burst",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
    ],
  },
  {
    name: "Tank",
    ranks: ["2-8", "8-11", "12-17", "18+"],
    builds: [
      {
        Essence: "Essence of the Martialist",
        Action1: "None",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Martialist",
        Action1: "Banner of Noble Ends",
        Action2: "None",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Martialist",
        Action1: "Lost Font of Power",
        Action2: "Banner of Noble Ends",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
      {
        Essence: "Essence of the Bloodsucker",
        Action1: "Lost Font of Power",
        Action2: "Lost Rampage",
        BuildInfo: (
          <Typography component="p" sx={{ mb: 2 }}>
            None
          </Typography>
        ),
      },
    ],
  },
];

export default function LoadoutGen() {
  const [role, setRole] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [build, setBuild] = React.useState({
    Essence: "Waiting for Input",
    Action1: "Waiting for Input",
    Action2: "Waiting for Input",
    BuildInfo: (
      <Typography component="p" sx={{ mb: 2 }}>
        None
      </Typography>
    ),
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <FormControl style={{ minWidth: "200px", margin: "15px" }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(e: SelectChangeEvent) => {
                setRank("");
                setBuild({
                  Essence: "Waiting for Input",
                  Action1: "Waiting for Input",
                  Action2: "Waiting for Input",
                  BuildInfo: (
                    <Typography component="p" sx={{ mb: 2 }}>
                      None
                    </Typography>
                  ),
                });
                setRole(e.target.value as string);
              }}
            >
              <MenuItem value={1}>Melee or Ranged</MenuItem>
              <MenuItem value={2}>Caster DPS</MenuItem>
              <MenuItem value={3}>Healer</MenuItem>
              <MenuItem value={4}>Tank</MenuItem>
            </Select>
          </FormControl>
          {role != "" ? (
            <FormControl style={{ minWidth: "200px", margin: "15px" }}>
              <InputLabel id="demo-simple-select-label">Rank</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rank}
                label="Rank"
                onChange={(e: SelectChangeEvent) => {
                  setRank(e.target.value as string);
                  setBuild(
                    buildsObj[parseInt(role) - 1].builds[
                      parseInt(e.target.value) - 1
                    ]
                  );
                }}
              >
                {buildsObj[parseInt(role) - 1].ranks.map((name, index) => {
                  return (
                    <MenuItem key={index - 1} value={index + 1}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          ) : null}
        </div>
        <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 800 }}>
          <Table
            sx={{ minWidth: 650, maxWidth: 800 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Essence</TableCell>
                <TableCell>Action 1</TableCell>
                <TableCell>Action 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {build.Essence}
                </TableCell>
                <TableCell>{build.Action1}</TableCell>
                <TableCell>{build.Action2}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
        Build Notes
      </Typography>
      {build.BuildInfo}
    </>
  );
}
