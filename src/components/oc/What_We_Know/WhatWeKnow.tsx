import { Link, Typography } from "@mui/material";
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
                <Typography component="p" sx={{ mb: 2 }}>
                    {"The only requirements to start Occult Crescent are to have completed the MSQ quest \"Dawntrail\" and to have a combat job at level 100."}<br />

                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"Entering will work the same way as BSF and Zadnor with a limit of 72 players per instance."}<br />
                </Typography>
                <div>
                    <ImageWithPopup src="/OC/Entry.jpg" alt="Entry Slide from Live Latter" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/HowToStart.jpg" alt="How To Start Slide from Live Latter" maxWidth={1200} widthPercent="50%" />
                </div>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"Leveling will work similarily to Eureka with leveling being focused on chaining enemies above your Knowledge Level."}<br />
                    {"To alleviate issues with Eureka's leveling system they have implemented a new party sync option when someone in the party is 3+ levels above the lowest leveled person allowing them to sync down to everyone still gets exp."}<br />
                    {"Like Eureka, dying then returning to start will cause you to lose exp and lose levels as well."}<br />
                    {"Killing enemies grants both Knowledge and Phantom Job EXP."}<br />
                </Typography>
                <div>
                    <ImageWithPopup src="/OC/KnowledgeLevel.jpg" alt="Entry Slide from Live Latter" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/EXPChains.jpg" alt="Entry Slide from Live Latter" maxWidth={1200} widthPercent="50%" />
                </div>
                <div>
                    <ImageWithPopup src="/OC/LevelSync.jpg" alt="Knowledge Level Sync Slide from Live Latter" maxWidth={1200} widthPercent="50%" />
                </div>
                <Link component={NextLink} href="#phantom" style={{ display: "flex" }}>
                    <Typography id="phantom" variant="h3" component="h2" sx={{ mb: 1 }}>
                        Phantom Jobs
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"There will be 12 total phantom jobs + freelancer on 7.25 release. Bard, Monk, and Knight can be obtained from a quest at the start."}<br />
                    {"Phantom Jobs will have their own levels separate from Knowledge Level, these levels will unlock Actions and Traits for each Phantom Job."}<br />
                    {"Phantom Jobs can have up to 5 actions and have a new Duty Action UI element to deal with the increase. Keyboard & mouse users can drag and drop actions onto their hotbars."}<br />
                    {"Some Phantom Jobs will also have traits."}<br />
                </Typography>
                <div>
                    <ImageWithPopup src="/OC/JobList.jpg" alt="Image of the Job List" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/ActionSettings.jpg" alt="Image of Job Actions" maxWidth={1200} widthPercent="50%" />
                </div>
                <Link component={NextLink} href="#known" style={{ display: "flex" }}>
                    <Typography id="known" variant="h4" component="h3" sx={{ mb: 1 }}>
                        Known Job Actions
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    Thank you to Neru Neru for Translations and O&apos;palt for documenting <Link component={NextLink} href="https://docs.google.com/spreadsheets/d/1Z3pEOxE-E6vJ9eg9TX8X8rNYwUgpT-L5npEu2c3dEJQ/edit?gid=0#gid=0">in this doc.</Link> <br/>
                    All info in this section is supplied from that doc. <br/>
                    Speculations are marked with Italics and are based on FFV info.
                </Typography>
                <ul>
                    <li>Freelancer: Default Job
                        <ul>
                            <li>Occult First Aid: Restores 30% of your Max HP.</li>
                            <li>Occult Treasure Search: Look up the number of treasure boxes in the current Crescent Island field.</li>
                        </ul>
                    </li>
                    <li>Bard: Unlocked through a starter quest.
                        <ul>
                            <li>Lvl 1: Song of Attack: <i>Some kind of attack buff</i></li>
                            <li>Lvl 2: Romeo&apos;s Ballad: <i>Likely an enemy-side debuff</i></li>
                            <li>Lvl 3: Mighty March: <i>Likely a regen</i></li>
                            <li>Lvl 4: Hero&apos;s Rime: <i>Raises party level in FF5, may be a rez since it shares a similar name to Spirit of the Remembered.</i></li>
                            <li>Lvl 2: Trait - Song Effectiveness Up</li>
                        </ul>
                    </li>
                    <li>Time Mage: Unlock Unknown
                        <ul>
                            <li>Lvl 1: Occult Slow III: Slow target and area around it by 80% for 30 seconds.</li>
                            <li>Lvl 2: Occult Comet: 500 potency AoE damage. 8 second cast time & 60 second cooldown, affected by GCD speed</li>
                            <li>Lvl 3: Occult Mage Masher: Reduces target&apos;s magic damage by 10% for 60 seconds. 30 second cooldown.</li>
                            <li>Lvl 4: Occult Dispel: Remove one buff from the target.</li>
                            <li>Lvl 5: Occult Quick: For you or one ally. Grants 20 seconds of a 10% weaponskill/autoattack/recast timer increase and makes all spells instant casts. Also grants 10 seconds of a 50% movespeed increase. likely 120s CD</li>
                        </ul>
                    </li>
                    <li>Knight: Unlocked through a starter quest.
                        <ul>
                            <li>Lvl 1: Guard: <i>Likely reduces damage taken.</i></li>
                            <li>Lvl 2: Prayer: <i>Some kind of healing spell</i></li>
                            <li>Lvl 3: Occult Heal: <i>Some kind of heal spell</i></li>
                            <li>Lvl 6: Oath/Vow: <i>Maybe some kind of tank stance?</i></li>
                            <li>Lvl 4: Trait - Guard Effectiveness Up</li>
                            <li>Lvl 5: Trait - Prayer Effectiveness Up</li>
                        </ul>
                    </li>
                    <li>Monk: Unlocked through a starter quest.
                        <ul>
                            <li>Lvl 1: Phantom Kick: <i>Some kind of single-target damage probably</i></li>
                            <li>Lvl 2: Occult Counter: <i>Likely a counter effect, maybe like Damnation?</i></li>
                            <li>Lvl 3: Counterstance: <i>Increases chance to counter at cost of defense in FF11</i></li>
                            <li>Lvl 5: Occult Chakra: <i>Likely a self-heal</i></li>
                            <li>Lvl 4: Trait - Kick Effect Up 1</li>
                            <li>Lvl 6: Trait - Kick Effect Up 2</li>
                        </ul>
                    </li>
                </ul>
                <Link component={NextLink} href="#zone" style={{ display: "flex" }}>
                    <Typography id="zone" variant="h3" component="h2" sx={{ mb: 1 }}>
                        The Zone: Southern Horn
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"Occult Crescent: Southern Horn is the zone being released in patch 7.25."}<br />
                    {"This zone is notably quite large compared to existing foray zones and includes a total of 5 aetherytes. All aetherytes can be unlocked immediately with no level requirement as long as you can get to them"}<br />
                    {"Within the zone there will be FATEs (Bozja Skirmishes), Critical Encounters (Bozja Critical Engagements), and Magic Pots (Eureka Bunnies) as well as the usual enemies for you to kill."}<br />
                    {"Unlike Bozja, CEs in OC will require you to walk to them and stand in the circle in order to join. Additionally, all 72 people in instance can join all CEs."}<br />
                    {"The Southern Horn will also include treasure chests throughout the instance for players to find."}<br />
                    {"IL Sync for the instance is 700 and has the same entry message as Eureka so it's likely stats will not be set. This means best in slot will likely be mostly melded Neo-Kindom with a some current IL 760 gear."}<br />
                </Typography>
                <div>
                    <ImageWithPopup src="/OC/OCMap.jpg" alt="Image of the South Horn Map" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/CESlide.jpg" alt="Slide explaining CEs" maxWidth={1200} widthPercent="50%" />
                </div>
                <div>
                    <ImageWithPopup src="/OC/CriticalEncounter.jpg" alt="Image of YoshiP standing in front of a CE" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/InsideCE.jpg" alt="Image of YoshiP standing in a CE" maxWidth={1200} widthPercent="50%" />
                </div>
                <div>
                    <ImageWithPopup src="/OC/MagicPot.jpg" alt="Slide explaining Magic Pots" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/WildChests.jpg" alt="Slide explaining treasure in the wild" maxWidth={1200} widthPercent="50%" />
                </div>
                <Link component={NextLink} href="#forked" style={{ display: "flex" }}>
                    <Typography id="forked" variant="h3" component="h2" sx={{ mb: 1 }}>
                        The Raid: Forked Tower
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"Forked Tower will be a 48 person raid joined from inside Occult Crescent: Southern Horn."}<br />
                    {"Unlike past raids it seems to be spawnable anytime by players in instance. 16 players must obtain and use 16 \"ciphers\" in a designated location to enter."}<br />
                    {"It seems to use a combination of Bozja's Priority Deployment system along with BA's Aetheric Stabilizers as using a cipher will grant you priority but will not guarantee entry."}<br />
                    {"This instance will have Resurrection Restriction."}<br />
                </Typography>
                <div>
                    <ImageWithPopup src="/OC/ForkedTower.jpg" alt="Slide showing forked tower" maxWidth={1200} widthPercent="50%" />
                    <ImageWithPopup src="/OC/ForkedTowerEntry.jpg" alt="Slide showing forked tower's spawn and entry conditions" maxWidth={1200} widthPercent="50%" />
                </div>
                <Link component={NextLink} href="#roadmap" style={{ display: "flex" }}>
                    <Typography id="roadmap" variant="h3" component="h2" sx={{ mb: 1 }}>
                        Roadmap
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"7.4X will add new Phantom Jobs and 7.5X will add a new area, likely to be around the size of Southern Horn, as well as even more Phantom Jobs."}<br />
                    <ImageWithPopup src="/OC/Roadmap.jpg" alt="Image of the Occult Crescent Roadmap" maxWidth={1200} widthPercent="50%" />
                </Typography>
                <Link component={NextLink} href="#notes" style={{ display: "flex" }}>
                    <Typography id="notes" variant="h3" component="h2" sx={{ mb: 1 }}>
                        Additional Notes
                    </Typography>
                </Link>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"Bozjan Field Records have returned as Crescent Isle Notes."}<br />
                    <ImageWithPopup src="/OC/IsleNote.jpg" alt="Image of the Crescent Isle Notes" maxWidth={1200} widthPercent="50%" />
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"There are 2 new currencies, Enlightenment Silver and Gold Pieces, though it is not clear how they will be used."}<br />
                    <ImageWithPopup src="/OC/Currencies.jpg" alt="Image of the 2 new currencies" maxWidth={1200} widthPercent="50%" />
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                    {"There will be gear that increases stats in the content (similar to Elemental+2 gear in Eureka), there is no slide shown for this in the live letter but it is mentioned."}<br />
                </Typography>
            </div>
            <TableOfContents />
        </div>
    );
}
