"use client";

import dynamic from "next/dynamic";

const PerformanceMonitor = dynamic(() => import("@/components/performance-monitor"), {
	ssr: false,
});

export default function PerformanceWrapper() {
	return <PerformanceMonitor />;
}
