/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
	experimental: {
		optimizeCss: true,
	},
};

export default nextConfig;
