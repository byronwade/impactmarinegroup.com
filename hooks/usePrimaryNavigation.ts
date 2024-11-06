"use client";

import { useState, useEffect } from "react";
import { getPrimaryNavigation } from "@/app/actions/sanity";
import type { MenuItem } from "@/app/actions/sanity";

export function usePrimaryNavigation() {
	const [items, setItems] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchNavigation() {
			try {
				const navItems = await getPrimaryNavigation();
				setItems(navItems);
			} catch (error) {
				console.error("Error fetching navigation:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchNavigation();
	}, []);

	return { items, loading };
}
