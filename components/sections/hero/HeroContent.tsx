import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
	title: string;
	description: string;
	primaryCta?: {
		label: string;
		link: string;
	};
	secondaryCta?: {
		label: string;
		link: string;
	};
}

export default function HeroContent({ title, description, primaryCta, secondaryCta }: HeroContentProps) {
	return (
		<div className="max-w-4xl mx-auto text-center">
			<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
			<p className="mb-10 text-lg text-muted-foreground sm:text-xl">{description}</p>
			<div className="flex flex-col justify-center gap-4 sm:flex-row">
				{primaryCta && (
					<Button asChild size="lg" className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700">
						<Link href={primaryCta.link}>{primaryCta.label}</Link>
					</Button>
				)}
				{secondaryCta && (
					<Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg text-red-600 border-red-600 hover:bg-red-50">
						<Link href={secondaryCta.link}>{secondaryCta.label}</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
