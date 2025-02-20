import Image from "next/image";
import Link from "next/link";
import NavigationContent from "./NavigationContent";
import type { Setting } from "@/payload-types";
import type { Navigation } from "@/lib/types";

interface HeaderProps {
	initialSettings: Setting | null;
	navigation: Navigation | null;
}

export default function Header({ initialSettings, navigation }: HeaderProps) {
	if (!initialSettings) return null;

	const phoneNumber = initialSettings.phone || "(770) 881-7808";
	const phoneNumberRaw = phoneNumber.replace(/[^0-9+]/g, "");

	return (
		<header className="sticky top-0 z-50 flex-shrink-0 border-b bg-background">
			<div className="container px-4 mx-auto">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2" aria-label="Home">
						{initialSettings.logo?.url ? <Image src={initialSettings.logo.url} alt={initialSettings.companyName || "Logo"} width={100} height={100} priority /> : <span className="text-xl font-bold">{initialSettings.companyName}</span>}
					</Link>

					<NavigationContent navItems={navigation?.items} phoneNumber={phoneNumber} phoneNumberRaw={phoneNumberRaw} />
				</div>
			</div>
		</header>
	);
}
