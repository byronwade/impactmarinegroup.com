export interface MenuItem {
	id: string;
	label: string;
	link: string;
	order?: number;
	children?: MenuItem[];
}

export interface Config {
	siteName: string;
	companyName: string;
	phoneNumber: string;
	email: string;
	logo?: {
		url: string;
		alt?: string;
	};
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
	socialMedia: Array<{
		platform: string;
		url: string;
	}>;
	navigation?: {
		header: MenuItem[];
		footer: MenuItem[];
	};
}

export interface BaseBlock {
	id: string;
	blockType: string;
	title?: string;
	_type?: string;
	_key?: string;
}

export interface HeroBlock extends BaseBlock {
	blockType: "hero";
	heading?: string;
	subheading?: string;
	backgroundImage?: {
		url: string;
		alt?: string;
		asset?: {
			url: string;
		};
	};
	backgroundVideo?: {
		asset?: {
			url: string;
		};
	};
	primaryCta?: {
		text: string;
		link: string;
		icon?: string;
	};
	secondaryCta?: {
		text: string;
		link: string;
	};
	rating?: {
		show?: boolean;
		value?: string;
	};
}

export interface BrandsBlock extends BaseBlock {
	blockType: "featuredBrands";
	brands: Array<{
		id: string;
		name: string;
		logo: {
			url: string;
			alt?: string;
			asset?: {
				url: string;
			};
		};
	}>;
}

export interface FleetBlock extends BaseBlock {
	blockType: "fleet";
	boats: Array<{
		id: string;
		name: string;
		mainImage: {
			url: string;
			alt?: string;
			asset?: {
				url: string;
			};
		};
	}>;
}

export interface ServicesBlock extends BaseBlock {
	blockType: "services";
	services: Array<{
		id: string;
		title: string;
		description: string;
		icon?: string;
		image?: {
			url: string;
			alt?: string;
			asset?: {
				url: string;
			};
		};
	}>;
	subtitle?: string;
}

export interface TestimonialsBlock extends BaseBlock {
	blockType: "testimonialSection";
	testimonials: Array<{
		id: string;
		name: string;
		text: string;
		rating: number;
		avatar?: {
			url: string;
			alt?: string;
		};
	}>;
}

export interface InstagramBlock extends BaseBlock {
	blockType: "instagramFeed";
	displayCount: number;
}

export interface AccordionContent {
	_type: "block";
	children: Array<{
		text: string;
		[key: string]: unknown;
	}>;
}

export interface AccordionBlock extends BaseBlock {
	blockType: "accordion";
	items: Array<{
		_key: string;
		trigger: string;
		content: AccordionContent[];
	}>;
}

export interface CallToActionBlock extends BaseBlock {
	blockType: "callToAction";
	heading: string;
	text: string;
	buttonText: string;
	buttonLink: string;
}

export interface VideoRef {
	current: HTMLVideoElement | null;
}

export interface VideoBlock extends BaseBlock {
	blockType: "video";
	videoRef: VideoRef;
	isMobile: boolean;
	video: {
		asset: {
			url: string;
		};
	};
}

export type Block = HeroBlock | BrandsBlock | FleetBlock | ServicesBlock | TestimonialsBlock | InstagramBlock | AccordionBlock | CallToActionBlock | VideoBlock;

export interface Page {
	id: string;
	title: string;
	description?: string;
	slug: string;
	blocks?: Block[];
	featuredImage?: {
		url: string;
		alt?: string;
	};
	seo?: {
		title?: string;
		description?: string;
		image?: {
			url: string;
			alt?: string;
		};
	};
}

export interface Boat {
	id: string;
	name: string;
	manufacturer: string;
	model: string;
	trim?: string;
	modelYear?: number;
	condition?: string;
	status?: string;
	price: number;
	listPrice?: number;
	description: string;
	mainImage: {
		url: string;
		alt?: string;
	};
	gallery?: Array<{
		url: string;
		alt?: string;
	}>;
	specs?: Record<string, string>;
	available: boolean;
	stockNumber?: string;
	category?: string;
	slug: string;
}

export interface Brand {
	id: string;
	name: string;
	logo: {
		url: string;
		alt?: string;
	};
	featured?: boolean;
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon?: string;
	image?: {
		url: string;
		alt?: string;
	};
	featured?: boolean;
}

export interface Testimonial {
	id: string;
	name: string;
	text: string;
	rating: number;
	featured?: boolean;
	avatar?: {
		url: string;
		alt?: string;
	};
}

export interface Media {
	id: string;
	url: string;
	alt?: string;
	filename: string;
	mimeType: string;
	filesize: number;
	width?: number;
	height?: number;
}
