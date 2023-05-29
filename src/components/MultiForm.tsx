import React from 'react';
import styled, { css } from 'styled-components';
import { NavBar } from './NavBar.tsx';
import { Pages } from '../pages';

export const MultiForm: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <Pages />
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: grid;
    padding: 1rem;
    width: 50%;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: ${theme.colors.white};
    border-radius: 1rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      width: 100%;
      padding: 0;
      height: 100%;

      & > *:nth-child(1) {
        grid-area: 1/1/3/2;
      }

      & > *:nth-child(2) {
        grid-area: 2/1/5/2;
      }
    }
  `}
`;
