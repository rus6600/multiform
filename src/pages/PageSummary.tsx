import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FormContext } from '../provider/context.ts';
import { PageLayout } from '../components/ui';
import { FormPageEnum, timePlanEnum } from '../interfaces';
import { getEntries } from '../helpers';

export const PageSummary: React.FC = () => {
  const {
    changePage,
    formState: { planData, addOnsData },
  } = useContext(FormContext);
  const isMonthlyPlan = planData?.timePlan === timePlanEnum.monthly;
  const totalSum = () => {
    return (
      addOnsData &&
      planData &&
      planData.price &&
      Object.values(addOnsData).reduce((acc, cur) => {
        return acc + cur;
      }, planData.price)
    );
  };

  return (
    <PageLayout title="Finishing up" text="Double-check everything look OK before confirming">
      <Table>
        <Row>
          <Title>
            <h3>{`${planData?.plan} (${planData?.timePlan})`}</h3>
            <Change onClick={() => changePage(FormPageEnum.selectPlan)}>Change</Change>
          </Title>
          <p>{`$${planData?.price}/${planData?.timePlan === timePlanEnum.monthly ? 'mo' : 'yr'}`}</p>
        </Row>
        {addOnsData &&
          getEntries(addOnsData).map((value) => {
            return (
              <Row key={value && value[0]}>
                <p>{value && value[0]}</p>
                <p>{`+$${value && value[1]}/${isMonthlyPlan ? 'mo' : 'yr'}`}</p>
              </Row>
            );
          })}
        <Row>
          {isMonthlyPlan ? (
            <>
              <p>{`Total (per month)`}</p>
              <p>{`+$${totalSum()}/mo`}</p>
            </>
          ) : (
            <>
              <p>{`Total (per year)`}</p>
              <p>{`+$${totalSum()}/yr`}</p>
            </>
          )}
        </Row>
      </Table>
    </PageLayout>
  );
};

const Table = styled('div')`
  ${({ theme }) => css`
    border-radius: 1rem;
    background-color: ${theme.colors.magnolia};
  `}
`;

const Row = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    & h3 {
      color: ${theme.colors.marineBlue};
      text-transform: capitalize;
    }

    &:first-of-type {
      padding-bottom: 1rem;
      border-bottom: 1px solid ${theme.colors.coolGray};
    }

    &:last-of-type {
      margin: 0;
      padding: 2rem 1rem;
      background-color: ${theme.colors.white};

      & > *:last-child {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${theme.colors.purplishBlue};
      }
    }

    & > *:first-child {
      font-weight: 600;
      font-size: 1rem;
      color: ${theme.colors.coolGray};
      &:first-letter {
        text-transform: capitalize;
      }
    }

    & > *:last-child {
      font-weight: 600;
      font-size: 1rem;
      color: ${theme.colors.marineBlue};
    }
  `}
`;

const Title = styled('div')`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const Change = styled('button')`
  ${({ theme }) => css`
    color: ${theme.colors.coolGray};
    background-color: transparent;
    width: fit-content;
    border: none;
    text-decoration: underline;
    padding: 0;
    line-height: 1;
    border-bottom: 1px solid ${theme.colors.coolGray};

    text-decoration: green;
    &:hover {
      cursor: pointer;
    }
  `}
`;
