import { createGlobalStyle } from "styled-components";

import UbuntuRegular from '../../assets/fonts/UbuntuRegular.ttf';
import UbuntuBold from '../../assets/fonts/UbuntuBold.ttf';
import UbuntuMedium from '../../assets/fonts/UbuntuMedium.ttf';

export const Font = createGlobalStyle`
  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
@font-face {
  font-family: 'Ubuntu';
  src: url(${UbuntuBold}) , url(${UbuntuRegular}),url(${UbuntuMedium}) 
}
`;

