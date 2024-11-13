export const clientConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2024-03-21",
	useCdn: process.env.NODE_ENV === "production",
};
