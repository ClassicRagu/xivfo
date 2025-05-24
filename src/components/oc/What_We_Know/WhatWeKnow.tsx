import { Box, Link, Typography } from "@mui/material";
import TableOfContents from "@/components/shared/TableOfContents";
import NextLink from "next/link";
import { ImageWithPopup } from "@/components/shared/ImageWithPopup";

export default function WhatWeKnow() {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "left",
        marginBottom: "30px",
      }}
    >
      <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px" }}>
        <Link component={NextLink} href="#leveling" style={{ display: "flex" }}>
          <Typography id="leveling" variant="h3" component="h2" sx={{ mb: 1 }}>
            How to Start and the Knowledge Leveling System
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 1 }}>
          {
            'The only requirements to start Occult Crescent are to have completed the MSQ quest "Dawntrail" and to have a combat job at level 100.'
          }
          <br />
        </Typography>
        <Typography component="p" sx={{ mb: 1 }}>
          {
            "Entering will work the same way as BSF and Zadnor with a limit of 72 players per instance."
          }
          <br />
        </Typography>
        <div>
          <ImageWithPopup
            src="/OC/Entry.jpg"
            alt="Entry Slide from Live Latter"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/HowToStart.jpg"
            alt="How To Start Slide from Live Latter"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Typography component="p" sx={{ mb: 1 }}>
          {
            "Leveling will work similarily to Eureka with leveling being focused on chaining enemies above your Knowledge Level."
          }
        </Typography>
        <Typography component="p" sx={{ mb: 1 }}>
          {
            "To alleviate issues with Eureka's leveling system they have implemented a new party sync option when someone in the party is 3+ levels above the lowest leveled person allowing them to sync down to everyone still gets exp."
          }
        </Typography>
        <Typography component="p" sx={{ mb: 1 }}>
          {
            "Like Eureka, dying then returning to start will cause you to lose exp and lose levels as well."
          }
        </Typography>
        <Typography component="p" sx={{ mb: 1 }}>
          {"Killing enemies grants both Knowledge and Phantom Job EXP."}
        </Typography>
        <div>
          <ImageWithPopup
            src="/OC/KnowledgeLevel.jpg"
            alt="Entry Slide from Live Latter"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/EXPChains.jpg"
            alt="Entry Slide from Live Latter"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <div>
          <ImageWithPopup
            src="/OC/LevelSync.jpg"
            alt="Knowledge Level Sync Slide from Live Latter"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Link component={NextLink} href="#phantom" style={{ display: "flex" }}>
          <Typography id="phantom" variant="h3" component="h2" sx={{ mb: 1 }}>
            Phantom Jobs
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 1 }}>
            {
              "There will be 12 total phantom jobs + freelancer on 7.25 release. Bard, Monk, and Knight can be obtained from a quest at the start."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Phantom Jobs will have their own levels separate from Knowledge Level, these levels will unlock Actions and Traits for each Phantom Job."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Phantom Jobs can have up to 5 actions and have a new Duty Action UI element to deal with the increase. Keyboard & mouse users can drag and drop actions onto their hotbars."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {"Some Phantom Jobs will also have traits."}
          </Typography>
        <div>
          <ImageWithPopup
            src="/OC/JobList.jpg"
            alt="Image of the Job List"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/ActionSettings.jpg"
            alt="Image of Job Actions"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/MediaPhantomJobs.jpg"
            alt="Another image of the Job List"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Link component={NextLink} href="#known" style={{ display: "flex" }}>
          <Typography id="known" variant="h4" component="h3" sx={{ mb: 1 }}>
            Known Jobs
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Thank you to Neru Neru for Translations and O&apos;palt for
          documenting{" "}
          <Link
            component={NextLink}
            href="https://docs.google.com/spreadsheets/d/1Z3pEOxE-E6vJ9eg9TX8X8rNYwUgpT-L5npEu2c3dEJQ/edit?gid=0#gid=0"
          >
            in this doc.
          </Link>{" "}
          <br />
          All info in this section is supplied from that doc. <br />
          Speculations are marked with Italics and are based on FFV info.
        </Typography>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Freelancer"}
            src={`/OC/Freelancer.png`}
          />
          <Link component={NextLink} href="#freelancer">
            <Typography id="freelancer" variant="h5" component="h4">
              Freelancer
            </Typography>
          </Link>
        </div>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Freelancer is the default job."}
        </Typography>
        <ul>
          <li>Occult First Aid: Restores 30% of your Max HP.</li>
          <li>
            Occult Treasure Search: Look up the number of treasure boxes in the
            current Crescent Island field.
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Bard"}
            src={`/OC/Bard.png`}
          />
          <Link component={NextLink} href="#bard">
            <Typography id="bard" variant="h5" component="h4">
              Bard
            </Typography>
          </Link>
        </div>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Bard is unlocked in a starter quest."}
        </Typography>
        <ul>
          <li>
            Lvl 1: Song of Attack: <i>Some kind of attack buff</i>
          </li>
          <li>
            Lvl 2: Romeo&apos;s Ballad: <i>Likely an enemy-side debuff</i>
          </li>
          <li>
            Lvl 3: Mighty March: <i>Likely a regen</i>
          </li>
          <li>
            Lvl 4: Hero&apos;s Rime:{" "}
            <i>
              Raises party level in FF5, may be a rez since it shares a similar
              name to Spirit of the Remembered.
            </i>
          </li>
          <li>Lvl 2: Trait - Song Effectiveness Up</li>
        </ul>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Monk"}
            src={`/OC/Monk.png`}
          />
          <Link component={NextLink} href="#monk">
            <Typography id="monk" variant="h5" component="h4">
              Monk
            </Typography>
          </Link>
        </div>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Monk is unlocked in a starter quest."}
        </Typography>
        <ul>
          <li>
            Lvl 1: Phantom Kick:{" "}
            <i>Some kind of single-target damage probably</i>
          </li>
          <li>
            Lvl 2: Occult Counter:{" "}
            <i>Likely a counter effect, maybe like Damnation?</i>
          </li>
          <li>
            Lvl 3: Counterstance:{" "}
            <i>Increases chance to counter at cost of defense in FF11</i>
          </li>
          <li>
            Lvl 5: Occult Chakra: <i>Likely a self-heal</i>
          </li>
          <li>Lvl 4: Trait - Kick Effect Up 1</li>
          <li>Lvl 6: Trait - Kick Effect Up 2</li>
        </ul>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Knight"}
            src={`/OC/Knight.png`}
          />
          <Link component={NextLink} href="#knight">
            <Typography id="knight" variant="h5" component="h4">
              Knight
            </Typography>
          </Link>
        </div>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Knight is unlocked in a starter quest."}
        </Typography>
        <ul>
          <li>
            Lvl 1: Guard: <i>Likely reduces damage taken.</i>
          </li>
          <li>
            Lvl 2: Prayer: <i>Some kind of healing spell</i>
          </li>
          <li>
            Lvl 3: Occult Heal: <i>Some kind of heal spell</i>
          </li>
          <li>
            Lvl 6: Oath/Vow: <i>Maybe some kind of tank stance?</i>
          </li>
          <li>Lvl 4: Trait - Guard Effectiveness Up</li>
          <li>Lvl 5: Trait - Prayer Effectiveness Up</li>
        </ul>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Time Mage"}
            src={`/OC/Time%20Mage.png`}
          />
          <Link component={NextLink} href="#timemage">
            <Typography id="timemage" variant="h5" component="h4">
              Time Mage
            </Typography>
          </Link>
        </div>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Time Mage's unlock is unknown."}
        </Typography>
        <ul>
          <li>
            Lvl 1: Occult Slow III: Slow target and area around it by 80% for 30
            seconds.
          </li>
          <li>
            Lvl 2: Occult Comet: 500 potency AoE damage. 8 second cast time & 60
            second cooldown, affected by GCD speed
          </li>
          <li>
            Lvl 3: Occult Mage Masher: Reduces target&apos;s magic damage by 10%
            for 60 seconds. 30 second cooldown.
          </li>
          <li>Lvl 4: Occult Dispel: Remove one buff from the target.</li>
          <li>
            Lvl 5: Occult Quick: For you or one ally. Grants 20 seconds of a 10%
            weaponskill/autoattack/recast timer increase and makes all spells
            instant casts. Also grants 10 seconds of a 50% movespeed increase.
            likely 120s CD
          </li>
        </ul>
        <Link component={NextLink} href="#knight">
          <Typography id="knight" variant="h5" component="h4">
            Additional Known Jobs
          </Typography>
        </Link>
        <ul>
          <li>Geomancer: Live Letter LXXXV and Korean Fan Fest</li>
          <li>Ranger: Live Letter LXXXV and Korean Fan Fest</li>
          <li>Berserker: Live Letter LXXXV and Korean Fan Fest</li>
          <li>Chemist: Live Letter LXXXV and Korean Fan Fest</li>
          <li>Cannoneer: Live Letter LXXXV and Korean Fan Fest</li>
          <li>Thief: Korean Fan Fest</li>
          <li>Oracle: Korean Fan Fest</li>
          <li>Samurai: Korean Fan Fest</li>
        </ul>
        <div>
          <ImageWithPopup
            src="/OC/OCJobs.jpg"
            alt="Image of the Job List"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/OCExtraJobs.jpg"
            alt="Image of additional Jobs"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/DT_FieldOp_Jobs.png"
            alt="Image of the Job List shown on the KR stream"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Link component={NextLink} href="#zone" style={{ display: "flex" }}>
          <Typography id="zone" variant="h3" component="h2" sx={{ mb: 1 }}>
            The Zone: Southern Horn
          </Typography>
        </Link>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Occult Crescent: Southern Horn is the zone being released in patch 7.25."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "This zone is notably quite large compared to existing foray zones and includes a total of 5 aetherytes. All aetherytes can be unlocked immediately with no level requirement as long as you can get to them"
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Within the zone there will be FATEs (Bozja Skirmishes), Critical Encounters (Bozja Critical Engagements), and Magic Pots (Eureka Bunnies) as well as the usual enemies for you to kill."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Unlike Bozja, CEs in OC will require you to walk to them and stand in the circle in order to join. Additionally, all 72 people in instance can join all CEs."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "The Southern Horn will also include treasure chests throughout the instance for players to find."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "IL Sync for the instance is 700 and has the same entry message as Eureka so it's likely stats will not be set. This means best in slot will likely be mostly melded Neo-Kindom with some current IL 760 gear."
            }
          </Typography>
        <div>
          <ImageWithPopup
            src="/OC/OCMap.jpg"
            alt="Image of the South Horn Map"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/CESlide.jpg"
            alt="Slide explaining CEs"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/CriticalEncounter.jpg"
            alt="Image of YoshiP standing in front of a CE"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/InsideCE.jpg"
            alt="Image of YoshiP standing in a CE"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/Mindflayer_CE.jpg"
            alt="An image of a fight with 3 enemies, all the same model but with different colors, likely from FT"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/MagicPot.jpg"
            alt="Slide explaining Magic Pots"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/WildChests.jpg"
            alt="Slide explaining treasure in the wild"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Link component={NextLink} href="#forked" style={{ display: "flex" }}>
          <Typography id="forked" variant="h3" component="h2" sx={{ mb: 1 }}>
            The Raid: Forked Tower
          </Typography>
        </Link>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "Forked Tower will be a 48 person raid joined from inside Occult Crescent: Southern Horn."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              'Unlike past raids it seems to be spawnable anytime by players in instance. 16 players must obtain and use 16 "ciphers" in a designated location to enter.'
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            {
              "It seems to use a combination of Bozja's Priority Deployment system along with BA's Aetheric Stabilizers as using a cipher will grant you priority but will not guarantee entry."
            }
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>{"Forked Tower contains hidden rooms."}</Typography>
          <Typography component="p" sx={{ mb: 1 }}>{"This instance will have Resurrection Restriction."}</Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            <Link href="https://www.famitsu.com/article/202503/36244">
              {"Per an interview with Famitsu"}
            </Link>
            {
              ", players will need to find phantom job combinations that will assist them in clearing Forked Tower."
            }
          </Typography>
        <div>
          <ImageWithPopup
            src="/OC/ForkedTower.jpg"
            alt="Slide showing forked tower"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/ForkedTowerEntry.jpg"
            alt="Slide showing forked tower's spawn and entry conditions"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/FTSplit.jpg"
            alt="A Splitting Path Seen in FT"
            maxWidth={1200}
            widthPercent="50%"
          />
          <ImageWithPopup
            src="/OC/THREE_OF_THEM.jpg"
            alt="An image of a fight with 3 enemies, all the same model but with different colors, likely from FT"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
        <Link component={NextLink} href="#roadmap" style={{ display: "flex" }}>
          <Typography id="roadmap" variant="h3" component="h2" sx={{ mb: 1 }}>
            Roadmap
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          {
            "7.4X will add new Phantom Jobs and 7.5X will add a new area, likely to be around the size of Southern Horn, as well as even more Phantom Jobs."
          }
          <br />
          <ImageWithPopup
            src="/OC/Roadmap.jpg"
            alt="Image of the Occult Crescent Roadmap"
            maxWidth={1200}
            widthPercent="50%"
          />
        </Typography>
        <Link component={NextLink} href="#notes" style={{ display: "flex" }}>
          <Typography id="notes" variant="h3" component="h2" sx={{ mb: 1 }}>
            Additional Notes
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          {"Bozjan Field Records have returned as Crescent Isle Notes."}
          <br />
          <ImageWithPopup
            src="/OC/IsleNote.jpg"
            alt="Image of the Crescent Isle Notes"
            maxWidth={1200}
            widthPercent="50%"
          />
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {
            "There are 2 new currencies, Enlightenment Silver and Gold Pieces, though it is not clear how they will be used."
          }
          <br />
          <ImageWithPopup
            src="/OC/Currencies.jpg"
            alt="Image of the 2 new currencies"
            maxWidth={1200}
            widthPercent="50%"
          />
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {
            "There will be gear that increases stats in the content (similar to Elemental+2 gear in Eureka). It is unclear from translations exactly how powerful this bonus will be or when we will get it."
          }
          <br />
        </Typography>
        <div>
          <ImageWithPopup
            src="/OC/OCGear.jpg"
            alt="OC Armor from the 7.2 Media page"
            maxWidth={1200}
            widthPercent="50%"
          />
        </div>
      </div>
      <TableOfContents />
    </div>
  );
}
