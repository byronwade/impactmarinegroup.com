import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Anchor, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/header";

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

						<footer className="bg-gray-900 text-white">
							<div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
									<div className="mb-8 sm:mb-0">
										<Anchor className="h-8 w-8 mb-4" />
										<h3 className="text-xl font-bold mb-4">Ocean Dreams Boats</h3>
										<p className="text-gray-400 text-sm sm:text-base">Your premier destination for quality boats and exceptional marine experiences.</p>
									</div>
									<div>
										<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
										<ul className="space-y-2 text-sm sm:text-base">
											<li>
												<Link href="/" className="hover:text-blue-400 transition-colors">
													Home
												</Link>
											</li>
											<li>
												<Link href="/inventory" className="hover:text-blue-400 transition-colors">
													Inventory
												</Link>
											</li>
											<li>
												<Link href="/services" className="hover:text-blue-400 transition-colors">
													Services
												</Link>
											</li>
											<li>
												<Link href="/about" className="hover:text-blue-400 transition-colors">
													About Us
												</Link>
											</li>
											<li>
												<Link href="/contact" className="hover:text-blue-400 transition-colors">
													Contact
												</Link>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
										<ul className="space-y-2 text-sm sm:text-base">
											<li className="flex items-center">
												<Phone className="h-5 w-5 mr-2 flex-shrink-0" />
												<span>(555) 123-4567</span>
											</li>
											<li className="flex items-center">
												<Mail className="h-5 w-5 mr-2 flex-shrink-0" />
												<a href="mailto:info@oceandreamsboats.com" className="hover:text-blue-400 transition-colors break-all">
													info@oceandreamsboats.com
												</a>
											</li>
											<li className="flex items-start">
												<MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
												<span>123 Marina Way, Seaside, CA 90210</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="text-lg font-semibold mb-4">Follow Us</h4>
										<div className="flex space-x-4">
											<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
												<Facebook className="h-6 w-6" />
												<span className="sr-only">Facebook</span>
											</a>
											<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
												<Instagram className="h-6 w-6" />
												<span className="sr-only">Instagram</span>
											</a>
											<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
												<Twitter className="h-6 w-6" />
												<span className="sr-only">Twitter</span>
											</a>
										</div>
									</div>
								</div>
								<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
									<p className="text-sm text-gray-400 mb-4 text-center">© 2024 Ocean Dreams Boats. All rights reserved.</p>
									<Button asChild variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors w-full sm:w-auto">
										<a href="https://byronwade.com" target="_blank" rel="noopener noreferrer">
											Designed by byronwade.com
										</a>
									</Button>
								</div>
							</div>
						</footer>
					</div>
				</ThemeProvider>
				<GoogleTagManager gtmId="GTM-5K833333" />
				<GoogleAnalytics gaId="G-5K833333" />
			</body>
		</html>
	);
}
