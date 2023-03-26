'use client';

import { Header } from '@/src/feature';
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
          <Header />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </html>
  );
}
