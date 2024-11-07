import { getPageBySlug } from "@/app/actions/sanity";
import RenderBlock, { Block } from "@/components/RenderBlock";
import { Suspense } from "react";
import { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug?: string[] }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const slug = resolvedParams?.slug?.length ? resolvedParams.slug.join("/") : "home";
	const page = await getPageBySlug(slug);

	if (!page) {
		return { title: "Page Not Found" };
	}

	return {
		title: page.seo?.metaTitle || page.title || "Impact Marine Group",
		description: page.seo?.metaDescription || "Welcome to Impact Marine Group",
	};
}

export default async function Page({ params }: PageProps) {
	const resolvedParams = await params;
	const slug = resolvedParams?.slug?.length ? resolvedParams.slug.join("/") : "home";
	const page = await getPageBySlug(slug);

	return (
		<main className="min-h-screen">
			<Suspense fallback={<div>Loading content...</div>}>
				{page?.content?.length > 0 ? (
					page.content.map((block: Block) => (
						<Suspense key={block._key} fallback={<div>Loading block...</div>}>
							<RenderBlock block={block} />
						</Suspense>
					))
				) : (
					<div>No content blocks found</div>
				)}
			</Suspense>
		</main>
	);
}
