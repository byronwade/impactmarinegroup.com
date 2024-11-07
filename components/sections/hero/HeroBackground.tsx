import Image from "next/image";
import dynamic from "next/dynamic";

const ClientVideo = dynamic(() => import("./ClientVideo"), {
	loading: () => null,
	ssr: false,
});

interface HeroBackgroundProps {
	data?: {
		backgroundImage?: {
			asset?: {
				url?: string;
			};
		};
		backgroundVideo?: {
			asset?: {
				url?: string;
			};
		};
	};
}

export default function HeroBackground({ data }: HeroBackgroundProps) {
	// Add early return if no data
	if (!data) return null;

	const backgroundImageUrl = data?.backgroundImage?.asset?.url;
	const backgroundVideoUrl = data?.backgroundVideo?.asset?.url;

	return (
		<div className="absolute inset-0 w-full h-full">
			{backgroundImageUrl ? (
				<Image src={backgroundImageUrl} alt="Hero background" priority sizes="100vw" className="absolute inset-0 w-full h-full object-cover" quality={75} loading="eager" width={1920} height={1080} />
			) : (
				// Fallback background color if no image
				<div className="absolute inset-0 bg-gray-900" />
			)}
			{backgroundVideoUrl && <ClientVideo videoUrl={backgroundVideoUrl} />}
		</div>
	);
}
