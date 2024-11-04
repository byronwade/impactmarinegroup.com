"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { useConfig } from "@/hooks/useConfig";

export default function Header() {
	const { config, loading } = useConfig();
	console.log(config);

	if (loading) return <div>Loading...</div>;
	if (!config) return null;

	return (
		<header className="bg-background border-b sticky top-0 z-50 flex-shrink-0">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2" aria-label="Home">
						<Image src="/impact-logo.webp" alt={config.siteName} width={100} height={100} priority quality={85} />
					</Link>

					<Nav />
				</div>
			</div>
		</header>
	);
}
