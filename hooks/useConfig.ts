import { useQuery } from "@tanstack/react-query";
import { getSiteConfig } from "@/actions/sanity";

export function useConfig() {
	const {
		data: config = null,
		error,
		isLoading: loading,
	} = useQuery({
		queryKey: ["siteConfig"],
		queryFn: getSiteConfig,
	});

	return { config, error, loading };
}
