import DefaultBox from "@/components/shared/DefaultBox";

export default function CLLCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      {children}
      <div
          style={{
            alignContent: "left",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          <h3>How to use this tool</h3>
          <p>
            Press &quot;Start/Restart&quot; the moment CLL/Dal disappears from the map.
            <br />
            Skirmishes and CEs do not count towards the CLL timer while CLL is
            running.
          </p>
          <h3>What is the math behind this?</h3>
          <p>
            CLL and Dal&apos;s timers start at 60 minutes and get reduced by each
            Skirmish and CE completed by the instance.
            <br />
            Each Skirmish successfully completed cuts the time down by 1 minute.
            <br />
            Each CE or Duel successfully completed cuts the time down by 5
            minutes.
          </p>
        </div>
    </DefaultBox>
  );
}