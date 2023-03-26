import { Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageWithLayout } from './pages';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <Box bgColor="2e2d30">{getLayout(<Component {...pageProps} />)}</Box>;
}

export default MyApp;
