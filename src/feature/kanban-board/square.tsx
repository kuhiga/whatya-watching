'use client';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Media } from '../../utils';

type SquareProps = {
  index: number;
  media: Media;
};
export const Square = ({ index, media }: SquareProps) => {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={5}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor="red.500"
    >
      <Flex direction="column">
        <Image maxHeight="150px" src={media.image} alt={media.title} />
        <Box> {media.title}</Box>
      </Flex>
    </Box>
  );
};
