import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div className="flex flex-col min-h-screen">
						<Header />

						<main className="flex-grow">{children}</main>

						<Footer />
					</div>
				</ThemeProvider>
				<GoogleTagManager gtmId="GTM-5K833333" />
				<GoogleAnalytics gaId="G-5K833333" />
			</body>
		</html>
	);
}
