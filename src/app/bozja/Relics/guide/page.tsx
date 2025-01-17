"use server";
import RelicGuide from "@/components/bozja/Relics/RelicGuide";
import RelicToggle from "@/components/bozja/Relics/RelicToggle";

function Relic() {
  
  return (
    <>
      <RelicToggle mode={"guide"} />
      <RelicGuide />
    </>
  );
}

export default Relic;
