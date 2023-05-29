import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context.ts';
import { Button, ButtonWrapper, PageLayout, Switch } from '../components/ui';
import { FormPageEnum, PlanDataType, plansType, timePlanEnum } from '../interfaces';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';

export const PageSelectPlan: React.FC = () => {
  const { changePage, setPlanData, formState } = useContext(FormContext);
  const [data, setData] = useState<Partial<PlanDataType>>({
    timePlan: timePlanEnum.monthly,
    ...(formState.planData?.timePlan && { timePlan: formState.planData.timePlan }),
    ...(formState.planData?.plan && { plan: formState.planData.plan }),
  });
  const [error, setError] = useState<boolean>(false);
  const plans: Array<plansType> = [
    {
      name: 'arcade',
      monthly: 9,
      yearly: 90,
      logo: Arcade,
    },
    {
      name: 'advanced',
      monthly: 12,
      yearly: 120,
      logo: Advanced,
    },
    {
      name: 'pro',
      monthly: 15,
      yearly: 150,
      logo: Pro,
    },
  ];

  const handleChange = (val: Partial<PlanDataType>) => {
    setData((prevState) => {
      return {
        ...prevState,
        ...val,
      };
    });
    if (formState.planData) {
      setPlanData({ ...formState.planData, ...val });
    }
  };
  const handleClick = () => {
    if (!formState.planData && (!data.timePlan || !data.plan)) {
      alert('burr');
      setError(true);
      return;
    } else {
      setError(false);
      setPlanData(data as PlanDataType);
      changePage(FormPageEnum.addOns);
    }
  };
  return (
    <PageLayout title="Select your plan" text="You have the option of monthly of yearly billinpg">
      {error && <AlertText>Please choose one of the following plans</AlertText>}
      <Cards>
        {plans.map((plan) => {
          return (
            <Card
              key={plan.name}
              onClick={() => handleChange({ plan: plan.name })}
              selected={formState.planData?.plan === plan.name || data?.plan === plan.name}>
              <Logo src={plan.logo}></Logo>
              <CardText>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  {data?.timePlan === timePlanEnum.monthly ? `$${plan.monthly}/mo` : `$${plan.yearly}/y`}
                  <br />
                  {data?.timePlan === timePlanEnum.yearly && <AdditionalText>2 months free</AdditionalText>}
                </CardDescription>
              </CardText>
            </Card>
          );
        })}
      </Cards>
      <Switch data={data} onChange={handleChange} />
      <ButtonWrapper>
        <Button text={'Go back'} variant={'tertiary'} onClick={() => changePage(FormPageEnum.yourInfo)} />
        <Button text={'Next Step'} onClick={handleClick} />
      </ButtonWrapper>
    </PageLayout>
  );
};

const Cards = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  height: 30%;
`;

const Card = styled('div')<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    display: flex;
    padding: 1rem;
    flex-grow: 1;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.5rem;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;

    ${selected &&
    css`
      border: 1px solid ${theme.colors.marineBlue};
    `}

    &:hover {
      cursor: pointer;
    }
  `}
`;
const CardText = styled('div')`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled('p')`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.marineBlue};
    &::first-letter {
      text-transform: capitalize;
    }
  `}
`;

const AdditionalText = styled('span')`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.marineBlue};
  `}
`;

const CardDescription = styled('p')`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.coolGray};
  `}
`;

const Logo = styled('img')`
  width: 40px;
  object-fit: contain;
  aspect-ratio: 1;
`;

const AlertText = styled('h3')`
  ${({ theme }) => css`
    color: ${theme.colors.strawberryRed};
  `}
`;
