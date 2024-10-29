import { headers } from "next/headers";
import Image from "next/image";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const poster = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/boat-WpdgiqdkSASGXYJVptrk77IVfslKyO.webp";
	const videoSrc = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/impactlogo-HV2Dx0Ahlp1CxDNLc9mT81i3QKal3X.mp4";

	if (viewport === "mobile") {
		return <Image src={poster} alt="Impact Marine Group Hero" fill priority sizes="100vw" className="object-cover" quality={90} />;
	}

	return (
		<>
			<Image src={poster} alt="Impact Marine Group Hero" fill priority sizes="100vw" className="object-cover" quality={90} />
			<video className="absolute top-0 left-0 w-full h-full object-cover" playsInline muted loop autoPlay preload="none">
				<source src={videoSrc} type="video/mp4" />
			</video>
		</>
	);
}
