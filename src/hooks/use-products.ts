"use client";
import * as React from "react";
import type { Product } from "@/types";
import { api } from "@/lib/api-client";

export function useProducts(params?: {
    page?: number;
    pageSize?: number;
    search?: string;
    categoryId?: string;
}) {
    const [products, setProducts] = React.useState<Product[] | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
        api.fetchProducts(params)
            .then((res) => {
                if (!cancelled) setProducts(res.items || []);
            })
            .catch((e: unknown) => {
                if (!cancelled) setError(e instanceof Error ? e.message : String(e));
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [params?.page, params?.pageSize, params?.search, params?.categoryId]);

    return { products, loading, error } as const;
}


