import { SimpleGrid } from '@chakra-ui/react';

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
      'https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg',
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
    <>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
        <Column column={ColumnType.TO_WATCH} mediaList={mediaList} />
        <Column column={ColumnType.IN_PROGRESS} mediaList={mediaList} />
        <Column column={ColumnType.COMPLETED} mediaList={mediaList} />
        <Column column={ColumnType.PARKED} mediaList={mediaList} />
      </SimpleGrid>
    </>
  );
};
