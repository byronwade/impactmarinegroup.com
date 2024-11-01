"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ImprovedBoatSales = dynamic(() => import("@/components/improved-boat-sales"), {
	loading: () => <LoadingSkeleton />,
	ssr: false,
});

function LoadingSkeleton() {
	return (
		<div className="w-full">
			<div className="w-full h-[600px] animate-pulse bg-muted/50 rounded-xl" />
		</div>
	);
}

export default function DynamicImprovedBoatSales() {
	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<ImprovedBoatSales />
		</Suspense>
	);
}
