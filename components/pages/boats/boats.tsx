"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Boat {
	id: string;
	name: string;
	manufacturer: string;
	model: string;
	year: number;
	type: string;
	price: number;
	status: string;
	condition: "NEW" | "USED";
	image: string;
}

const boats: Boat[] = [
	{
		id: "10192803367",
		name: "Sea Fox 288 Commander",
		manufacturer: "Sea Fox",
		model: "288 Commander",
		year: 2023,
		type: "Center Console",
		price: 189000,
		status: "Available",
		condition: "NEW",
		image: `/placeholder.svg?height=400&width=600`,
	},
	{
		id: "10192803368",
		name: "Sweetwater 2286 SB",
		manufacturer: "Sweetwater",
		model: "2286 SB",
		year: 2021,
		type: "Pontoon",
		price: 45000,
		status: "Available",
		condition: "USED",
		image: `/placeholder.svg?height=400&width=600`,
	},
	{
		id: "10192803369",
		name: "Sea Fox 328 Commander",
		manufacturer: "Sea Fox",
		model: "328 Commander",
		year: 2024,
		type: "Center Console",
		price: 259000,
		status: "On Order",
		condition: "NEW",
		image: `/placeholder.svg?height=400&width=600`,
	},
	{
		id: "10192803370",
		name: "Sweetwater 2486 SB",
		manufacturer: "Sweetwater",
		model: "2486 SB",
		year: 2020,
		type: "Pontoon",
		price: 55000,
		status: "Sold",
		condition: "USED",
		image: `/placeholder.svg?height=400&width=600`,
	},
	{
		id: "10192803371",
		name: "Sea Fox 268 Commander",
		manufacturer: "Sea Fox",
		model: "268 Commander",
		year: 2023,
		type: "Center Console",
		price: 159000,
		status: "Available",
		condition: "NEW",
		image: `/placeholder.svg?height=400&width=600`,
	},
	{
		id: "10192803372",
		name: "Sweetwater 2386 SB",
		manufacturer: "Sweetwater",
		model: "2386 SB",
		year: 2022,
		type: "Pontoon",
		price: 50000,
		status: "Available",
		condition: "USED",
		image: `/placeholder.svg?height=400&width=600`,
	},
];

export function BoatInventory() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedManufacturer, setSelectedManufacturer] = useState("All Manufacturers");
	const [selectedCondition, setSelectedCondition] = useState("All Conditions");

	const filteredBoats = boats.filter((boat) => {
		const matchesSearch = boat.name.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesManufacturer = selectedManufacturer === "All Manufacturers" || boat.manufacturer === selectedManufacturer;
		const matchesCondition = selectedCondition === "All Conditions" || boat.condition === selectedCondition;
		return matchesSearch && matchesManufacturer && matchesCondition;
	});

	return (
		<main role="main" aria-label="Main content" className="flex-grow">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<h1 className="text-4xl font-bold text-center mb-8">Our Boat Inventory</h1>
				<div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="relative w-full sm:w-96">
						<Input type="text" placeholder="Search boats..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					</div>
					<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
						<Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
							<SelectTrigger className="w-full sm:w-[200px]">
								<SelectValue placeholder="All Manufacturers" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="All Manufacturers">All Manufacturers</SelectItem>
								<SelectItem value="Sea Fox">Sea Fox</SelectItem>
								<SelectItem value="Sweetwater">Sweetwater</SelectItem>
							</SelectContent>
						</Select>
						<Select value={selectedCondition} onValueChange={setSelectedCondition}>
							<SelectTrigger className="w-full sm:w-[200px]">
								<SelectValue placeholder="All Conditions" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="All Conditions">All Conditions</SelectItem>
								<SelectItem value="NEW">New</SelectItem>
								<SelectItem value="USED">Used</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredBoats.map((boat) => (
						<Card key={boat.id} className="rounded-xl overflow-hidden">
							<div className="relative aspect-w-16 aspect-h-9">
								<Image src={boat.image} alt={boat.name} width={600} height={400} className="transition-transform duration-300 hover:scale-105" />
								<div className="absolute top-2 right-2">
									<Badge variant={boat.condition === "NEW" ? "default" : "secondary"}>{boat.condition}</Badge>
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="font-semibold leading-none tracking-tight flex justify-between items-center">
									<span>{boat.name}</span>
									<Badge variant="outline">{boat.year}</Badge>
								</h3>
								<p className="text-muted-foreground mb-2 mt-2">{boat.type}</p>
								<p className="font-semibold text-lg">${boat.price.toLocaleString()}</p>
								<p className="text-sm text-muted-foreground">Status: {boat.status}</p>
								<div className="mt-4 flex justify-between items-center">
									<Button variant="outline" size="sm">
										Request Info
									</Button>
									<Button asChild size="sm">
										<Link href={`/boats/${boat.id}?manufacturer=${boat.manufacturer}&model=${boat.model}&year=${boat.year}`}>
											View Details
											<ChevronRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
