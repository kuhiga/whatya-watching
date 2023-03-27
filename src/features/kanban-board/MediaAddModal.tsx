import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { MediaSearchForm } from './MediaSearchForm';
type MediaAddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MediaAddModal = ({ isOpen, onClose }: MediaAddModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="scale">
      <ModalOverlay backdropFilter="auto" backdropBlur="4px" />
      <ModalContent backgroundColor="#1e1e1e" p={5} height="90vh">
        <Flex justifyContent="center" flexDirection="column">
          <ModalHeader alignSelf="center">Add new show or movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignSelf="center">
            <MediaSearchForm />
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
