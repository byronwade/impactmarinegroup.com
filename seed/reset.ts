import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import config from "../payload.config";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

async function reset() {
	try {
		if (!process.env.POSTGRES_URL) {
			throw new Error("POSTGRES_URL is required");
		}

		const resolvedConfig = await config;
		await payload.init({
			config: resolvedConfig,
			local: false,
			onInit: async (payload) => {
				// Delete all documents from each collection
				const collections = ["pages", "boats", "brands", "services", "testimonials", "settings", "media", "navigation"];
				for (const collection of collections) {
					try {
						const { docs } = await payload.find({
							collection,
							limit: 1000,
						});

						if (docs.length > 0) {
							await Promise.all(docs.map((doc) => payload.delete({ collection, id: doc.id })));
							console.log(`✅ Deleted all documents from ${collection}`);
						}
					} catch (error) {
						console.log(`⚠️ No documents found in ${collection} or collection does not exist`);
					}
				}

				console.log("✅ Database reset complete!");
				process.exit(0);
			},
		});
	} catch (error) {
		console.error("Error resetting database:", error);
		process.exit(1);
	}
}

reset();
