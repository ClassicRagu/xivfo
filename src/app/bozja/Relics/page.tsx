import RelicTracker from "@/components/bozja/Relics/RelicTracker";
import RelicToggle from "@/components/bozja/Relics/RelicToggle";

function Relic() {
  return (
    <>
      <RelicToggle mode={"tracker"} />
      <RelicTracker />
    </>
  );
}

export default Relic;
