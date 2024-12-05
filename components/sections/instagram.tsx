import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Anchor } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { getInstagramFeed } from "@/actions/instagram";
import type { InstagramPost } from "@/types/sanity";

// Create a loading skeleton component
const InstagramSkeleton = () => (
	<div key="instagram-skeleton-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{[...Array(6)].map((_, index) => (
			<Card key={index} className="animate-pulse overflow-hidden border-2 border-muted">
				<div key={`skeleton-${index}`} className="h-[400px] bg-gray-200" />
			</Card>
		))}
	</div>
);

// Create a fallback component for when the API fails
const InstagramFallback = () => (
	<div key="instagram-fallback" className="text-center py-8">
		<Card key="instagram-fallback-card" className="max-w-2xl mx-auto p-6">
			<CardContent key="instagram-fallback-content" className="space-y-4">
				<Instagram className="w-12 h-12 mx-auto text-muted-foreground" />
				<h3 className="text-xl font-semibold">Follow Us on Instagram</h3>
				<p className="text-muted-foreground">Stay updated with our latest projects and marine adventures on Instagram.</p>
				<a href="https://www.instagram.com/impactmarinegroup" target="_blank" rel="noopener noreferrer" className="inline-block">
					<Button size="lg">
						<Instagram className="w-5 h-5 mr-2" />
						Visit Our Instagram
					</Button>
				</a>
			</CardContent>
		</Card>
	</div>
);

// Create the posts grid component
const InstagramGrid = async () => {
	try {
		const posts = await getInstagramFeed();

		// If no posts or null returned, show fallback
		if (!posts || posts.length === 0) {
			return <InstagramFallback />;
		}

		return (
			<div key="instagram-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((post) => (
					<Card key={post._id} className="overflow-hidden border-2 border-muted">
						<div key={`${post._id}-image`} className="relative h-[400px]">
							<Image src={post.image.asset.url} alt={post.caption || "Instagram post"} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						</div>
						{post.caption && (
							<CardContent key={`${post._id}-caption`} className="p-4">
								<p className="text-sm text-muted-foreground line-clamp-3">{post.caption}</p>
							</CardContent>
						)}
					</Card>
				))}
			</div>
		);
	} catch (error) {
		console.error("Error fetching Instagram feed:", error);
		return <InstagramFallback />;
	}
};

export default function SocialSection({ title = "Sail Through Our Instagram" }: { title?: string; displayCount?: number }) {
	//console.log("Instagram section props:", { title, displayCount }); // Debug log

	return (
		<section id="social" aria-labelledby="social-heading" className="py-16 bg-muted">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="flex items-center justify-center mb-12">
					<Anchor className="w-10 h-10 mr-3" />
					<h2 id="social-heading" className="text-4xl font-bold">
						{title}
					</h2>
				</div>
				<Suspense fallback={<InstagramSkeleton />}>
					<InstagramGrid />
				</Suspense>
			</div>
		</section>
	);
}
