"use server"
import * as React from "react";
import RelicStep1 from "./step1/Step1";
import RelicStep2 from "./step2/Step2";
import RelicStep3 from "./step3/Step3";
import RelicStep4 from "./step4/Step4";
import OneTimeStep1 from "./onetimestep1/OneTimeStep1";
import RelicStep5 from "./step5/Step5";
import OneTimeStep2 from "./onetimestep2/OneTimeStep2";
import RelicStep6 from "./step6/Step6";
import ComboSteps from "./combosteps/ComboSteps";
import { Link } from "@mui/material";

function RelicGuide() {
  return (
    <>
      <div style={{ margin: "10px" }}>
        Thank you to the{" "}
        <Link href="https://ffxiv.consolegameswiki.com/wiki/Resistance_Weapons">
          Consolegameswiki Resistance Weapon
        </Link>{" "}
        page for supplying much of this information. Please keep in mind that
        the goal of this guide is to give optimal grinding methods and will rarely
        list alternatives such as Blue Mage.
      </div>
      <div style={{ textAlign: "left" }}>
        <ComboSteps />
        <RelicStep1 />
        <RelicStep2 />
        <RelicStep3 />
        <RelicStep4 />
        <OneTimeStep1 />
        <RelicStep5 />
        <OneTimeStep2 />
        <RelicStep6 />
      </div>
    </>
  );
}

export default RelicGuide;
