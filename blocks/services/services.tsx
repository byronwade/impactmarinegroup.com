import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/icons";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type ServicesBlock = Extract<LayoutType[number], { blockType: "services" }>;

export default function Services(props: ServicesBlock) {
	const { title, description, services, cta } = props;

	return (
		<section className="py-20 bg-gray-50">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="mb-6 text-4xl font-bold tracking-tight">{title}</h2>
					<p className="mb-12 text-lg text-muted-foreground">{description}</p>
				</div>
				<div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-3">
					{services?.map((service) => {
						const Icon = Icons[service.icon as keyof typeof Icons] || Icons.boat;
						return (
							<Link key={service.id} href={`/services/${service.slug}`} className="p-8 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
								<Icon className="w-12 h-12 mb-6 text-red-600" />
								<h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
								<p className="text-muted-foreground line-clamp-3">{service.description}</p>
							</Link>
						);
					})}
				</div>
				{cta && (
					<div className="text-center">
						<Button asChild size="lg" className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700">
							<Link href={cta.link}>{cta.label}</Link>
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
