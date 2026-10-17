import { useEffect, useRef, useState } from "react";

interface Props {
	delay?: number;
	className?: string;
	children: React.ReactNode;
}

/** Fades content up once it scrolls into view. */
export default function Reveal({ delay = 0, className, children }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		if (!("IntersectionObserver" in window)) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		});
		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			data-reveal={isVisible ? "visible" : "hidden"}
			className={className}
			style={{ transitionDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
}
