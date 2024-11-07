import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Providers from "./providers/QueryProvider";

const Header = dynamic(() => import("@/components/header"));
const Footer = dynamic(() => import("@/components/footer"));

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
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
				</Providers>
			</body>
		</html>
	);
}
