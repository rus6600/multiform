import React from 'react';
import styled, { css } from 'styled-components';

import SVG from '../assets/images/bg-sidebar-desktop.svg';
import { FormContext } from '../provider/context.ts';
import { pagesEnum } from '../interfaces/providerinterface.ts';

export const NavBar: React.FC = () => {
  const { changePage } = React.useContext(FormContext);

  const steps: Array<pagesEnum> = ['YOUR INFO', 'SELECT PLAN', 'ADD ONS', 'SUMMARY'];

  return (
    <Wrapper>
      <List>
        {steps.map((step) => (
          <ListItem onClick={() => changePage(step)} key={step}>
            {step}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  padding: 2rem;
  background-image: url(${SVG});
  background-repeat: no-repeat;
  background-size: contain;
`;

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  counter-reset: list;
`;

const ListItem = styled('li')`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.white};
    list-style: none;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }

    &:before {
      display: flex;
      position: absolute;
      padding: 5px 10px;
      left: -50px;
      top: -18px;
      content: counter(list);
      align-items: center;
      justify-content: center;
      counter-increment: list;
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      border-radius: 50%;
    }

    &:after {
      display: flex;
      position: absolute;
      top: -20px;
      left: 0;
      font-size: 12px;
      font-weight: 100;
      color: ${theme.colors.lightGray};
      content: 'STEP ' counter(list);
      align-items: center;
      justify-content: center;
      letter-spacing: 1px;
      text-align: center;
    }

    &:hover::before {
      cursor: pointer;
      color: black;
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
