import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      200: '#E2E8F0',
      900: '#1A365D',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
      },
    },
  },
});
