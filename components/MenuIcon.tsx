import { useSpring, config, animated } from 'react-spring';

const openedTransformationConfig = {
  top: 'translate(2, 7) rotate(0)',
  center: 'translate(2, 19) rotate(0)',
  bottom: 'translate(2, 31) rotate(0)',
};

const closedTransformationConfig = {
  top: 'translate(5, 32) rotate(-45)',
  center: 'translate(8, 7) rotate(45)',
  bottom: 'translate(5, 32) rotate(-45)',
};

// type TransformationConfig = typeof openedTransformationConfig;

interface Props {
  isOpen: boolean;
}

export default function MenuIcon({ isOpen }: Props) {
  const props = useSpring({
    to: isOpen ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff,
  }) as any;

  return (
    <svg
      width="40"
      height="44"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect width="35" height="3" rx="3" transform={props.top} />
      <animated.rect width="35" height="3" rx="3" transform={props.center} />
      <animated.rect width="35" height="3" rx="3" transform={props.bottom} />
    </svg>
  );
}
