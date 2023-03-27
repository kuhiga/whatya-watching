import { Button, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { AddMediaModal } from './AddMediaModal';
type BoardHeaderProps = {
  title: string;
};

export const BoardHeader = ({ title }: BoardHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack alignItems="center" mb="10" direction="row" spacing={4}>
      <Heading color="BlackAlpha 50" size="lg">
        {title}
      </Heading>
      <Button
        variant="solid"
        colorScheme="gray"
        size="md"
        color="BlackAlpha 50"
        onClick={onOpen}
      >
        Add Show/Movie
      </Button>
      <AddMediaModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};
