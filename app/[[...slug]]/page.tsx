import { getPageBySlug } from "@/app/actions/sanity";
import RenderBlock from "@/components/RenderBlock";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata } from "next";

interface PageProps {
	params: { slug?: string[] };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	try {
		const slug = params?.slug?.length ? params.slug.join("/") : "home";
		const page = await getPageBySlug(slug);

		if (!page) {
			return { title: "Page Not Found" };
		}

		return {
			title: page.seo?.metaTitle || page.title || "Impact Marine Group",
			description: page.seo?.metaDescription || "Welcome to Impact Marine Group",
		};
	} catch (error) {
		console.error("Metadata error:", error);
		return { title: "Impact Marine Group" };
	}
}

export default async function Page({ params }: PageProps) {
	try {
		const slug = params?.slug?.length ? params.slug.join("/") : "home";
		const page = await getPageBySlug(slug);

		if (!page) {
			notFound();
		}

		return (
			<main className="min-h-screen">
				<Suspense fallback={<div>Loading content...</div>}>
					{page.content?.length > 0 ? (
						page.content.map((block) => (
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
	} catch (error) {
		console.error("Page error:", error);
		notFound();
	}
}
