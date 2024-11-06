import Image from "next/image";
import Link from "next/link";
import { getSiteConfig } from "@/app/actions/sanity";
import NavigationContent from "./NavigationContent";
import { getPrimaryNavigation } from "@/app/actions/sanity";

export default async function Header() {
	const config = await getSiteConfig();
	const navItems = await getPrimaryNavigation();
	console.log(navItems);

	if (!config) return null;

	const phoneNumber = config.phoneNumber || "(770) 881-7808";
	const phoneNumberRaw = config.phoneNumber?.replace(/[^0-9+]/g, "") || "+17708817808";

	return (
		<header className="bg-background border-b sticky top-0 z-50 flex-shrink-0">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2" aria-label="Home">
						<Image src={config.logo?.asset?.url || "/impact-logo.webp"} alt={config.siteName} width={100} height={100} />
					</Link>

					<NavigationContent phoneNumber={phoneNumber} phoneNumberRaw={phoneNumberRaw} navItems={navItems} />
				</div>
			</div>
		</header>
	);
}
