"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useProducts } from "@/hooks/use-products";
import { useCart } from "@/context/cart-context";
import { Product } from "@/types";
import { Footer } from "@/components/ui/footer";
import { Price } from "@/components/ui/price";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { Swatch } from "@/components/ui/swatch";
import { SizeSelector } from "@/components/ui/size-selector";

function IconChevronRight({ className }: { className?: string }) {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
			<polyline points="9 18 15 12 9 6" />
		</svg>
	);
}

export default function Home() {
	// Using default product ID "1"
	const params = { id: "1" };
	
	const [active, setActive] = React.useState(0);
	const { add } = useCart();
	// Local images from assets folder
	const images = [
		"/assets/asset1.jpg",
		"/assets/asset2.jpg",
		"/assets/asset3.jpg",
		"/assets/asset4.jpg",
		"/assets/asset5.jpg",
		"/assets/asset6.jpg"
	];

	const thumbs = images.slice(0, 5);
	const colorOptions = ["#A67C52", "#E5E7EB", "#1E6AAE", "#000000"]; // light brown, light gray, blue, black
	const sizeOptions = ["6", "8", "10", "14", "18", "20"];
	const [selectedSize, setSelectedSize] = React.useState("8");
    const [selectedColor, setSelectedColor] = React.useState<string>(colorOptions[0]);

	// Create product object for cart
	const productData: Product = {
		id: params.id,
		title: "Long Sleeve Overshirt, Khaki, 6",
		description: "Boba etiam ut bulla tea est potus dilectus singulari coniunctione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur; Boba phaenomenon.",
		price: 28,
		currency: "GBP",
		images: images,
		thumbnail: images[0],
		rating: 4.5,
		stock: 1238
	};

	const handleAddToCart = () => {
		add(productData, 1);
		alert("Product added to cart!");
	};
	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
		{/* Breadcrumbs (simple) */}
		<nav className="mb-6 text-xl md:text-sm">
			<div className="flex flex-wrap items-center gap-4 sm:gap-4 md:gap-2">
				<Link href="/" className="text-zinc-500 hover:underline">Homepage</Link>
				<IconChevronRight className="text-zinc-400" />
				<Link href="#" className="text-zinc-500 hover:underline">Women</Link>
				<IconChevronRight className="text-zinc-400" />
				<Link href="/products" className="text-zinc-500 hover:underline">Women's Shirts & Tops</Link>
                <IconChevronRight className="text-zinc-400" />

			</div>
				{/* Second line: chevron + dark title */}
				<div className="mt-1 flex items-center gap-2">
					<span className="text-zinc-900">Long Sleeve Overshirt, Khaki, 6</span>
				</div>
			</nav>

			<div className="grid grid-cols-1 gap-12 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
				{/* Gallery */}
                <div className="relative space-y-6 md:space-y-7 md:pr-16 lg:pr-24">
                    <div className="flex gap-6 items-start">
                        <div className="relative h-[520px] sm:h-[520px] md:h-[500px] lg:h-[560px] w-full mx-auto rounded-lg bg-zinc-50 overflow-hidden">
                            {/* Main image */}
                            <Image src={images[active]} alt="Product image" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </div>

                        {/* Right vertical actions (share/heart + carousel) */}
                        <div className="pointer-events-auto flex flex-col gap-76 md:gap-72 lg:gap-86">
                            <div className="flex flex-col gap-5">
                                <button aria-label="Share" className="rounded-md bg-zinc-100 p-2 shadow">
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                                </button>
                                <button aria-label="Wishlist" className="rounded-md bg-zinc-100 p-2 shadow">
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-5">
                                <button onClick={() => setActive((a)=> (a-1+images.length)%images.length)} aria-label="Prev" className="rounded-md bg-zinc-100 p-2 shadow">
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                                </button>
                                <button onClick={() => setActive((a)=> (a+1)%images.length)} aria-label="Next" className="rounded-md bg-zinc-100 p-2 shadow">
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-3 md:mx-auto md:gap-4">
						{thumbs.map((src, i) => (
							<button key={i} onClick={() => setActive(i)} className={["relative aspect-square overflow-hidden rounded border", i===active?"border-zinc-900":"border-zinc-200"].join(" ")}> 
								<Image src={src} alt={`Thumb ${i+1}`} fill className="object-cover" />
							</button>
						))}
					</div>
            </div>

				{/* Info */}
				<div className="space-y-4 md:flex md:h-full md:flex-col md:justify-between">
                    <div className="space-y-4">
                        <div className="text-base md:text-sm text-zinc-500">John Lewis ANYDAY</div>
                        <h1 className="text-4xl md:text-3xl font-semibold">Long Sleeve Overshirt, Khaki, 6</h1>
                        <div className="flex items-center justify-between">
                            <div className="inline-block">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-lg md:text-lg text-zinc-400 line-through">£45.00</span>
                                    <span className="text-2xl md:text-2xl"><Price amount={28} currency="GBP" /></span>
                                </div>
                                <div className="hidden md:block mt-2 border-t border-dashed border-zinc-300" />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg md:text-lg text-zinc-500">1,238 Sold</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500" aria-hidden>
                                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                                <span className="text-lg md:text-base font-semibold">4.5</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-base md:text-sm font-semibold text-zinc-900">Description:</div>
                            <p className="text-lg md:text-sm lg:text-lg leading-6 text-zinc-600">
                                Boba etiam ut bulla tea est potus dilectus singulari coniunctione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur; Boba phaenomenon.
                                <span className="ml-1 font-bold text-zinc-900">See More...</span>
                            </p>
                        </div>

                        {/* Color */}
                        <div className="space-y-2 md:mt-6 lg:mt-8">
                            <div className="text-lg md:text-base font-medium text-zinc-700">Color: <span className="text-xl md:text-lg font-bold text-zinc-900">Royal Brown</span></div>
                            <div className="grid w-full grid-cols-4 gap-1 md:gap-2 md:flex md:grid-cols-none">
                                {colorOptions.map((c) => (
                                    <Swatch key={c} value={c} selected={selectedColor === c} onSelect={setSelectedColor} />
                                ))}
                            </div>
                        </div>

                        {/* Size */}
                        <div className="space-y-2 md:mt-6 lg:mt-8">
                            <div className="flex items-center justify-between">
                                <span className="text-lg md:text-base font-medium text-zinc-700">Size: <span className="text-xl md:text-lg font-bold text-zinc-900">{selectedSize}</span></span>
                                <Link href="#" className="text-base md:text-sm underline">View Size Chart</Link>
                            </div>
                            <SizeSelector values={sizeOptions} selected={selectedSize} onSelect={setSelectedSize} />
                        </div>
                    </div>

                    {/* Bottom: CTA and T&C aligned to baseline on desktop */}
                    <div className="mt-3 md:mt-0">
                        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
                            <div className="w-full md:w-full md:flex md:flex-col md:gap-2">
                                {/* Buttons row: side-by-side on desktop */}
                                <div className="md:flex md:items-center md:gap-3">
                                    <Button
                                        variant="primary"
                                        className="w-full mb-10 md:w-auto md:flex-[0.55] h-16 md:h-14 text-xl md:text-base font-bold"
                                        style={{ backgroundColor: "#000000", color: "#ffffff" }}
                                        onClick={handleAddToCart}
                                    >
                                        Add To Cart
                                    </Button>
                                    <Link
                                        href="#"
                                        className="mb-10 inline-flex h-14 md:h-14 w-[66.666667%] md:w-auto md:flex-[0.45] items-center justify-center rounded-md border border-zinc-300 bg-white px-6 text-lg md:text-sm font-semibold md:font-medium text-black transition hover:bg-zinc-50 md:mt-0"
                                    >
                                        Checkout Now
                                    </Link>
                                </div>
                                {/* Desktop-only T&C baseline line */}
                                <span className="hidden md:block mt-2 text-xs text-zinc-500 underline">Delivery T&C</span>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			<div className="my-12 border-t border-dashed border-zinc-300" />
			{/* Related Products */}
			<section className="mt-12">
				<RelatedProducts currentId={params.id} />
			</section>

			{/* Product Reviews */}
			<section className="mt-12">
				<ProductReviews />
				<ReviewsList />
			</section>

			{/* Popular This Week */}
			<section className="mt-12">
				<PopularThisWeek />
			</section>

			<Footer />
		</div>
	);
}

