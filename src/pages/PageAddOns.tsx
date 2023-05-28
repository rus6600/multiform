import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context.ts';
import { Button, ButtonWrapper, Checkbox, PageLayout } from '../components/ui';
import { addOnsType, FormPageEnum } from '../interfaces';

export const PageAddOns: React.FC = () => {
  const { changePage } = useContext(FormContext);

  const clickHandler = () => {};

  const addOns: addOnsType = [
    { name: 'Online service', text: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    { name: 'Larger storage', text: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    { name: 'Customizable Profile', text: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  ];

  return (
    <PageLayout title="Pick add-ons" text="Add-ons help enhance your gaming experience">
      <Addons>
        {addOns.map((addOn) => (
          <Addon>
            <Checkbox />
            <Text>
              <h3>{addOn.name}</h3>
              <p>{addOn.text}</p>
            </Text>
            <p>{`${addOn.monthly}/mo`}</p>
          </Addon>
        ))}
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

const Addon = styled('div')`
  display: flex;
  gap: 1rem;
`;

const Text = styled('div')`
  display: flex;
  flex-direction: column;
`;
