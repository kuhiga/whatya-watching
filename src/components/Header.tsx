import { Avatar, Flex, Text } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
  color?: string;
  backgroundColor?: string;
};
export const Header = ({
  title,
  color = 'BlackAlpha 100',
  backgroundColor = '#2e2d30',
}: HeaderProps) => {
  return (
    <Flex flexDir="column" color={color} bgColor={backgroundColor}>
      <Flex
        width="100vw"
        color="BlackAlpha 50"
        bgColor={backgroundColor}
        p={2}
        textAlign="center"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
      >
        <Text>{title}</Text>
        <Avatar size="sm" name="Kurt Higa" src="https://bit.ly/broken-link" />
      </Flex>
      {/* <Flex alignItems="center" ml="5" mt="5">
        <Heading color="BlackAlpha 50" size="md">
          {title}
        </Heading>
      </Flex> */}
    </Flex>
  );
};
