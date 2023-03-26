import { Flex } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
  color?: string;
  backgroundColor?: string;
};
export const Header = ({
  title,
  color = 'black',
  backgroundColor = 'white',
}: HeaderProps) => {
  return (
    <Flex
      height="10vh"
      justifyContent="center"
      alignItems="center"
      padding="15px"
      color={color}
      bgColor={backgroundColor}
    >
      <Flex direction="column">
        <header className="App-header">
          <p>{title}</p>
        </header>
      </Flex>
    </Flex>
  );
};
