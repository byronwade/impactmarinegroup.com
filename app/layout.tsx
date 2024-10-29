import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Optimize font loading
const inter = Inter({ 
	subsets: ["latin"],
	display: 'swap' // Add display swap for better font loading
});

export const runtime = "edge";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Add preconnect for CDN */}
				<link rel="preconnect" href="https://impactmarinegroup-com.vercel.app" />
				
				{/* Preload LCP image */}
				<link
					rel="preload"
					as="image"
					href="/boat.webp"
					fetchPriority="high"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider 
					attribute="class" 
					defaultTheme="system" 
					enableSystem 
					disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen">
						<Header />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
				{/* Move analytics to load after page load */}
				<GoogleAnalytics gaId="G-5K833333" />
			</body>
		</html>
	);
}
