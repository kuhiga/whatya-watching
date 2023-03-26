import { Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      height="10vh"
      justifyContent="center"
      alignItems="center"
      padding="15px"
      color={'white'}
    >
      <Flex direction="column">
        <header className="App-header">
          <p>Whatcha Watching?</p>
        </header>
      </Flex>
    </Flex>
  );
};
