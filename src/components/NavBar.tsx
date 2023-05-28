import React from 'react';
import styled, { css } from 'styled-components';
import SVG from '../assets/images/bg-sidebar-desktop.svg';

export const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </ListItem>
        <ListItem>
          <p>STEP 2 </p>
          <p>SELECT PLAN</p>
        </ListItem>
        <ListItem>
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </ListItem>
        <ListItem>
          <p>STEP 4</p>
          <p>SUMMARY</p>
        </ListItem>
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
  gap: 1rem;
  counter-reset: list;
`;

const ListItem = styled('li')`
  ${({ theme }) => css`
    position: relative;
    flex-direction: column;
    display: flex;
    color: ${theme.colors.white};
    list-style: none;

    & > *:first-child {
      font-size: 14px;
      font-weight: 100;
      color: ${theme.colors.lightGray};
    }

    & > *:last-child {
      letter-spacing: 2px;
      font-weight: 600;
    }

    &:before {
      display: flex;
      height: 30px;
      width: 30px;
      position: absolute;
      left: -40px;
      top: 10px;
      content: counter(list);
      align-items: center;
      justify-content: center;
      counter-increment: list;
      text-align: center;
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      border-radius: 50%;
    }

    &:hover::before {
      cursor: pointer;
      color: black;
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
