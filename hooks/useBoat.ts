"use client";

import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import type { SanityBoat } from "@/types/sanity";

export function useBoat(slug: string) {
	return useQuery({
		queryKey: ["boat", slug],
		queryFn: async () => {
			const query = groq`*[_type == "boat" && slug.current == $slug][0]`;
			return client.fetch<SanityBoat>(query, { slug });
		},
	});
}
