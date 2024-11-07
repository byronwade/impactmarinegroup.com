import { useQuery } from "@tanstack/react-query";
import { getBoatBySlug } from "@/actions/sanity";

export function useBoat(slug: string) {
	return useQuery({
		queryKey: ["boat", slug],
		queryFn: () => getBoatBySlug(slug),
		enabled: !!slug, // Only run query if slug exists
	});
}
