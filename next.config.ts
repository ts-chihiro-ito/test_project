import type { NextConfig } from "next";

const repo = "test_project";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
