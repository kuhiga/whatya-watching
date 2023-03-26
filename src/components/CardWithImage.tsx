/* eslint-disable no-unused-vars */
import { Card, CardBody, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
type SquareProps = {
  image: string;
  title: string;
  backgroundColor: string;
};
export const CardWithImage = ({
  image,
  title,
  backgroundColor,
}: SquareProps) => {
  return (
    <Card
      maxW="200"
      cursor="grab"
      bgColor={backgroundColor}
      justifyContent="center"
      textAlign="center"
    >
      <CardBody pl="10" pr="10" pt="5" pb="5">
        <Flex borderRadius="lg">
          <Image src={image} alt={title} width="125" height="125" />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="sm" color="BlackAlpha 50">
            {title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};
