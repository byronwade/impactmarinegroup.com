import { getPageBySlug, getPageContent } from "@/lib/sanity";
import { Block, RenderBlock } from "@/components/RenderBlock";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata } from "next";
export const runtime = "edge";

// Define the parameter type explicitly
interface Params {
	slug: string[];
}

// Use the correct type for the props passed to the Page component
interface PageProps {
	params: Promise<Params>;
}

// Correct the type for the generateMetadata function
export const experimental_ppr = true;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
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
export default async function Page(props: PageProps) {
    const params = await props.params;
    const slug = params.slug.join("/");
    const page = await getPageBySlug(slug);

    if (!page) {
		notFound();
	}

    return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">{page.title}</h1>
			<Suspense fallback={<div>Loading content...</div>}>
				<PageContent id={page._id} />
			</Suspense>
		</div>
	);
}

async function PageContent({ id }: { id: string }) {
	const content = await getPageContent(id);
	return (
		<>
			{content &&
				content.map((block: Block, index: number) => (
					<Suspense key={index} fallback={<div>Loading block...</div>}>
						<RenderBlock block={block} />
					</Suspense>
				))}
		</>
	);
}
