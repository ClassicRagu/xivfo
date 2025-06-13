import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/map",
        destination: "/bozja/Farming",
        permanent: false,
      },
      {
        source: "/relic",
        destination: "/bozja/Relics",
        permanent: false,
      },
      {
        source: "/relic/guide",
        destination: "/bozja/Relics/Guide",
        permanent: false,
      },
      {
        source: "/oc/Pre_BiS",
        destination: "/oc/Gearing/Pre_BiS",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
