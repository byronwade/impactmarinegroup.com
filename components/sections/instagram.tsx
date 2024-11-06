import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Anchor } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { getInstagramFeed } from "@/app/actions/instagram";

// Create a loading skeleton component
const InstagramSkeleton = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{[...Array(6)].map((_, index) => (
			<Card key={index} className="animate-pulse overflow-hidden border-2 border-muted">
				<div className="h-[400px] bg-gray-200" />
			</Card>
		))}
	</div>
);

// Create a fallback component for when the API fails
const InstagramFallback = () => (
	<div className="text-center py-8">
		<Card className="max-w-2xl mx-auto p-6">
			<CardContent className="space-y-4">
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((post) => (
					<Card key={post.id} className="overflow-hidden border-2 border-muted hover:border-primary transition-colors duration-300 shadow-lg">
						<CardContent className="p-4 bg-muted">
							<div className="flex items-center space-x-4">
								<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
									<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">IM</span>
								</span>
								<div>
									<p className="text-sm font-medium">Impact Marine Group</p>
									<p className="text-xs text-foreground">@impactmarinegroup</p>
								</div>
							</div>
						</CardContent>
						<div className="relative group">
							<Image src={post.media_url} alt={post.caption || "Instagram post"} width={400} height={400} className="transition-transform duration-300 group-hover:scale-105 object-cover" loading="lazy" priority={false} />
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
								<a href={post.permalink} target="_blank" rel="noopener noreferrer" className="w-full">
									<Button variant="secondary" size="sm" className="w-full text-xs bg-background/80 hover:bg-background">
										View on Instagram
									</Button>
								</a>
							</div>
						</div>
						<CardContent className="p-4">
							<p className="text-sm">
								<span className="font-medium">impactmarinegroup</span> <span className="text-foreground line-clamp-2">{post.caption}</span>
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		);
	} catch (error) {
		console.error("Error fetching Instagram feed:", error);
		return <InstagramFallback />;
	}
};

export default function SocialSection() {
	return (
		<section id="social" aria-labelledby="social-heading" className="py-16 bg-muted">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<div className="flex items-center justify-center mb-12">
					<Anchor className="w-10 h-10 mr-3" />
					<h2 id="social-heading" className="text-4xl font-bold">
						Sail Through Our Instagram
					</h2>
				</div>
				<Suspense fallback={<InstagramSkeleton />}>
					<InstagramGrid />
				</Suspense>
			</div>
		</section>
	);
}
