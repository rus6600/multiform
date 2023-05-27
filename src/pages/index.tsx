import React from 'react';
import styled, { css } from 'styled-components';

import { BasePageProps } from '../interfaces';
import { PageAddOns } from './PageAddOns.tsx';
import { PageSelectPlan } from './PageSelectPlan.tsx';
import { PageYourInfo } from './PageYourInfo.tsx';
import { PageSummary } from './PageSummary.tsx';

interface PagesProps extends BasePageProps {}

export const Pages: React.FC<PagesProps> = ({ children }) => {
  return (
    <PageWrapper>
      <PageYourInfo />
      <PageSelectPlan />
      <PageAddOns />
      <PageSummary />
    </PageWrapper>
  );
};

const PageWrapper = styled('div')`
  ${({ theme }) => css`
    width: 50%;
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    margin: auto;
  `}
`;
