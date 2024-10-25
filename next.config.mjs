/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "**",
			},
			{
				hostname: "placehold.co",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	webpack: (config, { dev }) => {
		if (dev) {
			config.devtool = "eval";
		}
		return config;
	},
};

export default nextConfig;
