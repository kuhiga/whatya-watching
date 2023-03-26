import { Center, Flex, SimpleGrid } from '@chakra-ui/react';

import { ColumnType, Media } from '../../utils';
import { Column } from './Column';

const mediaList: Media[] = [
  {
    id: '0',
    title: 'sponge bob',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
    column: ColumnType.TO_WATCH,
  },
  {
    id: '1',
    title: 'doraemon',
    image:
      'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png',
    column: ColumnType.TO_WATCH,
  },
  {
    id: '3',
    title: 'sponge bob',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
    column: ColumnType.TO_WATCH,
  },
];

export const Board = () => {
  return (
    <Flex justifyContent="space-around" p="50">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
        <Center>
          <Column column={ColumnType.TO_WATCH} mediaList={mediaList} />
        </Center>
        <Center>
          <Column column={ColumnType.IN_PROGRESS} mediaList={mediaList} />
        </Center>
        <Center>
          <Column column={ColumnType.COMPLETED} mediaList={mediaList} />
        </Center>
        <Center>
          <Column column={ColumnType.PARKED} mediaList={mediaList} />
        </Center>
      </SimpleGrid>
    </Flex>
  );
};
