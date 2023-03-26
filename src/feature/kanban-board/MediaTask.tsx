import { MediaItem } from '@/src/components/MediaItem';
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
      <MediaItem
        key={index}
        title={title}
        image={image}
        backgroundColor="green"
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
