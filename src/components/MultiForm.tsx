import React from 'react';
import styled from 'styled-components';
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 70%;
  padding: 1rem;
  justify-content: space-between;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 24px rgba(63, 69, 80, 0.12);
  border-radius: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0;
    height: 100%;
    background-color: transparent;

    & > *:nth-child(1) {
      grid-area: 1/1/3/2;
    }

    & > *:nth-child(2) {
      grid-area: 2/1/5/2;
    }
  }
`;
