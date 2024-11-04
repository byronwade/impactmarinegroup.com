"use client";

import { useState, useEffect } from "react";
import { SiteConfig } from "@/app/actions/sanity";
import { client } from "@/lib/sanity";

export const useConfig = () => {
	const [config, setConfig] = useState<SiteConfig | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchConfig = async () => {
			try {
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

				const result = await client.fetch(query);
				setConfig(result);
			} catch (err) {
				console.error("Error fetching site config:", err);
				setError(err instanceof Error ? err : new Error("Failed to fetch config"));
			} finally {
				setLoading(false);
			}
		};

		fetchConfig();
	}, []);

	return { config, error, loading };
};
