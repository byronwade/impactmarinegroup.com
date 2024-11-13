"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PhoneCall } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import type { MenuItem } from "@/types/sanity";

interface NavigationContentProps {
	navItems?: MenuItem[];
	phoneNumber: string;
	phoneNumberRaw: string;
}

export default function NavigationContent({ navItems = [], phoneNumber, phoneNumberRaw }: NavigationContentProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = useCallback((label: string) => {
		sendGTMEvent({ event: "navClick", value: label });
		setIsMenuOpen(false);
	}, []);

	const handlePhoneClick = () => {
		sendGTMEvent({ event: "phoneButtonClicked", value: "header" });
	};

	const handleMenuToggle = (open: boolean) => {
		setIsMenuOpen(open);
		sendGTMEvent({ event: open ? "mobileMenuOpened" : "mobileMenuClosed", value: "header" });
	};

	// Add fallback navigation items if none are provided
	const defaultNavItems: MenuItem[] =
		navItems?.length ? navItems : (
			[
				{ _id: "1", label: "Home", link: "/" },
				{ _id: "2", label: "Fleet", link: "/fleet" },
				{ _id: "3", label: "Services", link: "/services" },
				{ _id: "4", label: "About", link: "/about-us" },
				{ _id: "5", label: "Contact", link: "/contact" },
			]
		);

	return (
		<>
			<nav className="hidden md:flex space-x-6">
				{defaultNavItems.map((item) => (
					<Link key={item._id} href={item.link} className="text-sm font-medium hover:text-primary" onClick={() => handleNavClick(item.label)}>
						{item.label}
					</Link>
				))}
			</nav>

			<Button asChild size="sm" className="hidden md:flex" onClick={handlePhoneClick}>
				<a href={`tel:${phoneNumberRaw}`} className="flex items-center">
					<PhoneCall className="h-3 w-3 mr-2" aria-hidden="true" />

					<span>{phoneNumber}</span>
				</a>
			</Button>

			<Sheet open={isMenuOpen} onOpenChange={handleMenuToggle}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
						<Menu className="h-5 w-5" aria-hidden="true" />

						<span className="sr-only">Open menu</span>
					</Button>
				</SheetTrigger>

				<SheetContent side="right" className="w-[300px] sm:w-[350px]">
					<nav className="flex flex-col space-y-4 mt-6">
						{defaultNavItems.map((item) => (
							<Link key={item._id} href={item.link} className="text-sm font-medium hover:text-primary" onClick={() => handleNavClick(item.label)}>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="mt-8">
						<Button asChild className="w-full" onClick={handlePhoneClick}>
							<a href={`tel:${phoneNumberRaw}`} className="flex items-center justify-center">
								<PhoneCall className="h-4 w-4 mr-2" aria-hidden="true" />

								<span>{phoneNumber}</span>
							</a>
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}


