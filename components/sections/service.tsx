import { memo } from "react";
import Image from "next/image";
import { iconMap } from "@/lib/icons";
import type { SanityService } from "@/types/sanity";
import type { LucideIcon } from "lucide-react";

interface ServicesSectionProps {
	title?: string;
	subtitle?: string;
	services: SanityService[];
}

const ServicesSection = memo(function ServicesSection({ title, subtitle, services }: ServicesSectionProps) {
	if (!services?.length) return null;

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				{(title || subtitle) && (
					<div className="text-center mb-12">
						{title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
						{subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
					</div>
				)}

				<div key="services-grid" className="grid grid-cols-1 gap-12 mb-16">
					{services.map((service) => {
						const IconComponent = service.icon ? (iconMap[service.icon] as LucideIcon) : null;

						return (
							<div key={service._id} className="flex flex-col md:flex-row items-start gap-6">
								{service.image?.asset?.url && (
									<div key={`${service._id}-image`} className="w-full md:w-1/3">
										<Image src={service.image.asset.url} alt={service.image.alt || service.title} width={400} height={300} className="rounded-lg object-cover w-full h-[200px]" />
									</div>
								)}

								<div key={`${service._id}-content`} className="flex-1">
									<div key={`${service._id}-header`} className="flex items-center gap-3 mb-4">
										{IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
										<h3 className="text-xl font-semibold">{service.title}</h3>
									</div>
									<p className="text-gray-600">{service.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
});

export default ServicesSection;
