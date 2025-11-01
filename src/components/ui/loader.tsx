export function Loader({ className }: { className?: string }) {
	return (
		<div className={["animate-pulse", className].filter(Boolean).join(" ")}>
			<div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
		</div>
	);
}

