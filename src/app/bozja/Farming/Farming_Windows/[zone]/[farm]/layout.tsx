import DefaultBox from "@/components/shared/DefaultBox";

export default function SuperMoistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      <h2 style={{ marginTop: "15px" }}>Farming Windows</h2>
      <p>
        Please note that this page will be refined at a later date for Bozja specifically
      </p>
      {children}
    </DefaultBox>
  );
}
