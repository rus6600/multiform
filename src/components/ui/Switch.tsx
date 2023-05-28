import React, { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';

export const Switch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <StyledSwitch />
    </Label>
  );
};

const Label = styled('label')`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledSwitch = styled('div')`
  ${({ theme }) => css`
    position: relative;
    width: 60px;
    height: 28px;
    background: ${theme.colors.lightGray};
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
      transition: 300ms all;
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 35px;
      top: 50%;
      left: 3px;
      background: white;
      transform: translate(0, -50%);
    }
  `}
`;

const Input = styled('input')`
  ${({ theme }) => css`
    opacity: 0;
    position: absolute;

    &:checked + ${StyledSwitch} {
      background: ${theme.colors.marineBlue};

      &:before {
        transform: translate(32px, -50%);
      }
    }
  `}
`;
