"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PerformanceMonitor = dynamic(() => import("@/components/performance-monitor"), {
	ssr: false,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(/Mobile/.test(window.navigator.userAgent));
	}, []);

	return (
		<>
			{children}
			{!isMobile && <PerformanceMonitor />}
		</>
	);
}
