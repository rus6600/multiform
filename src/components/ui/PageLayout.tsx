import React from 'react';

import styled, { css } from 'styled-components';
import { BasePageProps } from '../../interfaces';

interface PageLayoutProps extends BasePageProps {
  title: string;
  text: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, text, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {children}
    </Wrapper>
  );
};
export const Wrapper = styled('div')`
  display: flex;
  padding: 1rem 3rem;
  height: 100%;
  flex-direction: column;
`;

const Title = styled('h1')`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.marineBlue};
  `}
`;

const Text = styled('p')`
  ${({ theme }) => css`
    color: ${theme.colors.coolGray};
  `}
`;
