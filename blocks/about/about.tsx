import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap } from "lucide-react";

const iconMap = {
	users: Users,
	zap: Zap,
};

interface AboutBlockProps {
	title: string;
	content: Array<{ paragraph: string }>;
	image: {
		url: string;
		alt?: string;
	};
	features: Array<{
		icon: keyof typeof iconMap;
		title: string;
		description: string;
	}>;
}

export default function AboutBlock({ title, content, image, features }: AboutBlockProps) {
	return (
		<section id="about" className="space-y-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-8">{title}</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-4">
						{content.map((item, index) => (
							<p key={index}>{item.paragraph}</p>
						))}
					</div>
					<div className="space-y-6">
						<div className="relative h-64 md:h-80">
							<Image src={image.url} alt={image.alt || "About us image"} layout="fill" objectFit="cover" className="rounded-lg" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							{features.map((feature, index) => {
								const Icon = iconMap[feature.icon];
								return (
									<Card key={index}>
										<CardContent className="p-4">
											<Icon className="w-8 h-8 mb-2 text-blue-600" />
											<h3 className="font-semibold mb-1">{feature.title}</h3>
											<p className="text-sm">{feature.description}</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