function RelatedProducts({ currentId }: { currentId: string }) {
    const { products } = useProducts({ page: 1, pageSize: 10 });
    const items = (products || []).filter((p) => String(p.id) !== String(currentId)).slice(0, 5);

    if (!items.length) return null;

    return (
        <div className="mx-auto w-full">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Related Products</h2>
                <Link href="/products" className="text-lg underline">View all</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {items.map((p) => {
                    const img = (p.images && p.images[0]) || p.thumbnail;
                    return (
                        <Link key={p.id} href={`/products/${p.id}`} className="group block overflow-hidden rounded-lg bg-white">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-50">
                                {img ? (
                                    <Image src={img} alt={p.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
				) : (
					<div className="flex h-full w-full items-center justify-center text-zinc-400">No Image</div>
				)}
			</div>
                            <div className="space-y-1 p-3">
                                <div className="line-clamp-2 text-lg md:text-lg lg:text-xl font-semibold text-zinc-700">{p.title}</div>
                                <Price className="sm:text-xl" amount={typeof p.price === "number" ? p.price : 0} currency={p.currency || "USD"} />
                                <div className="flex items-center gap-2 text-base md:text-base lg:text-lg text-zinc-700">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                    <span className="font-semibold">4.8</span>
                                    <span className="text-zinc-500">1,234 sold</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
			</div>
		</div>
	);
}

function ProductReviews() {
    const rows = [
        { label: "5.0", value: 2823, ratio: 0.85 },
        { label: "4.0", value: 38, ratio: 0.25 },
        { label: "3.0", value: 4, ratio: 0.05 },
        { label: "2.0", value: 0, ratio: 0.0 },
        { label: "1.0", value: 0, ratio: 0.0 },
    ];
    return (
        <div className="mx-auto w-full">
            <h2 className="mb-4 text-3xl font-bold">Product Reviews</h2>
            <div className="rounded-lg border border-dashed border-zinc-300 p-4 md:p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                    {/* Left: score + stars */}
                    <div className="flex items-center gap-4">
                        {/* Partial ring with centered score */}
                        <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
                            <svg viewBox="0 0 36 36" className="h-full w-full rotate-[10deg]">
                                <circle cx="18" cy="18" r="16" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="90 100" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-900">4.8</div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-1 text-amber-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                ))}
                            </div>
                            <div className="text-xl md:text-xl lg:text-2xl text-zinc-500">from 1,25k reviews</div>
                        </div>
                    </div>

                    {/* Right: histogram */}
                    <div className="space-y-2">
                        {rows.map((r) => (
                            <div key={r.label} className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[50px_1fr_auto] lg:grid-cols-[60px_1fr_auto] items-center gap-2">
                                <span className="text-lg md:text-xl lg:text-2xl text-zinc-600">{r.label}</span>
                                <div className="relative h-2 md:h-3 lg:h-4 overflow-hidden rounded bg-zinc-200">
                                    <div className="absolute left-0 top-0 h-full bg-black" style={{ width: `${Math.max(0, Math.min(100, r.ratio * 100))}%` }} />
                                </div>
                                <span className="text-lg md:text-xl lg:text-2xl text-zinc-700">{r.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Review Lists filters moved to the list column below */}
        </div>
    );
}

function ReviewsList() {
    const items = [
        { id: 1, user: "Darrell Steward", date: "July 9, 2020 03:29 PM", text: "This is amazing product I have.", likes: 128 },
        { id: 2, user: "Darlene Robertson", date: "July 9, 2020 1:04 PM", text: "This is amazing product I have.", likes: 82 },
        { id: 3, user: "Kathryn Murphy", date: "June 28, 2020 10:03 PM", text: "This is amazing product I have.", likes: 9 },
        { id: 4, user: "Ronald Richards", date: "July 7, 2020 10:41 AM", text: "This is amazing product I have.", likes: 124 },
    ];

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr]">
                {/* Left: Filters (desktop only visual) */}
                <aside className="hidden self-start rounded-md border border-dashed border-zinc-300 p-5 md:block">
                    <div className="mb-4 text-xl md:text-xl lg:text-2xl font-semibold">Reviews Filter</div>
                    <div className="space-y-6 text-base md:text-base lg:text-lg">
                        <div>
                            <div className="mb-2 text-lg md:text-xl lg:text-2xl font-semibold text-zinc-900">Rating</div>
                            <div className="space-y-2">
                                {[5,4,3,2,1].map((r)=> (
                                    <label key={r} className="flex items-center gap-3">
                                        <input type="checkbox" className="h-5 w-5 md:h-6 md:w-6" />
                                        <span className="flex items-center gap-1">
                                            {r}
                                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                            </svg>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-dashed border-zinc-300" />

                        <div>
                            <div className="mb-2 text-lg md:text-xl lg:text-2xl font-semibold text-zinc-900">Review Topics</div>
                            <div className="space-y-2 text-zinc-500">
                                {['Product Quality','Seller Services','Product Price','Shipment','Match with Description'].map((t)=> (
                                    <label key={t} className="flex items-center gap-3">
                                        <input type="checkbox" className="h-5 w-5 md:h-6 md:w-6" />
                                        <span>{t}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right: Review list */}
                <div>
                    {/* Desktop heading + filters directly above the first review */}
                    <div className="hidden md:block">
                        <div className="mb-2 text-lg md:text-xl lg:text-2xl font-medium">Review Lists</div>
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <button className="rounded-md border border-zinc-300 bg-zinc-200 px-3 py-2 text-base md:text-base lg:text-lg">All Reviews</button>
                            <button className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base md:text-base lg:text-lg">With Photo & Video</button>
                            <button className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-base md:text-base lg:text-lg">With Description</button>
                            <button className="ml-auto rounded-md border border-zinc-300 bg-white p-2">
                                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {items.map((it, idx) => (
                            <div key={it.id} className={["pb-6", idx !== items.length - 1 ? "border-b border-dashed border-zinc-300" : ""].join(" ") }>
                                {/* Stars */}
                                <div className="mb-2 flex items-center gap-1 text-amber-400">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                        </svg>
                                    ))}
                                </div>
                                {/* Text */}
                                <div className="mb-1 text-base md:text-lg lg:text-xl font-semibold">This is amazing product I have.</div>
                                <div className="mb-3 text-sm md:text-base lg:text-lg text-zinc-500">{it.date}</div>
                                {/* User and actions */}
				<div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-base md:text-lg lg:text-xl text-zinc-700">
                                        <div className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-zinc-300" />
                                        <span>{it.user}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="inline-flex items-center gap-1 rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm md:text-base lg:text-lg">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 8v11h10a3 3 0 0 0 3-3v-7z" />
                                            </svg>
                                            {it.likes}
                                        </button>
                                        <button className="inline-flex items-center gap-1 rounded-md border border-zinc-300 bg-white px-2 py-1">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                <path d="M10 15v4a3 3 0 0 0 3 3l4-8V3H7a3 3 0 0 0-3 3v7z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
			</div>

                    {/* Pagination */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {[1,2,'…',19].map((p, idx) => (
                            <button key={idx} className={[
                                "h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded border text-base md:text-lg lg:text-xl",
                                p===1?"border-zinc-900 bg-black text-white":"border-zinc-300 bg-white"
                            ].join(" ")}>{p}</button>
                        ))}
			</div>
                    <div className="mt-6 border-t border-dashed border-zinc-300" />
		</div>
            </div>
        </div>
    );
}

function PopularThisWeek() {
    const { products } = useProducts({ page: 1, pageSize: 10 });
    const items = (products || []).slice(0, 5);

    if (!items.length) return null;

    return (
        <div className="mx-auto w-full">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Popular this week</h2>
                <Link href="/products" className="text-lg underline">View all</Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {items.map((p) => {
                    const img = (p.images && p.images[0]) || p.thumbnail;
                    return (
                        <Link key={p.id} href={`/products/${p.id}`} className="group block overflow-hidden rounded-lg bg-white">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-50">
                                {img ? (
                                    <Image src={img} alt={p.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-zinc-400">No Image</div>
                                )}
                            </div>
                            <div className="space-y-1 p-3">
                                <div className="line-clamp-2 text-lg md:text-lg lg:text-xl font-semibold text-zinc-700">{p.title}</div>
                                <Price className="sm:text-xl" amount={typeof p.price === "number" ? p.price : 0} currency={p.currency || "USD"} />
                                <div className="flex items-center gap-2 text-base md:text-base lg:text-lg text-zinc-700">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                    <span className="font-semibold">4.8</span>
                                    <span className="text-zinc-500">1,234 sold</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
		</div>
        </div>
    );
}
