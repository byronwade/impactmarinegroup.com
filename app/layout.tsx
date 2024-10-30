import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Optimize font loading
const inter = Inter({
	subsets: ["latin"],
	display: "swap", // Add display swap for better font loading
});

export const runtime = "edge";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main role="main" aria-label="Main content" className="flex-grow">
						{children}
					</main>
					<Footer />
				</div>
				{/* Move analytics to load after page load */}
				<GoogleAnalytics gaId="G-5K833333" />
			</body>
		</html>
	);
}
