import React from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context.ts';
import { pagesEnum } from '../interfaces';
import DESKTOP from '../assets/images/bg-sidebar-desktop.svg';
import MOBILE from '../assets/images/bg-sidebar-mobile.svg';

export const NavBar: React.FC = () => {
  const {
    formState: { activePage },
    changePage,
  } = React.useContext(FormContext);

  const steps: Array<pagesEnum> = ['YOUR INFO', 'SELECT PLAN', 'ADD ONS', 'SUMMARY'];

  return (
    <Wrapper>
      <List>
        {steps.map((step) => (
          <ListItem key={step} isSelected={step === activePage} onClick={() => changePage(step)}>
            <p>{step}</p>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  padding: 3rem;
  background-image: url(${DESKTOP});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    padding: 0;
    justify-content: center;
    width: 100%;
    background-size: cover;
    background-image: url(${MOBILE});
  }
`;

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  counter-reset: list;

  @media (max-width: 600px) {
    padding: 0;
    width: 50%;
    margin-inline: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ListItem = styled('li')<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.white};
    list-style: none;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:before {
      display: flex;
      position: absolute;
      width: 40px;
      height: 40px;
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

    @media (max-width: 600px) {
      & p {
        display: none;
      }

      &:before {
        inset: 0;
        left: -20px;
      }

      &:after {
        display: none;
        content: '';
      }
    }

    ${isSelected &&
    css`
      &:before {
        cursor: pointer;
        color: black;
        background-color: ${theme.colors.lightBlue};
      }
    `}
  `}
`;
