import 'styled-components';
import { theme } from '../config';
import { ThemeType } from '../components/interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
