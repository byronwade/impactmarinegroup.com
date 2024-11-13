import { Suspense } from "react";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientLayout from "@/components/client-wrappers/ClientLayout";

// Import global styles
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<QueryProvider>
					<ClientLayout>
						<div className="flex flex-col min-h-screen">
							<Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse" />}>
								<Header />
							</Suspense>

							<main role="main" className="flex-grow">
								{children}
							</main>

							<Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse" />}>
								<Footer />
							</Suspense>
						</div>
					</ClientLayout>
				</QueryProvider>
			</body>
		</html>
	);
}
