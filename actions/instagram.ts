"use server";

export type InstagramPost = {
	id: string;
	caption: string;
	media_url: string;
	permalink: string;
	timestamp: string;
};

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const REVALIDATE_TIME = 300; // 5 minutes

export async function getInstagramFeed(): Promise<InstagramPost[] | null> {
	try {
		const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`, {
			next: { revalidate: REVALIDATE_TIME },
		});

		if (!response.ok) {
			return null;
		}

		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("Error fetching Instagram feed:", error);
		return null;
	}
}
