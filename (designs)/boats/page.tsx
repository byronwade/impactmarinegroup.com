"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getAllInventoryBoats } from "@/actions/sanity";

export default function BoatsPage() {
	const [displayCount, setDisplayCount] = useState(6);
	const [selectedManufacturer, setSelectedManufacturer] = useState("All Manufacturers");
	const [selectedCondition, setSelectedCondition] = useState("All Conditions");
	const [searchQuery, setSearchQuery] = useState("");

	// Use React Query for data fetching
	const { data: boats = [], isLoading } = useQuery({
		queryKey: ["boats"],
		queryFn: getAllInventoryBoats,
	});

	const manufacturers = useMemo(() => {
		const allManufacturers = new Set(boats.map((boat) => boat.manufacturer));
		return ["All Manufacturers", ...Array.from(allManufacturers)];
	}, [boats]);

	const conditions = useMemo(() => {
		const allConditions = new Set(boats.map((boat) => boat.condition));
		return ["All Conditions", ...Array.from(allConditions)];
	}, [boats]);

	const filteredBoats = useMemo(() => {
		return boats.filter((boat) => {
			if (!boat) return false;

			const manufacturerMatch = selectedManufacturer === "All Manufacturers" || (boat.manufacturer && boat.manufacturer === selectedManufacturer);

			const conditionMatch = selectedCondition === "All Conditions" || (boat.condition && boat.condition === selectedCondition);

			const searchMatch = !searchQuery || [boat.manufacturer, boat.model, boat.trim].some((field) => field?.toLowerCase().includes(searchQuery.toLowerCase()));

			return manufacturerMatch && conditionMatch && searchMatch;
		});
	}, [boats, selectedManufacturer, selectedCondition, searchQuery]);

	const displayedBoats = useMemo(() => {
		return filteredBoats.slice(0, displayCount);
	}, [filteredBoats, displayCount]);

	const loadMore = () => {
		setDisplayCount((prevCount) => Math.min(prevCount + 6, filteredBoats.length));
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<h1 className="text-4xl font-bold text-center mb-8">Our Boat Inventory</h1>

			<div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
				<div className="relative w-full sm:w-96">
					<Input type="text" placeholder="Search boats..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				</div>
				<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
					<Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
						<SelectTrigger className="w-full sm:w-[200px]">
							<SelectValue placeholder="Select Manufacturer" />
						</SelectTrigger>
						<SelectContent>
							{manufacturers.map((manufacturer) => (
								<SelectItem key={manufacturer} value={manufacturer}>
									{manufacturer}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select value={selectedCondition} onValueChange={setSelectedCondition}>
						<SelectTrigger className="w-full sm:w-[200px]">
							<SelectValue placeholder="Select Condition" />
						</SelectTrigger>
						<SelectContent>
							{conditions.map((condition) => (
								<SelectItem key={condition} value={condition}>
									{condition}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{displayedBoats.map((boat) => (
					<Card key={boat._id} className="overflow-hidden">
						<div className="relative aspect-w-16 aspect-h-9">
							<Image src={boat.mainImage?.asset?.url || "/service-department.webp"} alt={`${boat.manufacturer} ${boat.model}`} width={600} height={400} className="object-cover transition-transform duration-300 hover:scale-105" />
							<div className="absolute top-2 right-2">
								<Badge variant={boat.condition === "NEW" ? "default" : "secondary"}>{boat.condition}</Badge>
							</div>
						</div>
						<CardHeader>
							<CardTitle className="flex justify-between items-center">
								<span>
									{boat.manufacturer} {boat.model}
								</span>
								<Badge variant="outline">{boat.modelYear}</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-2">{boat.trim}</p>
							<p className="font-semibold text-lg">
								{boat.price
									? new Intl.NumberFormat("en-US", {
											style: "currency",
											currency: "USD",
									  }).format(boat.price)
									: "Price on request"}
							</p>
							<p className="text-sm text-muted-foreground">Status: {boat.status}</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm">
								Request Info
							</Button>
							<Button asChild size="sm">
								<Link href={`/boats/${boat.slug}`}>
									View Details <ChevronRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			{displayCount < filteredBoats.length && (
				<div className="mt-12 text-center">
					<Button onClick={loadMore} size="lg" className="bg-primary hover:bg-primary/90">
						Load More
					</Button>
				</div>
			)}
		</div>
	);
}