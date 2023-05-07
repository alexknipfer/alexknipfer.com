'use client';

import { useState } from 'react';

const useDisclosure = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen((prev) => !prev);

  return {
    onOpen,
    onClose,
    onToggle,
    isOpen,
  };
};

export default useDisclosure;
