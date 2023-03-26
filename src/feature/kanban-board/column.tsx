import { Chip } from '@/src/components/Chip';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { ColumnType, Media } from '../../utils';
import { MediaTask } from './MediaTask';

const ColumnColorScheme: Record<ColumnType, string> = {
  'To Watch': 'gray',
  'In Progress': 'blue',
  Parked: 'red',
  Completed: 'green',
};

export const Column = ({
  column,
  mediaList,
}: {
  column: ColumnType;
  mediaList: Media[];
}) => {
  const columnMedias = mediaList.map((media, index) => (
    <MediaTask
      key={index}
      title={media.title}
      image={media.image}
      index={index}
    />
  ));
  return (
    <Box p={5} maxW={250} alignItems="center " bgColor="#2e2d30">
      <Heading
        fontSize="md"
        mb={4}
        letterSpacing="wide"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Chip label={column as string} color={ColumnColorScheme[column]} />
      </Heading>
      <Stack
        maxW={250}
        minH="70vh"
        direction={{ base: 'column', md: 'column' }}
        h={{ base: 300, md: '85%' }}
        p={2}
        mt={2}
        alignItems="center"
        spacing={4}
        rounded="lg"
        boxShadow="md"
        overflowX="hidden"
        overflowY="auto"
      >
        {columnMedias}
      </Stack>
    </Box>
  );
};
