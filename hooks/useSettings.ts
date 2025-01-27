"use client";

import { useEffect, useState } from "react";
import type { Setting } from "@/payload-types";

let cachedSettings: Setting | null = null;

export function useSettings() {
	const [settings, setSettings] = useState<Setting | null>(cachedSettings);

	useEffect(() => {
		async function fetchSettings() {
			try {
				const response = await fetch("/api/settings");
				const data = await response.json();
				cachedSettings = data;
				setSettings(data);
			} catch (error) {
				console.error("Error fetching settings:", error);
			}
		}

		if (!settings) {
			fetchSettings();
		}
	}, [settings]);

	return settings;
}
