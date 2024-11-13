"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
	useEffect(() => {
		const reportPerformance = () => {
			if (performance && performance.getEntriesByType) {
				const metrics = performance.getEntriesByType("navigation")[0];
				console.log("Page Load Metrics:", metrics);
			}
		};

		reportPerformance();
	}, []);

	return null;
}
