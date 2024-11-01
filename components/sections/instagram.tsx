import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Instagram, Anchor } from "lucide-react";
import Image from "next/image";

export default function SocialSection() {
	return (
		<section id="social" aria-labelledby="social-heading" className="py-16 bg-muted">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="flex items-center justify-center mb-12">
					<Anchor className="w-10 h-10 mr-3" />
					<h2 id="social-heading" className="text-4xl font-bold">
						Sail Through Our Instagram
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[...Array(6)].map((_, index) => (
						<Card key={index} className="overflow-hidden border-2 border-muted hover:border-primary transition-colors duration-300 shadow-lg border-gray-200">
							<CardContent className="p-4 bg-muted">
								<div className="flex items-center space-x-4">
									<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
										<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">IM</span>
									</span>
									<div>
										<p className="text-sm font-medium">Impact Marine Group</p>
										<p className="text-xs text-foreground">@impactmarinegroup</p>
									</div>
								</div>
							</CardContent>
							<div className="relative group">
								<Image src="/service-department.webp" alt={`Beautiful boat showcased by Impact Marine Group on Instagram`} width={400} height={400} className="transition-transform duration-300 group-hover:scale-105 object-cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==" loading="lazy" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
									<Button variant="secondary" size="sm" className="text-xs bg-background/80 hover:bg-background">
										<Heart className="h-4 w-4 mr-1 text-red-500" />
										{Math.floor(Math.random() * 200) + 50}
									</Button>
									<Button variant="secondary" size="sm" className="text-xs bg-background/80 hover:bg-background">
										<MessageCircle className="h-4 w-4 mr-1 text-primary" />
										{Math.floor(Math.random() * 30) + 5}
									</Button>
								</div>
							</div>
							<CardContent className="p-4">
								<p className="text-sm">
									<span className="font-medium">impactmarinegroup</span>{" "}
									<span className="text-foreground">
										{["Cruising into the weekend with our latest model! 🚤 #BoatLife", "Perfect day for a test drive on the water. Who wants to join? 🌊", "Just arrived: The all-new SpeedMaster 3000. Come see it in person! 😍", "Summer is calling, and so are our boats! ☀️🛥️ #SummerAdventures", "Sunset cruise on our luxury yacht. This could be you! 🌅 #YachtLife", "New fishing boats in stock! Perfect for your next catch 🎣 #FishingLife"][index]}
									</span>
								</p>
								<Button variant="link" size="sm" className="mt-2 p-0 h-auto">
									View all {Math.floor(Math.random() * 20) + 5} comments
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
				<div className="text-center mt-12">
					<Button size="lg">
						<Instagram className="w-5 h-5 mr-2" />
						Follow Our Nautical Journey
					</Button>
				</div>
			</div>
		</section>
	);
}
