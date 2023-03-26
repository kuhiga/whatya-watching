import { Flex } from '@chakra-ui/react';
import { Header } from '../Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Header title={'Board'} backgroundColor="#1e1e1e" />
      <main>{children}</main>
    </Flex>
  );
};

export default PrimaryLayout;
