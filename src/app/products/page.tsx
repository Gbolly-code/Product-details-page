"use client";
import Image from "next/image";
import { ProductList } from "@/components/ui/product-list";
import { useProducts } from "@/hooks/use-products";

export default function ProductsPage() {
	const { products } = useProducts({ page: 1, pageSize: 12 });
	const first = products?.[0];
	const heroImg = (first?.images && first.images[0]) || first?.thumbnail || undefined;

	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
			{heroImg ? (
				<div className="mb-6 relative h-56 w-full overflow-hidden rounded-lg bg-zinc-50">
					<Image src={heroImg} alt={first?.title || "Product"} fill className="object-cover" />
				</div>
			) : null}

			<h1 className="mb-6 text-2xl font-semibold">Products</h1>
			<ProductList />
		</div>
	);
}

