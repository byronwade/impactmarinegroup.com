"use client";

import React from "react";
import Link from "next/link";
import type { Setting } from "@/payload-types";
import type { Navigation, NavigationItem } from "@/lib/types";

interface FooterProps {
	initialSettings: Setting | null;
	navigation: Navigation | null;
}

export default function Footer({ initialSettings, navigation }: FooterProps) {
	if (!initialSettings) return null;

	return (
		<footer className="bg-background border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">{initialSettings.companyName}</h3>
						<address className="not-italic">
							{initialSettings.address && (
								<>
									<p>{initialSettings.address.street}</p>
									<p>
										{initialSettings.address.city}, {initialSettings.address.state} {initialSettings.address.zip}
									</p>
								</>
							)}
							{initialSettings.phone && (
								<p className="mt-2">
									<Link href={`tel:${initialSettings.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-primary">
										{initialSettings.phone}
									</Link>
								</p>
							)}
							{initialSettings.email && (
								<p className="mt-2">
									<Link href={`mailto:${initialSettings.email}`} className="hover:text-primary">
										{initialSettings.email}
									</Link>
								</p>
							)}
						</address>
					</div>

					{navigation?.items?.map((column: NavigationItem) => (
						<div key={column.id}>
							<h3 className="text-lg font-semibold mb-4">{column.label}</h3>
							{column.subItems && (
								<ul className="space-y-2">
									{column.subItems.map((item: NavigationItem) => (
										<li key={item.id}>
											<Link href={item.link} className="hover:text-primary">
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				<div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} {initialSettings.companyName}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
