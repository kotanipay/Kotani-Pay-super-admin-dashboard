import { useEffect, useState } from "react";

export enum EScreenBreakpoints {
	SM = 640,
	MD = 768,
	LG = 1024,
	XL = 1280,
	XL2 = 1536,
}

export function useWidth() {
	if (typeof window !== "undefined") {
		const [width, setWidth] = useState(window.innerWidth);

		useEffect(() => {
			window.addEventListener("resize", () => {
				setWidth(window.innerWidth);
			});
		}, []);

		return width;
	}
}
