type PriceProps = {
	amount: number;
	currency?: string;
	className?: string;
};

export function Price({ amount, currency = "USD", className }: PriceProps) {
	return (
		<span className={["tabular-nums font-semibold", className].filter(Boolean).join(" ")}>{
			new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount)
		}</span>
	);
}

