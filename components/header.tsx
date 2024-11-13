import Image from "next/image";
import Link from "next/link";
import { getSiteConfig, getPrimaryNavigation } from "@/actions/sanity";
import NavigationContent from "./NavigationContent";

export default async function Header() {
	const [config, navItems] = await Promise.all([getSiteConfig(), getPrimaryNavigation()]);

	if (!config) return null;

	const phoneNumber = config.phoneNumber || "(770) 881-7808";
	const phoneNumberRaw = phoneNumber.replace(/[^0-9+]/g, "");

	return (
		<header className="bg-background border-b sticky top-0 z-50 flex-shrink-0">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2" aria-label="Home">
						{config.logo?.asset?.url ?
							<Image src={config.logo.asset.url} alt={config.siteName || "Logo"} width={100} height={100} priority />
						:	<span className="text-xl font-bold">{config.siteName}</span>}
					</Link>

					<NavigationContent navItems={navItems} phoneNumber={phoneNumber} phoneNumberRaw={phoneNumberRaw} />
				</div>
			</div>
		</header>
	);
}
