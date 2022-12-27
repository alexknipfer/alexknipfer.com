import Heading from '@/components/Heading';
import List from '@/components/List';
import Anchor from '@/components/Anchor';

interface Props {
  organizationName: string;
  timeframe: string;
  websiteUrl: string;
  title: string;
  listItems: string[];
}

export default function ExperienceDetails({
  organizationName,
  timeframe,
  websiteUrl,
  title,
  listItems,
}: Props) {
  return (
    <div className="border-l border-dashed border-gray-700 dark:border-gray-400 pl-5 mb-10 last:mb-0">
      <Heading level="h3" className="mb-2">
        {title}&nbsp;@&nbsp;
        <Anchor href={websiteUrl}>{organizationName}</Anchor>
      </Heading>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{timeframe}</p>
      <List listItems={listItems} />
    </div>
  );
}
