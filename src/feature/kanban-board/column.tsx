'use client';
import { AddIcon } from '@chakra-ui/icons';
import { Badge, Box, Heading, IconButton, Stack } from '@chakra-ui/react';
import { ColumnType, Media } from '../../utils';
import { Square } from './square';

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
    <Square key={index} index={index} media={media} />
  ));
  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
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
      <Stack
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 300, md: '85%' }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={'gray.50'}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
      >
        {columnMedias}
      </Stack>
    </Box>
  );
};
