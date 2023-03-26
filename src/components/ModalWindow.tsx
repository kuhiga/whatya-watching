import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Image from 'next/image';
import { MutableRefObject } from 'react';
type ModalWindowProps = {
  image: string;
  finalFocusRef: MutableRefObject<null>;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};
export const ModalWindow = ({
  image,
  finalFocusRef,
  title,
  isOpen,
  onClose,
}: ModalWindowProps) => (
  <Modal
    isCentered
    finalFocusRef={finalFocusRef}
    isOpen={isOpen}
    onClose={onClose}
    size="xl"
    colorScheme="#1e1e1e"
  >
    <ModalOverlay />
    <ModalContent>
      <Flex justifyContent="center" flexDirection="column">
        <ModalHeader alignSelf="center">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody alignSelf="center">
          <Image height="300" width="300" src={image} alt={title} />
        </ModalBody>
      </Flex>
    </ModalContent>
  </Modal>
);
