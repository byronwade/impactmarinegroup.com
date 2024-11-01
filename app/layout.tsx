import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Header = dynamic(() => import("@/components/header"));
const Footer = dynamic(() => import("@/components/footer"));

// Optimize font loading
const inter = Inter({
	subsets: ["latin"],
	display: "swap", // Add display swap for better font loading
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<Suspense fallback={<>Loading...</>}>
						<Header />
					</Suspense>
					<main role="main" aria-label="Main content" className="flex-grow">
						{children}
					</main>
					<Suspense fallback={<>Loading...</>}>
						<Footer />
					</Suspense>
				</div>
				{/* Move analytics to load after page load */}
				<GoogleAnalytics gaId="G-5K833333" />
			</body>
		</html>
	);
}
