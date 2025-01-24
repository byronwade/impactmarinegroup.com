"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type HeroBlock = Extract<LayoutType[number], { blockType: "hero" }>;

interface Settings {
	companyName?: string;
	serviceArea?: string;
}

export default function Hero(props: HeroBlock) {
	const { title, description, primaryCta, secondaryCta } = props;

	return (
		<section className="relative py-20 overflow-hidden bg-white">
			<div className="container relative z-10 px-4 mx-auto">
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
			</div>
		</section>
	);
}
