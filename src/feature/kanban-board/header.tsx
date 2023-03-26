'use client';
import { Flex } from '@chakra-ui/react';

export const Header = () => {
  const headerBackground = 'red.100';
  return (
    <Flex
      height="10vh"
      background={headerBackground}
      justifyContent="center"
      alignItems="center"
      padding="15px"
      color={'black'}
    >
      <Flex direction="column">
        <header className="App-header">
          <p>Whatcha Watching?</p>
        </header>
      </Flex>
    </Flex>
  );
};
