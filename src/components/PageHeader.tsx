import { BlurIn } from "#/components/BlurIn";

interface Props {
	title: string;
	description?: React.ReactNode;
}

export function PageHeader({ title, description }: Props) {
	return (
		<header className="py-16 text-center sm:py-24">
			<BlurIn delay={0.1}>
				<h1 className="mx-auto max-w-lg text-3xl font-bold text-pretty text-fg-highlighted text-shadow-md sm:text-4xl lg:text-5xl">
					{title}
				</h1>
			</BlurIn>
			{description && (
				<BlurIn delay={0.3}>
					<p className="mx-auto mt-6 max-w-xl text-balance text-fg-muted">
						{description}
					</p>
				</BlurIn>
			)}
		</header>
	);
}
