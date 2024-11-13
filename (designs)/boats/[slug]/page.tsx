"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Printer, ChevronRight, Phone } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useBoat } from "@/hooks/useBoat";
import type { SanityImage } from "@/types/sanity";

interface GalleryImage extends SanityImage {
	asset: {
		url: string;
	};
}

interface BoatPageProps {
	params: {
		slug: string;
	};
}

export default function BoatDetails({ params }: BoatPageProps) {
	const { slug } = params;
	const { data: boat, isLoading } = useBoat(slug);
	const [mainImage, setMainImage] = useState<string | null>(null);

	useEffect(() => {
		setMainImage(boat?.mainImage?.asset?.url || null);
	}, [boat]);

	if (isLoading) return <div>Loading...</div>;
	if (!boat) return <div>Boat not found</div>;

	const savings = boat.listPrice && boat.price ? boat.listPrice - boat.price : 0;
	const savingsPercentage = boat.listPrice && boat.price ? Math.round((savings / boat.listPrice) * 100) : 0;
	const boatTitle = [boat.condition, boat.modelYear, boat.manufacturer, boat.model, boat.trim].filter(Boolean).join(" ");

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-gray-800 text-white py-2">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<nav className="text-sm" aria-label="Breadcrumb">
						<ol className="list-none p-0 inline-flex">
							<li className="flex items-center">
								<Link href="/" className="text-gray-300 hover:text-white">
									Home
								</Link>
								<ChevronRight className="w-4 h-4 mx-2" />
							</li>
							<li className="flex items-center">
								<Link href="/boats" className="text-gray-300 hover:text-white">
									Boats
								</Link>
								<ChevronRight className="w-4 h-4 mx-2" />
							</li>
							<li>
								<span aria-current="page">{boatTitle}</span>
							</li>
						</ol>
					</nav>
				</div>
			</header>

			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<h1 className="text-3xl font-bold mb-6 text-primary">{boatTitle}</h1>
				<div className="grid lg:grid-cols-12 gap-6">
					<div className="lg:col-span-7 space-y-3">
						<div className="relative w-full aspect-square">
							<Image src={mainImage || "/placeholder-boat.jpg"} alt={boatTitle} width={600} height={600} className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						</div>
						{boat.gallery && boat.gallery.length > 0 && (
							<div className="flex space-x-2 overflow-x-auto py-2">
								{boat.gallery.map((thumb: GalleryImage, index: number) => (
									<div key={index} className="relative w-20 h-20 flex-shrink-0">
										<Image src={thumb.asset?.url || "/placeholder-thumb.jpg"} alt={`${boatTitle} - Image ${index + 1}`} width={100} height={100} className="rounded cursor-pointer hover:opacity-75 object-cover" sizes="80px" onClick={() => setMainImage(thumb.asset?.url || null)} />
									</div>
								))}
							</div>
						)}
					</div>

					<div className="lg:col-span-5 space-y-4">
						<div className="bg-white p-6 rounded-lg shadow">
							{boat.status && <Badge className="bg-yellow-500 text-black mb-3">{boat.status}</Badge>}
							{boat.price && <p className="text-3xl font-bold text-red-600 mb-3">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(boat.price)}</p>}
							{boat.listPrice && (
								<>
									<p className="text-muted-foreground line-through mb-3">List Price: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(boat.listPrice)}</p>
									{savings > 0 && (
										<p className="text-lg font-semibold text-green-600 mb-3">
											You Save: {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(savings)} ({savingsPercentage}%)
										</p>
									)}
								</>
							)}
							<p className="text-red-500 font-semibold mb-4">Only 1 left in stock - order soon.</p>
							<Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3">
								<Phone className="w-4 h-4 mr-2" />
								Contact Seller
							</Button>
							<Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
								Apply for Financing
							</Button>
						</div>

						<div className="bg-white p-6 rounded-lg shadow">
							<h2 className="text-2xl font-bold mb-3 text-primary">Product Information</h2>
							<ul className="space-y-1">
								{boat.stockNumber && (
									<li>
										<strong>Stock #:</strong> {boat.stockNumber}
									</li>
								)}
								{boat.modelYear && (
									<li>
										<strong>Year:</strong> {boat.modelYear}
									</li>
								)}
								{boat.manufacturer && (
									<li>
										<strong>Make:</strong> {boat.manufacturer}
									</li>
								)}
								{boat.model && (
									<li>
										<strong>Model:</strong> {boat.model}
									</li>
								)}
								{boat.trim && (
									<li>
										<strong>Trim:</strong> {boat.trim}
									</li>
								)}
								{boat.condition && (
									<li>
										<strong>Condition:</strong> {boat.condition}
									</li>
								)}
								{boat.category && (
									<li>
										<strong>Category:</strong> {boat.category}
									</li>
								)}
								{boat.specs?.length && (
									<li>
										<strong>LOA:</strong> {boat.specs.length}
									</li>
								)}
								{boat.specs?.dryWeight && (
									<li>
										<strong>Dry Weight W Engines:</strong> {boat.specs.dryWeight}
									</li>
								)}
								{boat.specs?.speed && (
									<li>
										<strong>Top Speed:</strong> {boat.specs.speed}
									</li>
								)}
								{boat.specs?.capacity && (
									<li>
										<strong>Capacity:</strong> {boat.specs.capacity}
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>

				<section className="mt-8 sm:mt-12">
					<h2 className="text-2xl font-bold mb-4 text-primary">Product Description</h2>
					<p>{boat.description}</p>
				</section>

				<section className="mt-8 sm:mt-12 bg-white p-6 rounded-lg shadow">
					<h2 className="text-2xl font-bold mb-4 text-primary">Need More Information?</h2>
					<p className="mb-4">Our team is here to help you with any questions you may have about this trailer.</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
							<Mail className="w-4 h-4 mr-2" />
							Email Us
						</Button>
						<Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
							<Printer className="w-4 h-4 mr-2" />
							Print Details
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
