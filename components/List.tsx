interface Props {
  listItems: string[];
}

export default function List({ listItems }: Props) {
  return (
    <ul className="text-gray-700 dark:text-gray-300 list-arrow">
      {listItems.map((item, index) => (
        <li className="flex mb-2" key={`${item}-${index}`}>
          <span>▹</span>
          <p className="ml-2">{item}</p>
        </li>
      ))}
    </ul>
  );
}
