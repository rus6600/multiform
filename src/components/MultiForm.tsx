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
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.white};
    border-radius: 1rem;
  `}
`;
