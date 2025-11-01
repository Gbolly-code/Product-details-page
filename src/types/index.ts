export type Category = {
	id: string;
	name: string;
	slug?: string;
};

export type Product = {
	id: string;
	title: string;
	description: string;
	price: number;
	currency?: string;
	images: string[];
	thumbnail?: string;
	categoryId?: string;
	category?: Category;
	rating?: number;
	stock?: number;
};

export type ApiListResponse<T> = {
	items: T[];
	total?: number;
	page?: number;
	pageSize?: number;
};

export type ApiError = {
	status: number;
	message: string;
	details?: unknown;
};

