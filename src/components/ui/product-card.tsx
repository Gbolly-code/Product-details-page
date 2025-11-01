import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Price } from "./price";
import { Rating } from "./rating";

export function ProductCard({ product }: { product: Product }) {
	return (
		<Link href={`/products/${product.id}`} className="group block overflow-hidden rounded-lg bg-white dark:bg-zinc-900">
			<div className="relative aspect-square w-full overflow-hidden rounded-lg">
				{product.thumbnail ? (
					/* Using fill requires parent relative + set sizes */
					<Image src={product.thumbnail} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
				) : (
					<div className="flex h-full w-full items-center justify-center text-zinc-400">No Image</div>
				)}
			</div>
			<div className="space-y-1 p-3">
				<div className="line-clamp-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">{product.title}</div>
				<div className="flex items-center justify-between">
					<Price amount={product.price} currency={product.currency || "USD"} />
					<Rating value={product.rating} />
				</div>
			</div>
		</Link>
	);
}

