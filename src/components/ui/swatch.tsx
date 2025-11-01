"use client";
import * as React from "react";

type SwatchProps = {
	value: string;
	selected?: boolean;
	onSelect?: (value: string) => void;
	label?: string;
};

export function Swatch({ value, selected, onSelect, label }: SwatchProps) {
	return (
		<button
			type="button"
			onClick={() => onSelect?.(value)}
            className={[
                "h-14 w-full md:h-10 md:w-16 lg:h-12 lg:w-20 rounded-xl border border-transparent p-[2px] transition",
                selected ? "ring-1 ring-black ring-offset-2 ring-offset-white" : "",
            ].join(" ")}
			aria-label={label || value}
        >
            <div className="h-full w-full rounded-lg" style={{ backgroundColor: value }} />
        </button>
	);
}


