import { ApiListResponse, Product } from "@/types";

export class ApiClient {
    private async http<T>(path: string, init?: RequestInit): Promise<T> {
        const url = path;
        const res = await fetch(url, {
            ...init,
            headers: {
                "Content-Type": "application/json",
                ...(init?.headers || {}),
            },
            cache: "no-store",
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`API ${res.status}: ${text || res.statusText}`);
        }
        return res.json() as Promise<T>;
    }

    async fetchProducts(params?: {
        page?: number;
        pageSize?: number;
        search?: string;
        categoryId?: string;
    }): Promise<ApiListResponse<Product>> {
        const query = new URLSearchParams();
        if (params?.page) query.set("page", String(params.page));
        if (params?.pageSize) query.set("pageSize", String(params.pageSize));
        if (params?.search) query.set("search", params.search);
        if (params?.categoryId) query.set("categoryId", params.categoryId);
        const q = query.toString();
        // Use Next.js API route proxy to avoid CORS issues
        const json = await this.http<any>(`/api/products${q ? `?${q}` : ""}`);
        // Normalize possible shapes
        const rawList = Array.isArray(json?.items)
            ? json.items
            : Array.isArray(json?.data)
                ? json.data
                : Array.isArray(json?.products)
                    ? json.products
                    : Array.isArray(json)
                        ? json
                        : [];

        const items: Product[] = rawList.map((r: any) => {
            const id = String(r.id ?? r._id ?? r.slug ?? "");
            const title = String(r.title ?? r.name ?? "Untitled");
            const description = String(r.description ?? "");
            const price = Number(r.price ?? 0);
            const imagesFromApi: string[] = Array.isArray(r.images) ? r.images : [];
            const thumbnailFromApi: string | undefined = r.thumbnail || r.image || undefined;

            // Local images to ensure every product has an image
            const localImages = [
                "/assets/asset1.jpg",
                "/assets/asset2.jpg",
                "/assets/asset3.jpg",
                "/assets/asset4.jpg",
                "/assets/asset5.jpg",
                "/assets/asset6.jpg"
            ];
            // Use hash of id/title to consistently assign an image per product
            const hash = (id || title).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const placeholder = localImages[hash % localImages.length];

            const images: string[] = imagesFromApi.length ? imagesFromApi : (thumbnailFromApi ? [thumbnailFromApi] : [placeholder]);
            const thumbnail: string | undefined = thumbnailFromApi || images[0] || placeholder;
            return {
                id: id || title,
                title,
                description,
                price: isNaN(price) ? 0 : price,
                images,
                thumbnail,
                currency: "USD",
            } as Product;
        });

        return { items };
    }
}

export const api = new ApiClient();


