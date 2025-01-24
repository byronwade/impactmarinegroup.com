import Link from "next/link";

type LinkPath = `/${string}`;

interface HeroProps {
	heading: string;
	subheading: string;
	primaryCta?: {
		text: string;
		link: LinkPath;
	};
	secondaryCta?: {
		text: string;
		link: LinkPath;
	};
}

export default function Hero({ heading, subheading, primaryCta, secondaryCta }: HeroProps) {
	return (
		<section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl font-bold mb-6">{heading}</h1>
					<p className="text-xl mb-8">{subheading}</p>
					<div className="flex justify-center gap-4">
						{primaryCta && (
							<Link href={primaryCta.link} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors" prefetch={false}>
								{primaryCta.text}
							</Link>
						)}
						{secondaryCta && (
							<Link href={secondaryCta.link} className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" prefetch={false}>
								{secondaryCta.text}
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
