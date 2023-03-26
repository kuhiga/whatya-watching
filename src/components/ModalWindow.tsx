import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
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
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image maxHeight="300px" src={image} alt={title} />
        current episode: summary
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
