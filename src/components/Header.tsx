import { Avatar, Flex } from '@chakra-ui/react';
import Link from 'next/link';

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
        <Link href="/">{title}</Link>
        <Avatar size="sm" name="Kurt Higa" src="https://bit.ly/broken-link" />
      </Flex>
    </Flex>
  );
};
