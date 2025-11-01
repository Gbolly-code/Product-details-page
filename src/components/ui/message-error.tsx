export function ErrorState({ message, className }: { message?: string; className?: string }) {
	return (
		<div className={["rounded-md border border-red-300 bg-red-50 p-3 text-red-700 dark:border-red-800 dark:bg-red-950/40", className].filter(Boolean).join(" ")}>
			{message || "Something went wrong."}
		</div>
	);
}

