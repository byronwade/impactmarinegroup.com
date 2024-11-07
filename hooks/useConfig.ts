import { useQuery } from "@tanstack/react-query";
import { getSiteConfig } from "@/actions/sanity";
import { SiteConfig } from "@/actions/sanity";

export function useConfig() {
	const {
		data: config = null,
		error,
		isLoading: loading,
	} = useQuery<SiteConfig>({
		queryKey: ["siteConfig"],
		queryFn: getSiteConfig,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	return {
		config: config || {
			siteName: "Impact Marine Group",
			domain: "",
			companyName: "Impact Marine Group",
			phoneNumber: "",
			email: "",
			logo: null,
			address: {
				street: "",
				city: "",
				state: "",
				zip: "",
			},
			socialMedia: [],
		},
		loading,
		error,
	};
}
