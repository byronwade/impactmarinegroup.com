import { Metadata } from "next";
import { getPageBySlug } from "@/lib/sanity";
import { RenderBlock, Block } from "@/components/RenderBlock";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ slug: string[] }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const slug = params.slug.length > 0 ? params.slug.join("/") : "/";
	const page = await getPageBySlug(slug);

	if (!page) {
		return {
			title: "Page Not Found",
		};
	}

	return {
		title: page.title || `Page: ${slug}`,
		description: page.seo?.metaDescription,
	};
}

export default async function Page(props: Props) {
	const params = await props.params;
	const slug = params.slug.length > 0 ? params.slug.join("/") : "/";
	const page = await getPageBySlug(slug);

	if (!page) {
		notFound();
	}

	const isLandingPage = page._type === "landingPage" || page.isLandingPage;

	return (
		<div className={`container mx-auto px-4 py-8 ${isLandingPage ? "landing-page" : ""}`}>
			{!isLandingPage && <h1 className="text-3xl font-bold mb-6">{page.title}</h1>}
			{page.content && page.content.map((block: ContentBlock, index: number) => <RenderBlock key={index} block={block as unknown as Block} />)}
			{page.sections && page.sections.map((section: ContentBlock, index: number) => <RenderBlock key={index} block={section as unknown as Block} />)}
		</div>
	);
}

interface ContentBlock {
	_type: string;
	asset?: {
		url: string;
		metadata: {
			dimensions: { width: number; height: number };
		};
	};
	alt?: string;
	heading?: string;
	text?: string;
	buttonLink?: string;
	buttonText?: string;
	imagePosition?: string;
	componentName?: string;
	props?: Record<string, unknown>;
	image?: {
		asset: {
			url: string;
			metadata: {
				dimensions: { width: number; height: number };
			};
		};
		alt?: string;
	};
}
