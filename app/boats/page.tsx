"use client";

import { useState, useMemo } from "react";
import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

// Fake data mimicking the CSV structure
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
	{
		"Stock Number": "10192803373",
		Location: "Impact Marine Group",
		Condition: "NEW",
		Status: "On Order",
		"Model Year": "2024",
		Manufacturer: "Sea Fox",
		Model: "248 Commander",
		Trim: "Center Console",
		Retail: "139000",
		Sales: "",
		Web: "2023-09-30",
		Discount: "",
	},
	{
		"Stock Number": "10192803374",
		Location: "Impact Marine Group",
		Condition: "USED",
		Status: "Available",
		"Model Year": "2021",
		Manufacturer: "Sweetwater",
		Model: "2286 SB",
		Trim: "Pontoon",
		Retail: "48000",
		Sales: "",
		Web: "2023-10-05",
		Discount: "2%",
	},
];

export default function BoatInventoryShowcase() {
	const [displayCount, setDisplayCount] = useState(6);
	const [selectedManufacturer, setSelectedManufacturer] = useState("All");
	const [selectedCondition, setSelectedCondition] = useState("All");

	const manufacturers = useMemo(() => {
		const allManufacturers = new Set(fakeBoats.map((boat) => boat.Manufacturer));
		return ["All", ...Array.from(allManufacturers)];
	}, []);

	const conditions = useMemo(() => {
		const allConditions = new Set(fakeBoats.map((boat) => boat.Condition));
		return ["All", ...Array.from(allConditions)];
	}, []);

	const filteredBoats = useMemo(() => {
		return fakeBoats.filter((boat) => (selectedManufacturer === "All" || boat.Manufacturer === selectedManufacturer) && (selectedCondition === "All" || boat.Condition === selectedCondition));
	}, [selectedManufacturer, selectedCondition]);

	const displayedBoats = useMemo(() => {
		return filteredBoats.slice(0, displayCount);
	}, [filteredBoats, displayCount]);

	const loadMore = () => {
		setDisplayCount((prevCount) => Math.min(prevCount + 6, filteredBoats.length));
	};

	console.log("filteredBoats:", filteredBoats);
	console.log("displayCount:", displayCount);
	console.log("displayedBoats:", displayedBoats);

	return (
		<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Boat Inventory</h1>

			<div className="mb-8 flex justify-center gap-4">
				<Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a manufacturer" />
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
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a condition" />
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

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{displayedBoats.map((boat) => (
					<div key={boat["Stock Number"]} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
						<div className="aspect-w-4 aspect-h-3">
							<Image width={1000} height={1000} src="/service-department.webp" alt={`${boat.Manufacturer} ${boat.Model}`} objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==" />
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
						<div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
							<div>
								<h2 className="text-2xl font-bold mb-1 drop-shadow-md">
									{boat.Manufacturer} {boat.Model}
								</h2>
								<p className="text-sm font-medium opacity-90 drop-shadow-md">
									{boat["Model Year"]} {boat.Trim}
								</p>
							</div>
							<div className="flex justify-between items-end">
								<div className="space-y-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<p className="text-sm font-medium">Condition: {boat.Condition}</p>
									<p className="text-sm font-medium">Status: {boat.Status}</p>
									<p className="text-sm font-medium">Price: ${parseInt(boat.Retail).toLocaleString()}</p>
								</div>

								<Link href="/boats/details/" passHref>
									<Button size="sm" className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 shadow-md">
										Details <ChevronRight className="w-4 h-4 ml-1" />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{displayCount < filteredBoats.length && (
				<div className="mt-12 text-center">
					<Button onClick={loadMore} className="bg-blue-600 hover:bg-blue-700 text-white">
						Load More
					</Button>
				</div>
			)}
		</div>
	);
}
