import Overview from "@/components/bozja/Test_MDX_Page/overview.mdx";
import TableOfContents from "@/components/shared/TableOfContents";

export default function Home() {
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
        <Overview />
      </div>
      <TableOfContents />
    </div>
  );
}
