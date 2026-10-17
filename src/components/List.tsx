interface Props {
	listItems: string[];
}

export function List({ listItems }: Props) {
	return (
		<ul className="flex flex-col gap-2 text-sm leading-relaxed text-fg">
			{listItems.map((item) => (
				<li className="flex gap-3" key={item}>
					<span aria-hidden="true" className="text-primary">
						▹
					</span>
					<p>{item}</p>
				</li>
			))}
		</ul>
	);
}
