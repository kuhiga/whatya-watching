import PrimaryLayout from '@/src/components/layouts/PrimaryLayout';
import { Board } from '@/src/features';
import { CacheProvider } from '@chakra-ui/next-js';
import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { NextPageWithLayout } from './pages';

const Home: NextPageWithLayout = () => {
  return (
    <Box bgColor="#1e1e1e">
      <Head>
        <title>WyW?</title>
      </Head>
      <CacheProvider>
        <ChakraProvider>
          <Center>
            <Board />
          </Center>
        </ChakraProvider>
      </CacheProvider>
    </Box>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <ChakraProvider>
      <PrimaryLayout>{page}</PrimaryLayout>
    </ChakraProvider>
  );
};
