/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	optimizePackageImports: ["lucide-react"],
	experimental: {
		optimizeCss: true,
		optimizeServerComponents: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	env: {
		BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
	},
};

export default nextConfig;
