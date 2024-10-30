"use client";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	console.log("Video URL:", videoSrc);

	return (
		<div className="absolute inset-0 w-full h-full">
			<video
				className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
				playsInline
				muted
				loop
				autoPlay
				preload="none"
				onLoadedData={(e) => {
					console.log("Video loaded");
					e.currentTarget.classList.remove("opacity-0");
				}}
				onError={(e) => {
					console.error("Video failed to load:", e);
					e.currentTarget.style.display = "none";
					e.currentTarget.innerHTML = "Your browser does not support the video tag.";
				}}
			>
				<source src={videoSrc} type="video/mp4" />
			</video>
		</div>
	);
}
