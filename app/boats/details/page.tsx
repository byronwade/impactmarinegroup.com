"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Printer, ChevronRight, Phone } from "lucide-react"
import Image from "next/legacy/image"
import Link from "next/link"
import { useState } from "react"

export default function BoatDetails() {
  const [mainImage, setMainImage] = useState({
    src: "https://placehold.co/600x600",
    width: 600,
    height: 600
  });

  const thumbnails = [
    { src: "https://placehold.co/100x100", width: 100, height: 100 },
    { src: "https://placehold.co/100x100", width: 100, height: 100 },
    { src: "https://placehold.co/100x100", width: 100, height: 100 },
    { src: "https://placehold.co/100x100", width: 100, height: 100 },
  ];

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
								<span aria-current="page">2022 Boatmate Inboard trailer</span>
							</li>
						</ol>
					</nav>
				</div>
			</header>

			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<h1 className="text-3xl font-bold mb-6 text-primary">NEW 2022 Boatmate Inboard trailer Black</h1>
				<div className="grid lg:grid-cols-12 gap-6">
					<div className="lg:col-span-7 space-y-3">
						<div className="relative w-full aspect-square">
							<Image src={mainImage.src} alt="2022 Boatmate Inboard trailer" width={mainImage.width} height={mainImage.height} className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						</div>
						<div className="flex space-x-2 overflow-x-auto py-2">
							{thumbnails.map((thumb, index) => (
								<div key={index} className="relative w-20 h-20 flex-shrink-0">
									<Image src={thumb.src} alt={`Thumbnail ${index + 1}`} width={thumb.width} height={thumb.height} className="rounded cursor-pointer hover:opacity-75 object-cover" sizes="80px" onClick={() => setMainImage(thumb)} />
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 space-y-4">
						<div className="bg-white p-6 rounded-lg shadow">
							<Badge className="bg-yellow-500 text-black mb-3">SALE PENDING</Badge>
							<p className="text-3xl font-bold text-red-600 mb-3">$9,750</p>
							<p className="text-muted-foreground line-through mb-3">List Price: $12,500</p>
							<p className="text-lg font-semibold text-green-600 mb-3">You Save: $2,750 (22%)</p>
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
								<li>
									<strong>Stock #:</strong> 8569T
								</li>
								<li>
									<strong>Year:</strong> 2022
								</li>
								<li>
									<strong>Make:</strong> Boatmate
								</li>
								<li>
									<strong>Model:</strong> Inboard trailer
								</li>
								<li>
									<strong>Trim:</strong> Black
								</li>
								<li>
									<strong>Condition:</strong> NEW
								</li>
								<li>
									<strong>Category:</strong> Trailers
								</li>
								<li>
									<strong>LOA:</strong> 22&apos;
								</li>
								<li>
									<strong>Dry Weight W Engines:</strong> 3750 lbs capacity
								</li>
							</ul>
						</div>
					</div>
				</div>

				<section className="mt-8 sm:mt-12">
					<h2 className="text-2xl font-bold mb-4 text-primary">Product Description</h2>
					<p>The NEW 2022 Boatmate Inboard trailer Black is a top-of-the-line trailer designed for inboard boats. With its robust construction and sleek black finish, this trailer offers both functionality and style. It&apos;s capable of handling boats up to 22 feet in length and has a dry weight capacity of 3750 lbs, making it suitable for a wide range of inboard boats.</p>
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