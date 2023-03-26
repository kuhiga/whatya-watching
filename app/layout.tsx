'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CacheProvider>
        <ChakraProvider>
          <body>{children}</body>
        </ChakraProvider>
      </CacheProvider>
    </html>
  );
}
