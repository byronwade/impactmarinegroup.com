/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
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
	webpack: (config) => {
		config.optimization.splitChunks = {
		  ...config.optimization.splitChunks,
		  minSize: 20000, // Minimum size for a chunk to be generated
		  maxSize: 40000, // Maximum size for a chunk to be generated
		};
		return config;
	  },
};

export default nextConfig;
