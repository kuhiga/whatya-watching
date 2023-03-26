import { CardWithImage } from '@/src/components/CardWithImage';
import { ModalWindow } from '@/src/components/ModalWindow';
import { Box, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';

type MediaTaskProps = {
  index: number;
  title: string;
  image: string;
};

export const MediaTask = ({ index, title, image }: MediaTaskProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <Box ref={finalRef} onClick={onOpen}>
      <CardWithImage
        key={index}
        title={title}
        image={image}
        backgroundColor="#1e1e1e"
      />
      <ModalWindow
        image={image}
        finalFocusRef={finalRef}
        title={title}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
