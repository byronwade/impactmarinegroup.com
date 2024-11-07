import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Anchor, ChevronRight, Users, Wrench, Waves } from "lucide-react";
import Image from "next/image";
import { SanityService } from "@/actions/sanity";

export default async function ServicesSection({ services }: { services: SanityService[] }) {
	if (!services?.length) return null;

	return (
		<section id="services" aria-labelledby="services-heading" className="py-24 bg-muted">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4 text-foreground font-medium">
						<Award className="w-4 h-4 mr-2" />
						Premier Boat Dealer
					</Badge>
					<h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
						Georgia's Leader in Boat Sales & Marine Service
					</h2>
					<p className="text-xl text-foreground max-w-3xl mx-auto">Offering active boaters the best brands at the best prices, we're proud to be Lake Lanier's premier dealer for top boat manufacturers.</p>
				</div>

				<div className="grid grid-cols-1 gap-12 mb-16">
					{services.map((service) => (
						<Card key={service._id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
							<div className="md:flex">
								<div className="md:w-3/5">
									<CardHeader className="bg-muted">
										<CardTitle className="text-2xl font-bold flex items-center">
											{service.icon && <span className="w-6 h-6 mr-3">{service.icon}</span>}
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="p-6">
										<p className="text-foreground mb-6">{service.description}</p>
										<Button className="w-full sm:w-auto">
											Learn More
											<ChevronRight className="ml-2 h-5 w-5" />
										</Button>
									</CardContent>
								</div>
								{service.image?.asset?.url && (
									<div className="md:w-2/5 relative">
										<Image alt={`${service.title} - Impact Marine Group`} src={service.image.asset.url} width={service.image.asset.metadata.dimensions.width} height={service.image.asset.metadata.dimensions.height} className="absolute inset-0 object-cover w-full h-full" loading="lazy" />
									</div>
								)}
							</div>
						</Card>
					))}
				</div>

				<Card className="bg-primary text-primary-foreground overflow-hidden">
					<CardContent className="p-8 md:p-12">
						<div className="flex flex-col md:flex-row items-center justify-between gap-8">
							<div className="text-center md:text-left md:w-2/3">
								<h3 className="text-3xl md:text-4xl font-bold mb-4">We Don't Just Sell Stuff - We Live It!</h3>
								<p className="text-xl md:text-2xl">Our passion for boating goes beyond sales. We're active boaters ourselves, ensuring we provide you with the best advice and service based on real-world experience.</p>
							</div>
							<div className="flex flex-wrap justify-center gap-6 md:w-1/3">
								<div className="flex flex-col items-center">
									<div className="bg-primary-foreground/20 rounded-full p-4 mb-2">
										<Users className="w-8 h-8" />
									</div>
									<span className="text-sm font-medium">Expert Team</span>
								</div>
								<div className="flex flex-col items-center">
									<div className="bg-primary-foreground/20 rounded-full p-4 mb-2">
										<Wrench className="w-8  h-8" />
									</div>
									<span className="text-sm font-medium">Quality Service</span>
								</div>
								<div className="flex flex-col items-center">
									<div className="bg-primary-foreground/20 rounded-full p-4 mb-2">
										<Award className="w-8 h-8" />
									</div>
									<span className="text-sm font-medium">Top Brands</span>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
