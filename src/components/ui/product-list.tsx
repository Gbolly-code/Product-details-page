"use client";
import { useProducts } from "@/hooks/use-products";
import { Loader, ErrorState, ProductGrid } from ".";

export function ProductList() {
    const { products, loading, error } = useProducts({ page: 1, pageSize: 12 });

    if (loading) return <div className="py-8"><Loader /></div>;
    if (error) return <div className="py-8"><ErrorState message={error} /></div>;
    return <ProductGrid products={products || []} />;
}


