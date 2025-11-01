type RatingProps = { value?: number; className?: string };

export function Rating({ value = 0, className }: RatingProps) {
	const filled = Math.round(value);
	return (
		<div className={["flex items-center gap-1", className].filter(Boolean).join(" ")}>
			{Array.from({ length: 5 }).map((_, i) => (
				<span key={i} aria-hidden className={i < filled ? "text-yellow-500" : "text-zinc-300 dark:text-zinc-700"}>★</span>
			))}
			<span className="sr-only">Rating {filled} of 5</span>
		</div>
	);
}

