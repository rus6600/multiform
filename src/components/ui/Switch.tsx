import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { PlanDataType, timePlanEnum } from '../../interfaces';
import { FormContext } from '../../provider/context.ts';

type SwitchProps = {
  onChange: (val: Partial<PlanDataType>) => void;
  data?: Partial<PlanDataType>;
};

export const Switch: React.FC<SwitchProps> = ({ onChange }) => {
  const {
    formState: { planData },
  } = useContext(FormContext);

  return (
    <SwitchWrapper>
      <Text selected={planData?.timePlan === timePlanEnum.monthly}>Monthly</Text>
      <Label>
        <Input
          type="checkbox"
          checked={planData?.timePlan === timePlanEnum.yearly}
          onChange={(e) => onChange({ timePlan: e.target.checked ? timePlanEnum.yearly : timePlanEnum.monthly })}
        />
        <StyledSwitch />
      </Label>
      <Text selected={planData?.timePlan === timePlanEnum.yearly}>Yearly</Text>
    </SwitchWrapper>
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
    background: ${theme.colors.marineBlue};
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

const SwitchWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    padding-block: 0.5rem;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    background-color: ${theme.colors.alabaster};
  `}
`;

const Text = styled('p')<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    color: ${theme.colors.coolGray};

    font-weight: 600;
    ${selected &&
    css`
      color: ${theme.colors.marineBlue};
    `};
  `}
`;
