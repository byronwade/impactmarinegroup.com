import type { NextConfig } from "next";
import type { Configuration, Module } from "webpack";

interface WebpackModule extends Module {
	context: string;
}

const config: NextConfig = {
	images: {
		remotePatterns: [{ hostname: "cdn.sanity.io" }],
	},
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
	},
	webpack: (config: Configuration, { dev }) => {
		if (!dev) {
			config.optimization = {
				...config.optimization,
				minimize: true,
				splitChunks: {
					chunks: "all",
					minSize: 20000,
					maxSize: 244000,
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name(module: WebpackModule) {
								const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
								const packageName = match?.[1] || "vendor";
								return `vendor.${packageName.replace("@", "")}`;
							},
							priority: 20,
						},
						common: {
							minChunks: 2,
							priority: 10,
							reuseExistingChunk: true,
						},
					},
				},
			};
		}
		return config;
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
};

export default config;
