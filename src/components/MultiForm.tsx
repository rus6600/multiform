import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FormContext } from '../provider/context.ts';

export const MultiForm: React.FC = () => {
  const test = useContext(FormContext);
  console.log(test);
  return <PageWrapper></PageWrapper>;
};

const PageWrapper = styled('div')`
  ${({ theme }) => css`
    width: 50%;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    margin: auto;
  `}
`;
