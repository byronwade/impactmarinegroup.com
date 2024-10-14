/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.sanity.io", "placehold.co"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
