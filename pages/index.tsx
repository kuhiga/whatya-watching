import PrimaryLayout from '@/src/components/layouts/PrimaryLayout';
import { Board } from '@/src/feature';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { NextPageWithLayout } from './pages';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Whatya Watching?</title>
      </Head>
      <CacheProvider>
        <ChakraProvider>
          <Board />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
