import { buildConfig } from "payload";
import { slateEditor } from "@payloadcms/richtext-slate";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

// Collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Boats } from "./collections/Boats";
import { Brands } from "./collections/Brands";
import { Services } from "./collections/Services";
import { Testimonials } from "./collections/Testimonials";
import { Settings } from "./collections/Settings";
import { Navigation } from "./collections/Navigation";

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
	secret: process.env.PAYLOAD_SECRET || "YOUR-SECRET-KEY",
	admin: {
		user: "users",
		bundler: "webpack",
	},
	editor: slateEditor({}),
	db: postgresAdapter({
		pool: {
			connectionString: process.env.POSTGRES_URL,
		},
	}),
	collections: [Users, Media, Pages, Boats, Brands, Services, Testimonials, Settings, Navigation],
	plugins: [
		vercelBlobStorage({
			enabled: true,
			collections: {
				media: true,
			},
			token: process.env.BLOB_READ_WRITE_TOKEN || "",
		}),
		seoPlugin({
			collections: ["pages", "boats"],
			uploadsCollection: "media",
			generateTitle: ({ doc }) => doc.title || "Impact Marine Group",
			generateDescription: ({ doc }) => doc.excerpt || "Premier boat sales and service in Georgia",
			generateImage: ({ doc }) => doc.featuredImage?.url || "/og-image.jpg",
			generateURL: ({ doc }) => `https://impactmarinegroup.com/${doc.slug}`,
		}),
	],
	typescript: {
		outputFile: "types/payload-types.ts",
	},
	cors: ["http://localhost:3000"],
	csrf: ["http://localhost:3000"],
});
