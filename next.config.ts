import type { NextConfig } from "next";
// Static export so it can be dropped on cPanel (upload the /out folder).
const config: NextConfig = { output: "export", trailingSlash: true, images: { unoptimized: true } };
export default config;
