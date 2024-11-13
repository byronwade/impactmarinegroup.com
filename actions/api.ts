"use server";

import { client } from "@/lib/sanity";

import { groq } from "next-sanity";

export async function searchProducts(query: string) {
	const searchQuery = groq`*[_type in ["product", "boat"] && title match $searchQuery]`;

	return client.fetch(searchQuery, { searchQuery: `*${query}*` });
}
