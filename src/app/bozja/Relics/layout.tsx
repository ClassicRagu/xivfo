import DefaultBox from "@/components/shared/DefaultBox";

function RelicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      <h2 style={{ marginTop: "15px" }}>Bozja Relic Weapons</h2>
      {children}
    </DefaultBox>
  );
}

export default RelicLayout;
