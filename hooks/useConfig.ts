"use client";

import { useQuery } from "@tanstack/react-query";
import { SiteConfig } from "@/app/actions/sanity";
import { client } from "@/lib/sanity";

async function fetchConfig(): Promise<SiteConfig> {
	const query = `*[_type == "siteConfig"][0] {
		siteName,
		domain,
		companyName,
		phoneNumber,
		email,
		"address": {
			"street": address.street,
			"city": address.city,
			"state": address.state,
			"zip": address.zip
		},
		"socialMedia": socialMedia[] {
			platform,
			url
		}
	}`;

	return client.fetch(query);
}

export function useConfig() {
	const {
		data: config = null,
		error,
		isLoading: loading,
	} = useQuery({
		queryKey: ["siteConfig"],
		queryFn: fetchConfig,
	});

	return { config, error, loading };
}
