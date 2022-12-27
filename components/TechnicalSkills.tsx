import GraphQLIcon from '../public/static/icons/graphql.svg';
import ReactIcon from '../public/static/icons/react.svg';
import JavaScriptIcon from '../public/static/icons/javascript.svg';
import AngularIcon from '../public/static/icons/angular.svg';
import NextIcon from '../public/static/icons/nextjs.svg';
import NodeIcon from '../public/static/icons/nodejs.svg';

const technicalSkills = [
  {
    name: 'TypeScript & JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'Angular',
    icon: AngularIcon,
  },
  {
    name: 'NextJS',
    icon: NextIcon,
  },
  {
    name: 'NodeJS',
    icon: NodeIcon,
  },
  {
    name: 'GraphQL',
    icon: GraphQLIcon,
  },
];

export default function TechnicalSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-5 mb-5">
      {technicalSkills.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="border-card-border border rounded p-5 flex items-center text-sm text-gray-700 dark:text-gray-300"
        >
          <Icon width={30} height={30} className="mr-5 fill-current" />
          {name}
        </div>
      ))}
    </div>
  );
}
