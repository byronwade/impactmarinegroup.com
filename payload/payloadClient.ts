import payload from "payload";
import config from "../payload.config";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

interface PayloadCache {
	client: typeof payload | null;
	promise: Promise<typeof payload> | null;
}

let cached = (global as { payload?: PayloadCache }).payload;

if (!cached) {
	cached = (global as { payload?: PayloadCache }).payload = {
		client: null,
		promise: null,
	};
}

export const getPayloadClient = async () => {
	if (!process.env.POSTGRES_URL) {
		throw new Error("POSTGRES_URL environment variable is not set");
	}

	if (cached?.client) {
		return cached.client;
	}

	if (!cached?.promise) {
		cached.promise = (async () => {
			try {
				const resolvedConfig = await config;
				const client = await payload.init({
					config: resolvedConfig,
				});
				cached.client = client;
				return client;
			} catch (error) {
				console.error("Error initializing Payload:", error);
				throw error;
			}
		})();
	}

	try {
		cached.client = await cached.promise;
		return cached.client;
	} catch (error) {
		cached.promise = null;
		throw error;
	}
};
