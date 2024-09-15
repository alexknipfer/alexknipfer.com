import { Plus } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="col-span-full mt-16 grid grid-cols-subgrid">
      <PlusSeparator />
      <h1 className="col-start-1 col-end-15 pt-1 text-8xl font-normal leading-[85%] tracking-tighter">
        Hi, my name is <br />
        <span className="">Alex</span>
      </h1>
      <p className="col-start-1 col-end-15 pb-1 pt-8 text-xl font-medium leading-none tracking-tighter">
        I&apos;m a developer, chess player, and a disc golfer. I am located in
        Cincinnati and currently work for Ascendum Solutions as a Full Stack
        Engineer.
      </p>
      <PlusSeparator />
    </section>
  );
}

function PlusSeparator() {
  return (
    <div className="col-span-full grid grid-cols-subgrid text-gray-900">
      <Plus size={10} className="col-span-1" />
      <Plus
        size={10}
        className="lg:col-end-16 lg:col-start-16 col-start-6 col-end-6 md:col-start-13 md:col-end-13"
      />
      <Plus
        size={10}
        className="-col-start-2 -col-end-1 justify-self-end lg:col-span-21 lg:justify-self-start"
      />
      <Plus
        size={10}
        className="hidden justify-self-end lg:-col-start-2 lg:-col-end-1 lg:block"
      />
    </div>
  );
}
