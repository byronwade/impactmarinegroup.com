"use client";

import React from "react";
import { Mail, MapPin, Facebook, Instagram, Twitter, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/useConfig";
import { usePrimaryNavigation } from "@/hooks/usePrimaryNavigation";
import Image from "next/image";
import type { SocialMedia, MenuItem } from "@/types/sanity";

interface SocialLinks {
	[key: string]: string;
}

export default function Footer() {
	const { config, loading: configLoading } = useConfig();
	const { items: menuItems, loading: menuLoading } = usePrimaryNavigation();

	if (configLoading || menuLoading) return <div>Loading...</div>;
	if (!config) return null;

	const socialLinks = config.socialMedia?.reduce<SocialLinks>((acc: SocialLinks, social: SocialMedia) => {
		acc[social.platform.toLowerCase()] = social.url;
		return acc;
	}, {});

	return (
		<footer className="bg-gray-900 text-white min-h-[400px] w-full flex-shrink-0">
			<div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 h-full">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="mb-8 sm:mb-0">
						<Image src={config.logo?.asset?.url || "/impact-logo.webp"} alt={config.siteName || "Logo"} width={150} height={150} className="p-4 mb-2 bg-white rounded-lg" />
						<h3 className="text-xl font-bold mb-4">{config.siteName}</h3>
						<p className="text-gray-400 text-sm sm:text-base">Your premier destination for quality boats and exceptional marine experiences.</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-sm sm:text-base">
							{menuItems?.map((item) => (
								<li key={item._id}>
									<Link href={item.link} className="hover:text-blue-400 transition-colors">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<ul className="space-y-2 text-sm sm:text-base">
							<li className="flex items-center">
								<PhoneCall className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />
								<a href={`tel:${config.phoneNumber.replace(/[^0-9+]/g, "")}`} className="hover:text-blue-400 transition-colors">
									{config.phoneNumber}
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="h-5 w-5 mr-2 flex-shrink-0" />
								<a href={`mailto:${config.email}`} className="hover:text-blue-400 transition-colors break-all">
									{config.email}
								</a>
							</li>
							<li className="flex items-start">
								<MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
								<span>
									{config.address.street}, {config.address.city}, {config.address.state} {config.address.zip}
								</span>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Follow Us</h4>
						<div className="flex space-x-4">
							{socialLinks?.facebook && (
								<a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
									<Facebook className="h-6 w-6" />
									<span className="sr-only">Facebook</span>
								</a>
							)}
							{socialLinks?.instagram && (
								<a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
									<Instagram className="h-6 w-6" />
									<span className="sr-only">Instagram</span>
								</a>
							)}
							{socialLinks?.twitter && (
								<a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
									<Twitter className="h-6 w-6" />
									<span className="sr-only">Twitter</span>
								</a>
							)}
						</div>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
					<p className="text-sm text-gray-400 mb-4 text-center">
						© {new Date().getFullYear()} {config.companyName}. All rights reserved.
					</p>
					<Button asChild variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors w-full sm:w-auto">
						<a href="https://byronwade.com" target="_blank" rel="noopener noreferrer">
							Designed by byronwade.com
						</a>
					</Button>
				</div>
			</div>
		</footer>
	);
}
