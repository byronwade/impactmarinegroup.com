"use client";

import { useState } from "react";
import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Anchor, Ship, Tag } from "lucide-react";
import Image from "next/image";

const boatTypes = ["All Inventory", "Pontoon Boats", "Sea Fox Boats", "Pre-Owned Boats", "Trailers"];

const boatsData = [
	{
		id: 1,
		name: "NEW 2022 Boatmate Inboard trailer Black",
		type: "Trailers",
		price: 9750,
		retailPrice: 12500,
		image: "https://placehold.co/400x600",
		stock: "8569T",
		status: "SALE PENDING",
		condition: "NEW",
	},
	{
		id: 2,
		name: "2024 Sea Fox 251 Bay w Trailer",
		type: "Sea Fox Boats",
		price: 99750,
		retailPrice: 161135,
		image: "https://placehold.co/400x600",
		stock: "121K",
		status: "Available",
		condition: "NEW",
		description: "Bull Shark Grey with Black Powder Coat and Motor",
	},
	{
		id: 3,
		name: "Magic Tilt Trailer",
		type: "Trailers",
		price: 7750,
		retailPrice: 11800,
		image: "https://placehold.co/400x600",
		stock: "47703",
		status: "Available",
		condition: "NEW",
		description: "Can fit 22' to 24' boat. This is the only Trailer we have for Sale!",
	},
	{
		id: 4,
		name: "2021 Ranger VS1782",
		type: "Pre-Owned Boats",
		price: 28000,
		image: "https://placehold.co/400x600",
		stock: "CONS-102GA",
		status: "Available",
		condition: "USED",
	},
	{
		id: 5,
		name: "2019 Tige R22",
		type: "Pre-Owned Boats",
		price: 75000,
		image: "https://placehold.co/400x600",
		stock: "CONS-104MIC",
		status: "Available",
		condition: "USED",
	},
	{
		id: 6,
		name: "2011 Bennington 2575 RCW I/O",
		type: "Pontoon Boats",
		price: 0,
		image: "https://placehold.co/400x600",
		stock: "CONS-105RUG",
		status: "Available",
		condition: "USED",
	},
];

export default function BoatDealershipPage() {
	const [selectedType, setSelectedType] = useState("All Inventory");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredBoats = boatsData.filter((boat) => (selectedType === "All Inventory" || boat.type === selectedType) && boat.name.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<>
			<Head>
				<title>Discover Your Perfect Boat | Impact Marine Group</title>
				<meta name="description" content="Browse our wide selection of new and pre-owned boats, including Pontoon Boats, Sea Fox Boats, and trailers. Find your dream boat today!" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://www.impactmarinegroup.com/inventory" />
			</Head>
			<div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
				<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
					<section className="relative h-60 sm:h-80 mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-xl">
						<Image src="https://placehold.co/1200x600" alt="Various boats on a calm lake" fill className="object-cover" />
						<div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ml-4 sm:ml-8">
								Discover Your <br />
								Perfect Boat
							</h1>
						</div>
					</section>

					<div className="container mx-auto">
						<section className="mb-8" aria-labelledby="filter-heading">
							<h2 id="filter-heading" className="sr-only">
								Filter and search boats
							</h2>
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
								<div className="flex flex-wrap gap-2 sm:gap-4">
									{boatTypes.map((type) => (
										<Button key={type} variant={selectedType === type ? "default" : "outline"} onClick={() => setSelectedType(type)} className="transition-all duration-200 ease-in-out hover:scale-105">
											{type}
										</Button>
									))}
								</div>
								<div className="w-full sm:w-auto">
									<Input type="search" placeholder="Search boats..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full sm:w-64" aria-label="Search boats" />
								</div>
							</div>
						</section>

						<section aria-labelledby="boats-heading">
							<h2 id="boats-heading" className="sr-only">
								Available Boats
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
								{filteredBoats.map((boat) => (
									<Card key={boat.id} className="overflow-hidden transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105">
										<div className="relative">
											<Image src={boat.image} alt={boat.name} width={500} height={192} className="w-full h-48 object-cover" />
											<Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{boat.condition}</Badge>
										</div>
										<CardContent className="p-4">
											<h3 className="text-lg font-semibold mb-2 line-clamp-2">{boat.name}</h3>
											<div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
												<Tag className="h-4 w-4" aria-hidden="true" />
												<span>Stock #: {boat.stock}</span>
											</div>
											<div className="flex justify-between items-center mb-2">
												<span className="text-sm font-medium">{boat.type}</span>
												<Badge variant={boat.status === "Available" ? "outline" : "secondary"}>{boat.status}</Badge>
											</div>
											{boat.retailPrice && <p className="text-sm text-muted-foreground line-through">Retail: ${boat.retailPrice.toLocaleString()}</p>}
											<p className="text-xl font-bold text-primary">{boat.price > 0 ? `$${boat.price.toLocaleString()}` : "Contact for Price"}</p>
											{boat.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{boat.description}</p>}
										</CardContent>
										<CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-4">
											<Button variant="outline" className="w-full sm:w-1/2">
												View Details
											</Button>
											<Button className="w-full sm:w-1/2">
												<Anchor className="mr-2 h-4 w-4" aria-hidden="true" />
												History Report
											</Button>
										</CardFooter>
									</Card>
								))}
							</div>
						</section>

						{filteredBoats.length === 0 && (
							<div className="text-center py-12">
								<Ship className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
								<h2 className="mt-4 text-lg font-semibold text-foreground">No boats found</h2>
								<p className="mt-2 text-muted-foreground">Try adjusting your search or filter to find what you&apos;re looking for.</p>
							</div>
						)}
					</div>
				</main>
			</div>
		</>
	);
}