import { headers } from "next/headers";
import Image from "next/image";
import dynamic from "next/dynamic";
const ClientVideo = dynamic(() => import("@/components/ClientVideo"), {
	loading: () => null,
});

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";

	if (viewport === "mobile") {
		return (
			<div className="absolute inset-0 w-full h-full">
				<Image src="/boat.webp" alt="Impact Marine Group boat on water" priority={true} sizes="100vw" className="absolute inset-0 w-full h-full object-cover" quality={50} loading="eager" fetchPriority="high" width={1920} height={1080} />
			</div>
		);
	}

	return (
		<div className="absolute inset-0 w-full h-full">
			<Image src="/boat.webp" alt="Impact Marine Group boat on water" priority={true} sizes="100vw" className="absolute inset-0 w-full h-full object-cover" quality={50} loading="eager" fetchPriority="high" width={1920} height={1080} />
			<ClientVideo />
		</div>
	);
}
