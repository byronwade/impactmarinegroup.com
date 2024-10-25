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
				hostname: "*.public.blob.vercel-storage.com",
			},
			{
				hostname: "impactmarinegroup.com",
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
	env: {
		BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
	},
};

export default nextConfig;
