"use client";

export default function ClientVideo({ videoSrc }: { videoSrc: string }) {
	return (
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
	);
}
