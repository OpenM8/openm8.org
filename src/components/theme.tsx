import { extendTheme } from '@chakra-ui/react'

export type Config = {
  initialColorMode: 'light' | 'dark' | 'system';
  useSystemColorMode: boolean;
}
const config: Config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}
const theme = extendTheme({ config });

export default theme;