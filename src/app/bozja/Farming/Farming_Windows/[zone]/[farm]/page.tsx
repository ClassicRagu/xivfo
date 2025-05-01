"use client";
import React from "react";
import { Provider } from "jotai";
import Weather from "@/components/bozja/Farming/Farming_Windows/TopLevelFaming";
import { useHydrateAtoms } from "jotai/utils";
import { zoneValueAtom } from "@/hooks/bozja/Farming/Farming_Weather/zoneValueAtom";
import { farmValueAtom } from "@/hooks/bozja/Farming/Farming_Weather/farmValueAtom";
import { PrimitiveAtom } from "jotai";

const HydrateAtoms = ({ initialValues, children }: {initialValues: [PrimitiveAtom<string>, string][], children: React.ReactNode}) => {
  // initialising on state with prop on render here
  useHydrateAtoms(initialValues);
  return children;
};

function FarmingWindows({
  params,
}: {
  params: Promise<{ zone: string; farm: string }>;
}) {
  const { zone, farm } = React.use(params);

  return (
    <Provider>
      <HydrateAtoms initialValues={[[zoneValueAtom, zone.replaceAll("%20", " ")], [farmValueAtom, farm.replaceAll("%20", " ")]]}>
        <Weather />
      </HydrateAtoms>
    </Provider>
  );
}

export default FarmingWindows;
