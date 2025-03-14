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
                <Link component={NextLink} href="#potkit" style={{ display: "flex" }}>
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
                <Link component={NextLink} href="#potkit" style={{ display: "flex" }}>
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
                    <ImageWithPopup src="/OC/ActionSettings.jpg" alt="Image of the Job List" maxWidth={1200} widthPercent="50%" />
                </div>
                <Link component={NextLink} href="#potkit" style={{ display: "flex" }}>
                    <Typography id="known" variant="h4" component="h3" sx={{ mb: 1 }}>
                        Known Job Actions
                    </Typography>
                </Link>
                <ul>
                    <li>Freelancer:
                        <ul>
                            <li>First Aid: 30% Restoration to Self</li>
                            <li>Treasure Search: Finds Treasure Boxes</li>
                        </ul>
                    </li>
                    <li>Bard:
                        <ul>
                            <li>Lvl 1: Attack Song</li>
                            <li>Lvl 2: Love Song</li>
                            <li>Lvl 3: Song of Strength</li>
                            <li>Lvl 4: Hero Song</li>
                            <li>Lvl 2: Trait - Song Effect Up</li>
                        </ul>
                    </li>
                    <li>Time Mage:
                        <ul>
                            <li>Lvl 1: Slowga</li>
                            <li>Lvl 2: Comet</li>
                            <li>Lvl 3: Mage Smasher</li>
                            <li>Lvl 4: Dispel</li>
                            <li>Lvl 5: Haste</li>
                        </ul>
                    </li>
                    <li>Knight:
                        <ul>
                            <li>Lvl 1: Protect</li>
                            <li>Lvl 2: Prayer</li>
                            <li>Lvl 3: Magic Heal</li>
                            <li>Lvl 6: Close</li>
                            <li>Lvl 4: Trait - Defense Effect Up</li>
                            <li>Lvl 5: Trait - Prayer Effect Up</li>
                        </ul>
                    </li>
                    <li>Monk:
                        <ul>
                            <li>Lvl 1: Kick</li>
                            <li>Lvl 2: Counter</li>
                            <li>Lvl 3: Catch</li>
                            <li>Lvl 5: Chakra</li>
                            <li>Lvl 4: Trait - Kick Effect Up</li>
                            <li>Lvl 6: Trait - Kick Effect Improved</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <TableOfContents />
        </div>
    );
}
