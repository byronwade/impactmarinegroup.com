import { headers } from "next/headers";
import Image from "next/image";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const poster = "/boat.webp";
	const videoSrc = "/impactlogo.mp4";

	const imageProps = {
		src: poster,
		alt: "Impact Marine Group boat on water",
		fill: true,
		priority: true,
		sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw",
		className: "object-cover",
		quality: 60,
		loading: "eager",
		fetchPriority: "high",
		width: 1920,
		height: 1080,
		placeholder: "blur",
		blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
	};

	if (viewport === "mobile") {
		return <Image {...imageProps} />;
	}

	return (
		<>
			<Image {...imageProps} />
			<video
				className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
				playsInline
				muted
				loop
				autoPlay
				preload="none"
				onLoadedData={(e) => {
					e.currentTarget.classList.remove("opacity-0");
				}}
			>
				<source src={videoSrc} type="video/mp4" />
			</video>
		</>
	);
}
