import { NextRequest, NextResponse, userAgent } from "next/server";

export const config = {
	runtime: "edge",
	matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export default function middleware(request: NextRequest) {
	const { device } = userAgent(request);
	const viewport = device.type === "mobile" ? "mobile" : "desktop";

	// Clone the request headers
	const requestHeaders = new Headers(request.headers);
	// Add the viewport type to headers
	requestHeaders.set("x-viewport", viewport);

	// Add preload for video
	if (viewport === "desktop") {
		requestHeaders.append("Link", "<https://your-vercel-blob-url.public.blob.vercel-storage.com/impactlogo.mp4>; rel=preload; as=video");
	}

	// Add priority hints for LCP image
	requestHeaders.set("Priority-Hints", "high");
	requestHeaders.set("X-DNS-Prefetch-Control", "on");
	requestHeaders.set("Cache-Control", "public, max-age=31536000, immutable");

	// Return response with modified headers
	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
