/* eslint-disable no-unused-vars */
import { Box, Flex, Image } from '@chakra-ui/react';

type SquareProps = {
  image: string;
  title: string;
  backgroundColor: string;
};
export const MediaItem = ({ image, title, backgroundColor }: SquareProps) => {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      textAlign="center"
      rounded="md"
      w={200}
      pl={3}
      pr={7}
      pt={5}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={backgroundColor}
    >
      <Flex direction="column">
        <Image maxHeight="150px" src={image} alt={title} />
        <Box> {title}</Box>
      </Flex>
    </Box>
  );
};
