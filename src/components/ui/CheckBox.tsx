import React from 'react';
import styled, { css } from 'styled-components';

type CheckBoxProps = {
  checked?: boolean;
};

export const Checkbox: React.FC<CheckBoxProps> = ({ checked }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox readOnly checked={checked || false} />
      <StyledCheckbox checked={checked || false}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled('div')<{ checked?: boolean }>`
  ${({ theme, checked }) => css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.coolGray};
    border-radius: 3px;
    
    ${
      checked &&
      css`
        border: none;
        background-color: ${theme.colors.purplishBlue};
      `
    }}
    
    ${HiddenCheckbox}:focus + & {
      box-shadow: 0 0 0 3px pink;
    }
    ${Icon} {
      visibility: ${() => (checked ? 'visible' : 'hidden')};
    }
  `}
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
