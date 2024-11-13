export interface Asset {
	url: string;
	metadata?: {
		dimensions?: {
			width: number;
			height: number;
		};
	};
}

export interface BlockBase {
	_type: string;
	_key: string;
	title?: string;
}

export interface HeroBlock extends BlockBase {
	_type: "hero";
	heading?: string;
	subheading?: string;
	backgroundImage?: {
		asset?: Asset;
	};
	backgroundVideo?: {
		asset?: VideoAsset;
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
		show: boolean;
		value: string;
	};
}

export interface BrandsBlock extends BlockBase {
	_type: "featuredBrands";
	brands?: SanityBrand[];
}

export interface ServicesBlock extends BlockBase {
	_type: "services";
	services?: SanityService[];
	subtitle?: string;
}

export type Block = HeroBlock | BrandsBlock | ServicesBlock | FleetBlock | TestimonialsBlock | InstagramBlock | AccordionBlock | CallToActionBlock | VideoBlock;

export interface MenuItem {
	_id: string;
	_key?: string;
	label: string;
	link: string;
	order?: number;
}

export interface SanityBrand {
	name: string;
	logo: {
		asset: {
			url: string;
			metadata: {
				dimensions: {
					width: number;
					height: number;
				};
			};
		};
	};
}

export interface SanityBoat {
	_id: string;
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
	mainImage: SanityImage;
	gallery?: SanityImage[];
	specs?: Record<string, string>;
	available: boolean;
	stockNumber?: string;
	category?: string;
	slug: {
		current: string;
	};
}

export interface FleetBlock extends BlockBase {
	_type: "fleet";
	boats: SanityBoat[];
	title?: string;
}

export interface TestimonialsBlock extends BlockBase {
	_type: "testimonialSection";
	testimonials?: SanityTestimonial[];
}

export interface InstagramBlock extends BlockBase {
	_type: "instagramFeed";
	title?: string;
	displayCount?: number;
}

export interface AccordionBlock extends BlockBase {
	_type: "accordion";
	items: SanityAccordionItem[];
}

export interface CallToActionBlock extends BlockBase {
	_type: "callToAction";
	heading: string;
	text: string;
	buttonText: string;
	buttonLink: string;
}

export interface VideoBlock extends BlockBase {
	_type: "video";
	videoRef: React.RefObject<HTMLVideoElement>;
	isMobile: boolean;
	video: SanityVideo;
}

export interface SanityService {
	_id: string;
	title: string;
	description: string;
	icon?: string;
	image?: {
		asset: {
			url: string;
			metadata: {
				dimensions: {
					width: number;
					height: number;
				};
			};
		};
		alt?: string;
	};
}

export interface SanityTestimonial {
	_id: string;
	name: string;
	text: string;
	rating: number;
	_key: string;
}

export interface SanityInstagramPost {
	_id: string;
	image: {
		asset: {
			url: string;
		};
	};
	caption?: string;
}

export interface AccordionContent {
	_type: string;
	children: {
		_type: string;
		text: string;
		marks?: string[];
	}[];
}

export interface SanityAccordionItem {
	_key: string;
	trigger: string;
	content: AccordionContent[];
}

export interface AccordionItem {
	_key: string;
	trigger: string;
	content: AccordionContent[];
}

export interface SanityCallToActionItem {
	_key: string;
	heading?: string;
	text?: string;
	buttonText?: string;
	buttonLink?: string;
}

export interface SanityVideo {
	_type: "video";
	asset: {
		url: string;
	};
}

export interface VideoAsset {
	url: string;
	playbackId?: string;
	status?: string;
	assetId?: string;
	filename?: string;
	_id?: string;
}

export interface Navigation {
	_id: string;
	_type: "navigation";
	title?: string;
	items: MenuItem[];
}

export interface SanityImage {
	_type: "image";
	asset: {
		url: string;
		metadata?: {
			dimensions?: {
				width: number;
				height: number;
			};
		};
	};
	alt?: string;
}
