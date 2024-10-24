// @ts-expect-error - This is a bug in Next.js
import { getPageBySlug } from "@/lib/sanity";
import { Block, RenderBlock } from "@/components/RenderBlock";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata } from "next";

// Define the parameter type explicitly
interface Params {
	slug: string[];
}

// Use the correct type for the props passed to the Page component
interface PageProps {
	params: Params;
}

// Correct the type for the generateMetadata function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const slug = params.slug.join("/");
	const page = await getPageBySlug(slug);

	if (!page) {
		return {
			title: "Page Not Found",
		};
	}

	return {
		title: page.seo?.ogTitle || page.title || "Impact Marine Group",
		description: page.seo?.metaDescription || "Welcome to Impact Marine Group",
	};
}

// Update the type for the Page function's props
export default async function Page({ params }: PageProps) {
	const slug = params.slug.join("/");
	const page = await getPageBySlug(slug);

	if (!page) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">{page.title}</h1>
			<Suspense fallback={<div>Loading content...</div>}>{page.content && page.content.map((block: Block, index: number) => <RenderBlock key={index} block={block} />)}</Suspense>
		</div>
	);
}
