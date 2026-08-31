import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdfjs-dist", "@prisma/client"],
  transpilePackages: ["react-markdown", "remark-math", "rehype-katex", "katex"],
  // productionBrowserSourceMaps: false,
  experimental: {
	//     preloadEntriesOnStart: false,
	//     webpackMemoryOptimizations: true,
	//     serverSourceMaps: false,
	serverActions: {
	  bodySizeLimit: "15mb",
	},
  },
};

export default nextConfig;
