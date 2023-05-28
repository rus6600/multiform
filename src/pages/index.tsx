import React, { createElement } from 'react';
import styled, { css } from 'styled-components';

import { usePageSelect } from '../ulits';

export const Pages: React.FC = () => {
  return <PageWrapper>{createElement(usePageSelect())}</PageWrapper>;
};

const PageWrapper = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
  `}
`;
