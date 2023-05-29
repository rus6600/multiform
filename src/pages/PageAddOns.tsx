import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context.ts';
import { Button, ButtonWrapper, Checkbox, PageLayout } from '../components/ui';
import { AddOnsData, addOnsType, FormPageEnum, timePlanEnum } from '../interfaces';

export const PageAddOns: React.FC = () => {
  const { changePage, setAddOnsData, formState } = useContext(FormContext);
  const [data, setData] = useState<Array<AddOnsData>>([]);
  const addOns: addOnsType = [
    { name: 'online service', text: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    { name: 'larger storage', text: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    { name: 'customizable profile', text: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  ];
  console.log(formState.planData?.timePlan);
  const checkHandler = (item: AddOnsData) => {
    if (data.some((el) => el.name === item.name)) {
      setData(
        data.reduce((acc, cur) => {
          if (cur.name === item.name) return acc;
          return [...acc, cur];
        }, [] as Array<AddOnsData>),
      );
      return;
    }
    setData([...data, item]);
  };

  const clickHandler = () => {
    if (data.length) {
      setAddOnsData(data);
      changePage(FormPageEnum.summary);
    }
  };

  return (
    <PageLayout title="Pick add-ons" text="Add-ons help enhance your gaming experience">
      <Addons>
        {addOns.map((addOn) => {
          const checked = data.some((el) => el.name === addOn.name);
          return (
            <Addon
              key={addOn.name}
              checked={checked}
              onClick={() => checkHandler({ name: addOn.name, number: addOn.monthly })}>
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
