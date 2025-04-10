export default function CLLCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{display: "column", justifyContent: "center", textAlign:"center" }}>
      {children}
    </div>
  );
}