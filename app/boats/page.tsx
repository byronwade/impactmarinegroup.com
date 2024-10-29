"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Boat = {
	"Stock Number": string;
	Location: string;
	Condition: string;
	Status: string;
	"Model Year": string;
	Manufacturer: string;
	Model: string;
	Trim: string;
	Retail: string;
	Sales: string;
	Web: string;
	Discount: string;
};

const fakeBoats: Boat[] = [
	{
		"Stock Number": "10192803367",
		Location: "Impact Marine Group",
		Condition: "NEW",
		Status: "Available",
		"Model Year": "2023",
		Manufacturer: "Sea Fox",
		Model: "288 Commander",
		Trim: "Center Console",
		Retail: "189000",
		Sales: "2023-10-15",
		Web: "2023-09-01",
		Discount: "",
	},
	{
		"Stock Number": "10192803368",
		Location: "Impact Marine Group",
		Condition: "USED",
		Status: "Available",
		"Model Year": "2021",
		Manufacturer: "Sweetwater",
		Model: "2286 SB",
		Trim: "Pontoon",
		Retail: "45000",
		Sales: "2023-10-20",
		Web: "2023-09-05",
		Discount: "5%",
	},
	{
		"Stock Number": "10192803369",
		Location: "Impact Marine Group",
		Condition: "NEW",
		Status: "On Order",
		"Model Year": "2024",
		Manufacturer: "Sea Fox",
		Model: "328 Commander",
		Trim: "Center Console",
		Retail: "259000",
		Sales: "",
		Web: "2023-09-10",
		Discount: "",
	},
	{
		"Stock Number": "10192803370",
		Location: "Impact Marine Group",
		Condition: "USED",
		Status: "Sold",
		"Model Year": "2020",
		Manufacturer: "Sweetwater",
		Model: "2486 SB",
		Trim: "Pontoon",
		Retail: "55000",
		Sales: "2023-10-25",
		Web: "2023-09-15",
		Discount: "SOLD",
	},
	{
		"Stock Number": "10192803371",
		Location: "Impact Marine Group",
		Condition: "NEW",
		Status: "Available",
		"Model Year": "2023",
		Manufacturer: "Sea Fox",
		Model: "268 Commander",
		Trim: "Center Console",
		Retail: "159000",
		Sales: "",
		Web: "2023-09-20",
		Discount: "",
	},
	{
		"Stock Number": "10192803372",
		Location: "Impact Marine Group",
		Condition: "USED",
		Status: "Available",
		"Model Year": "2022",
		Manufacturer: "Sweetwater",
		Model: "2386 SB",
		Trim: "Pontoon",
		Retail: "50000",
		Sales: "",
		Web: "2023-09-25",
		Discount: "3%",
	},
];

export default function Component() {
	const [displayCount, setDisplayCount] = useState(6);
	const [selectedManufacturer, setSelectedManufacturer] = useState("All Manufacturers");
	const [selectedCondition, setSelectedCondition] = useState("All Conditions");
	const [searchQuery, setSearchQuery] = useState("");

	const manufacturers = useMemo(() => {
		const allManufacturers = new Set(fakeBoats.map((boat) => boat.Manufacturer));
		return ["All Manufacturers", ...Array.from(allManufacturers)];
	}, []);

	const conditions = useMemo(() => {
		const allConditions = new Set(fakeBoats.map((boat) => boat.Condition));
		return ["All Conditions", ...Array.from(allConditions)];
	}, []);

	const filteredBoats = useMemo(() => {
		return fakeBoats.filter((boat) => (selectedManufacturer === "All Manufacturers" || boat.Manufacturer === selectedManufacturer) && (selectedCondition === "All Conditions" || boat.Condition === selectedCondition) && (boat.Manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) || boat.Model.toLowerCase().includes(searchQuery.toLowerCase()) || boat.Trim.toLowerCase().includes(searchQuery.toLowerCase())));
	}, [selectedManufacturer, selectedCondition, searchQuery]);

	const displayedBoats = useMemo(() => {
		return filteredBoats.slice(0, displayCount);
	}, [filteredBoats, displayCount]);

	const loadMore = () => {
		setDisplayCount((prevCount) => Math.min(prevCount + 6, filteredBoats.length));
	};

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
					<Card key={boat["Stock Number"]} className="overflow-hidden">
						<div className="relative aspect-w-16 aspect-h-9">
							<Image src="/service-department.webp" alt={`${boat.Manufacturer} ${boat.Model}`} width={600} height={400} className="object-cover transition-transform duration-300 hover:scale-105" />
							<div className="absolute top-2 right-2">
								<Badge variant={boat.Condition === "NEW" ? "default" : "secondary"}>{boat.Condition}</Badge>
							</div>
						</div>
						<CardHeader>
							<CardTitle className="flex justify-between items-center">
								<span>
									{boat.Manufacturer} {boat.Model}
								</span>
								<Badge variant="outline">{boat["Model Year"]}</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-2">{boat.Trim}</p>
							<p className="font-semibold text-lg">${parseInt(boat.Retail).toLocaleString()}</p>
							<p className="text-sm text-muted-foreground">Status: {boat.Status}</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm">
								Request Info
							</Button>
							<Button asChild size="sm">
								<Link href={`/boats/details/${boat["Stock Number"]}`}>
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