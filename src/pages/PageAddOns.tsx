import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context.ts';
import { Button, ButtonWrapper, Checkbox, PageLayout } from '../components/ui';
import { AddOnsData, addOnsType, FormPageEnum, timePlanEnum } from '../interfaces';
import { AlertText } from './PageSelectPlan.tsx';
import { removeKey } from '../ulits';

export const PageAddOns: React.FC = () => {
  const { changePage, setAddOnsData, formState } = useContext(FormContext);
  const [error, setError] = useState<boolean>(false);
  const addOns: addOnsType = [
    { name: 'online service', text: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    { name: 'larger storage', text: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    { name: 'customizable profile', text: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  ];

  const checkHandler = (item: AddOnsData) => {
    const key = (Object.keys(item) as Array<keyof AddOnsData>)[0];
    if (formState.addOnsData && key in formState.addOnsData) {
      setAddOnsData(removeKey(key, formState.addOnsData));
    } else {
      setAddOnsData({ ...formState.addOnsData, ...item });
    }
  };

  const clickHandler = () => {
    if (formState.addOnsData && Object.keys(formState.addOnsData).length > 0) {
      changePage(FormPageEnum.summary);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <PageLayout title="Pick add-ons" text="Add-ons help enhance your gaming experience">
      {error && <AlertText>Please choose one of the following plans</AlertText>}
      <Addons>
        {addOns.map((addOn) => {
          const checked = formState?.addOnsData && !!formState?.addOnsData[addOn.name];
          return (
            <Addon key={addOn.name} checked={checked} onClick={() => checkHandler({ [addOn.name]: addOn.monthly })}>
              <Checkbox checked={checked} />
              <Text>
                <h3>{addOn.name}</h3>
                <p>{addOn.text}</p>
              </Text>
              <p>
                {formState.planData?.timePlan === timePlanEnum.monthly ? `$${addOn.monthly}/mo` : `$${addOn.yearly}/yr`}
              </p>
            </Addon>
          );
        })}
      </Addons>
      <ButtonWrapper>
        <Button variant={'tertiary'} text="Go back" onClick={() => changePage(FormPageEnum.selectPlan)}></Button>
        <Button text="Next Step" onClick={clickHandler}></Button>
      </ButtonWrapper>
    </PageLayout>
  );
};

const Addons = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Addon = styled('div')<{ checked?: boolean }>`
  ${({ theme, checked }) => css`
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    align-items: center;
    gap: 1rem;
    border: 1px solid white;
    ${checked &&
    css`
      border: 1px solid ${theme.colors.purplishBlue};
    `}

    & > *:last-child {
      margin-left: auto;
      font-weight: 600;
      color: ${theme.colors.purplishBlue};
    }

    &:hover {
      cursor: pointer;
    }
  `}
`;

const Text = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    & h3 {
      color: ${theme.colors.marineBlue};
    }
    & p {
      color: ${theme.colors.coolGray};
    }
  `}
`;
