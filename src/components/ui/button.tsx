import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
	className,
	variant = "primary",
	children,
	...props
}) => {
	const base =
		"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";
	const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
		primary:
			"bg-black text-white hover:bg-zinc-800 focus:ring-black dark:bg-white dark:text-black dark:hover:bg-zinc-200",
		secondary:
			"bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800",
		ghost:
			"bg-transparent text-black hover:bg-zinc-100 focus:ring-zinc-200 dark:text-white dark:hover:bg-zinc-800",
	};
	return (
		<button className={[base, variants[variant], className].filter(Boolean).join(" ")} {...props}>
			{children}
		</button>
	);
};

