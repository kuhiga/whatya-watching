import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export const AddButton = () => (
  <IconButton
    maxW={250}
    size="xs"
    w="full"
    color={'gray.500'}
    bgColor={'gray.100'}
    _hover={{ bgColor: 'gray.200' }}
    py={2}
    variant="solid"
    colorScheme="black"
    aria-label="add-media"
    icon={<AddIcon />}
  ></IconButton>
);
