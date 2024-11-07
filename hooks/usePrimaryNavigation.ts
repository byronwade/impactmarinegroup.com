import { useQuery } from "@tanstack/react-query";
import { getPrimaryNavigation } from "@/actions/sanity";

export function usePrimaryNavigation() {
	const { data: items = [], isLoading: loading } = useQuery({
		queryKey: ["primaryNavigation"],
		queryFn: getPrimaryNavigation,
	});

	return { items, loading };
}
