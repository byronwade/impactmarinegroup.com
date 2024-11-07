import { Badge } from "@/components/ui/badge";
import { Award, Wrench, Anchor, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SanityService } from "@/actions/sanity";
import { memo } from "react";

const iconMap = {
	wrench: Wrench,
	anchor: Anchor,
	users: Users,
};

const ServicesSection = memo(function ServicesSection({ services, title = "Our Services", subtitle }: { services: SanityService[]; title?: string; subtitle?: string }) {
	if (!services?.length) return null;

	return (
		<section id="services" aria-labelledby="services-heading" className="py-24 bg-muted">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="text-center mb-16">
					<Badge variant="outline" className="mb-4 text-foreground font-medium">
						<Award className="w-4 h-4 mr-2" />
						Premier Boat Services
					</Badge>
					<h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
						{title}
					</h2>
					{subtitle && <p className="text-xl text-foreground max-w-3xl mx-auto">{subtitle}</p>}
				</div>

				<div className="grid grid-cols-1 gap-12 mb-16">
					{services.map((service) => {
						const IconComponent = service.icon ? iconMap[service.icon] : null;

						return (
							<Card key={service._id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
								<div className="md:flex">
									<div className="md:w-3/5">
										<CardHeader className="bg-muted">
											<CardTitle className="text-2xl font-bold flex items-center">
												{IconComponent && <IconComponent className="w-6 h-6 mr-3" />}
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
										<div className="md:w-2/5 relative min-h-[300px]">
											<Image src={service.image.asset.url} alt={service.image.alt || `${service.title} service`} fill className="object-cover" loading="lazy" />
										</div>
									)}
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
});

export default ServicesSection;
