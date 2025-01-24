// Base document structure
export interface BaseDoc {
	id: string;
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

// Collection response structure
export interface CollectionResponse<T> {
	docs: T[];
}

// Settings type
export interface Setting {
	homePage: {
		id: string | number;
		value: Record<string, unknown>;
	};
	companyName: string;
	companyPhone: string;
	companyEmail: string;
	companyAddress: string;
	socialLinks: Array<{ platform: string; url: string }>;
}

// Navigation types
export interface NavigationItem {
	id: string;
	label: string;
	link: string;
	subItems?: NavigationItem[];
}

export interface Navigation {
	id: string;
	name: string;
	location: "header" | "footer";
	items: NavigationItem[];
}
