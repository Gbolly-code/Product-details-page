"use client";
import * as React from "react";

type SizeSelectorProps = {
	values: (string | number)[];
	selected?: string;
	onSelect?: (value: string) => void;
};

export function SizeSelector({ values, selected, onSelect }: SizeSelectorProps) {
    return (
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-6">
            {values.map((v) => {
                const val = String(v);
                const isSelected = selected === val;
                return (
                    <button
                        key={val}
                        type="button"
                        onClick={() => onSelect?.(val)}
                        className={[
                            "h-13 rounded-xl border px-2 text-2xl transition-colors",
                            isSelected
                                ? "border-zinc-900 bg-zinc-200 text-black"
                                : "border-zinc-200 bg-zinc-50 hover:border-zinc-400",
                        ].join(" ")}
                    >
                        {val}
                    </button>
                );
            })}
        </div>
    );
}


