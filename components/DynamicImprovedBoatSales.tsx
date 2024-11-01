"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ImprovedBoatSales = dynamic(() => import("@/components/improved-boat-sales"), {
	loading: () => <div className="w-full h-[600px] animate-pulse bg-muted/50 rounded-xl" />,
	ssr: false,
});

export default function DynamicImprovedBoatSales() {
	return (
		<Suspense fallback={<div className="w-full h-[600px] animate-pulse bg-muted/50 rounded-xl" />}>
			<ImprovedBoatSales />
		</Suspense>
	);
}
