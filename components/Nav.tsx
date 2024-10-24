import Link from "next/link";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/boats", label: "Boats" },
	{ href: "/services", label: "Services" },
	{ href: "/financing", label: "Financing" },
	{ href: "/contact", label: "Contact" },
];

export default function Nav() {
	return (
		<>
			{navItems.map((item) => (
				<Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary">
					{item.label}
				</Link>
			))}
		</>
	);
}
