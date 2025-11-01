"use client";
import * as React from "react";
import { Product } from "@/types";

export type CartItem = { product: Product; quantity: number };

type CartContextValue = {
	items: CartItem[];
	add: (product: Product, quantity?: number) => void;
	remove: (productId: string) => void;
	clear: () => void;
};

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "app_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = React.useState<CartItem[]>([]);

	React.useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
	}, []);

	React.useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items]);

	const add = React.useCallback((product: Product, quantity = 1) => {
		setItems((prev) => {
			const existing = prev.find((i) => i.product.id === product.id);
			if (existing) {
				return prev.map((i) =>
					i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
				);
			}
			return [...prev, { product, quantity }];
		});
	}, []);

	const remove = React.useCallback((productId: string) => {
		setItems((prev) => prev.filter((i) => i.product.id !== productId));
	}, []);

	const clear = React.useCallback(() => setItems([]), []);

	const value = React.useMemo(() => ({ items, add, remove, clear }), [items, add, remove, clear]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = React.useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}

