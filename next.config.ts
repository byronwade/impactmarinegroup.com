import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
	experimental: {
		inlineCss: true,
		ppr: true,
		typedRoutes: true,
		reactCompiler: false,
		optimizeCss: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
		if (!isServer) {
			config.resolve = {
				...config.resolve,
				fallback: {
					fs: false,
					net: false,
					https: false,
					child_process: false,
					module: false,
					dns: false,
					readline: false,
					worker_threads: false,
					express: false,
				},
			};
		}
		return config;
	},
};

export default withPayload(nextConfig);
