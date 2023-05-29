import React from 'react';

import styled, { css } from 'styled-components';
import { BasePageProps } from '../../interfaces';
import { Buttons } from '../Buttons.tsx';

interface PageLayoutProps extends BasePageProps {
  title: string;
  text: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, text, children }) => {
  return (
    <Wrapper>
      <Background>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {children}
      </Background>
      <Buttons />
    </Wrapper>
  );
};
const Wrapper = styled('div')`
  display: flex;
  padding: 2rem 3rem;
  height: 100%;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Background = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    @media (max-width: 600px) {
      padding: 2rem;
    }
  `}
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
    margin-bottom: 2rem;
  `}
`;
