import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PhoneCall } from "lucide-react";
import { Suspense, lazy } from "react";

const DynamicNav = lazy(() => import("@/components/Nav"));

export default function Header() {
	return (
		<header className="bg-background border-b sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center space-x-2" aria-label="Home">
						<Image src="/impact-logo.webp" alt="Impact Marine" width={100} height={100} priority />
					</Link>

					<div className="flex items-center space-x-6">
						<nav className="hidden md:flex space-x-6">
							<Suspense fallback={<div>Loading...</div>}>
								<DynamicNav />
							</Suspense>
						</nav>

						<Button asChild size="sm" className="hidden md:flex">
							<a href="tel:+17708817808" className="flex items-center" aria-label="Call us">
								<PhoneCall className="h-3 w-3 mr-2" />
								(770) 881-7808
							</a>
						</Button>

						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[350px]">
								<nav className="flex flex-col space-y-4 mt-6">
									<DynamicNav />
								</nav>
								<div className="mt-8">
									<Button asChild className="w-full">
										<a href="tel:+17708817808" className="flex items-center justify-center" aria-label="Call us">
											<PhoneCall className="h-4 w-4 mr-2" />
											(770) 881-7808
										</a>
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
