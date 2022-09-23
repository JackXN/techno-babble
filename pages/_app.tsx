import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, {useState, useEffect} from 'react'
import { Layout } from '../components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "blue",
    },
    primary: {
    'orange': '#F47F39',
      'gray': '#787878',
      'white': '#fffff'
    }
  },
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
      </ChakraProvider>
    </Layout>
  )
}

export default MyApp
