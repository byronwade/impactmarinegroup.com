import Image from "next/image";
import dynamic from "next/dynamic";

const ClientVideo = dynamic(() => import("./ClientVideo"), {
	loading: () => null,
	ssr: false,
});

export default function HeroBackground() {
	const imageProps = {
		src: "/boat.webp",
		alt: "Impact Marine Group boat on water",
		priority: true,
		sizes: "(max-width: 768px) 100vw, 100vw",
		className: "absolute inset-0 w-full h-full object-cover",
		quality: 75,
		loading: "eager" as const,
		width: 1920,
		height: 1080,
	};

	return (
		<div className="absolute inset-0 w-full h-full">
			<Image {...imageProps} />
			<ClientVideo />
		</div>
	);
}
