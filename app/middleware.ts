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

	// Add preconnect for image CDN
	//requestHeaders.set('Link', '<https://your-image-cdn.com>; rel=preconnect');

	// Add priority hints for LCP image
	requestHeaders.set("Priority-Hints", "high");

	// Return response with modified headers
	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
