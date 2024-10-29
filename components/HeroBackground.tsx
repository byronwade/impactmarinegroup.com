import { headers } from "next/headers";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const poster = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/boat-WpdgiqdkSASGXYJVptrk77IVfslKyO.webp";
	const videoSrc = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/impactlogo-HV2Dx0Ahlp1CxDNLc9mT81i3QKal3X.mp4";

	if (viewport === "mobile") {
		return <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${poster}')` }} />;
	}

	return (
		<video className="absolute top-0 left-0 w-full h-full object-cover" playsInline muted loop autoPlay preload="none" poster={poster}>
			<source src={videoSrc} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}
