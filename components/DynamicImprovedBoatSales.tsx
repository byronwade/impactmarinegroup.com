"use client";

import dynamic from "next/dynamic";

const ImprovedBoatSales = dynamic(() => import("@/components/improved-boat-sales"), {
	ssr: false,
});

export default function DynamicImprovedBoatSales() {
	return <ImprovedBoatSales />;
}
