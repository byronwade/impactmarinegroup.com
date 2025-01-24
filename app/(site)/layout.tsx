import { Inter } from "next/font/google";
import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getSettings } from "@/lib/actions/getSettings";
import { getNavigation } from "@/lib/actions/getNavigation";
import { unstable_cache } from "next/cache";
import { getMetadata } from "@/lib/config/seo";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	fallback: ["system-ui", "arial"],
	adjustFontFallback: true,
});

// Generate metadata for the layout
export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSettings();
	return getMetadata({
		title: {
			template: `%s | ${settings?.companyName || "Impact Marine Group"}`,
			default: settings?.defaultSEO?.title || "Impact Marine Group | Premier Boat Sales and Service",
		},
		description: settings?.defaultSEO?.description,
		openGraph: {
			title: settings?.defaultSEO?.title,
			description: settings?.defaultSEO?.description,
			images: settings?.defaultSEO?.image ? [{ url: settings.defaultSEO.image.url }] : undefined,
		},
	});
}

// Cache the settings fetch
const getCachedSettings = unstable_cache(
	async () => {
		try {
			return await getSettings();
		} catch (error) {
			console.error("Failed to load settings:", error);
			return null;
		}
	},
	["root-layout-settings"],
	{
		revalidate: 30,
		tags: ["settings"],
	}
);

// Cache the navigation fetch
const getCachedNavigation = unstable_cache(
	async (location: "header" | "footer") => {
		try {
			const nav = await getNavigation(location);
			console.log(`Fetched ${location} navigation:`, nav?.name || "Not found");
			return nav;
		} catch (error) {
			console.error(`Failed to load ${location} navigation:`, error);
			return null;
		}
	},
	["root-layout-navigation"],
	{
		revalidate: 30,
		tags: ["navigation"],
	}
);

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	const [settings, headerNav, footerNav] = await Promise.all([getCachedSettings(), getCachedNavigation("header").catch(() => null), getCachedNavigation("footer").catch(() => null)]);

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00446a" />
				<meta name="msapplication-TileColor" content="#00446a" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<Suspense fallback={<div className="h-16 animate-pulse bg-background" />}>
						<Header initialSettings={settings} navigation={headerNav} />
					</Suspense>

					<main className="flex-grow">
						<Suspense fallback={<div className="min-h-screen animate-pulse" />}>{children}</Suspense>
					</main>

					<Suspense fallback={<div className="h-16 animate-pulse bg-background" />}>
						<Footer initialSettings={settings} navigation={footerNav} />
					</Suspense>
				</div>
			</body>
		</html>
	);
}
