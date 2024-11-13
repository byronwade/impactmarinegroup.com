"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getAllInventoryBoats } from "@/actions/sanity";
import type { SanityBoat } from "@/types/sanity";

export default function BoatsPage() {
	const [boats, setBoats] = useState<SanityBoat[]>([]);
	const [displayCount, setDisplayCount] = useState(6);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCondition, setSelectedCondition] = useState("All Conditions");

	useEffect(() => {
		const fetchBoats = async () => {
			const boatData = await getAllInventoryBoats();
			setBoats(boatData);
		};
		fetchBoats();
	}, []);

	const conditions = useMemo(() => {
		const allConditions = new Set(boats.map((boat) => boat.condition || "Unknown"));
		return ["All Conditions", ...Array.from(allConditions)];
	}, [boats]);

	const filteredBoats = useMemo(() => {
		return boats
			.filter((boat) => {
				const matchesSearch = boat.name.toLowerCase().includes(searchTerm.toLowerCase()) || boat.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) || boat.model.toLowerCase().includes(searchTerm.toLowerCase());

				const matchesCondition = selectedCondition === "All Conditions" || boat.condition === selectedCondition;

				return matchesSearch && matchesCondition;
			})
			.slice(0, displayCount);
	}, [boats, searchTerm, selectedCondition, displayCount]);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex flex-col md:flex-row gap-4 mb-8">
				<Input type="text" placeholder="Search boats..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-xs" />
				<select value={selectedCondition} onChange={(e) => setSelectedCondition(e.target.value)} className="border rounded p-2 max-w-xs">
					{conditions.map((condition) => (
						<option key={condition} value={condition}>
							{condition}
						</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredBoats.map((boat) => (
					<Link key={boat._id} href={`/boats/${boat.slug.current}`}>
						<div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
							<div className="relative h-48">
								<Image src={boat.mainImage?.asset?.url || "/placeholder.jpg"} alt={boat.name} layout="fill" objectFit="cover" />
							</div>
							<div className="p-4">
								<h2 className="text-xl font-bold">{boat.name}</h2>
								<p className="text-gray-600">
									{boat.manufacturer} {boat.model}
								</p>
								<p className="text-lg font-semibold mt-2">${boat.price.toLocaleString()}</p>
								{boat.condition && <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mt-2">{boat.condition}</span>}
							</div>
						</div>
					</Link>
				))}
			</div>

			{boats.length > displayCount && (
				<div className="text-center mt-8">
					<Button onClick={() => setDisplayCount((prev) => prev + 6)}>Load More</Button>
				</div>
			)}
		</div>
	);
}