import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FormContext } from '../provider/context.ts';
import { Button, ButtonWrapper, PageLayout } from '../components/ui';
import { FormPageEnum } from '../interfaces';
import { getEntries } from '../ulits';

export const PageSummary: React.FC = () => {
  const {
    changePage,
    formState: { formData, planData, addOnsData },
  } = useContext(FormContext);

  const clickHandler = () => {
    changePage(FormPageEnum.addOns);
  };
  console.log(planData);
  return (
    <PageLayout title="Finishing up" text="Double-check everything look OK before confirming">
      <Table>
        <Row>
          <>
            <h2>{`${planData?.plan} (${planData?.timePlan})`}</h2>
            <Change onClick={() => changePage(FormPageEnum.selectPlan)}>Change</Change>
          </>
          <p>{`$${planData?.timePlan}`}</p>
        </Row>
        {addOnsData &&
          getEntries(addOnsData).map(([name, value]) => {
            return (
              <Row key={name}>
                <p>{name}</p>
                <p>{value}</p>
              </Row>
            );
          })}
      </Table>
      <ButtonWrapper>
        <Button variant="tertiary" text="Go back" onClick={clickHandler} />
        <Button variant="secondary" text="Confirm" onClick={clickHandler} />
      </ButtonWrapper>
    </PageLayout>
  );
};

const Table = styled('div')`
  ${({ theme }) => css`
    border-radius: 1rem;
    background-color: ${theme.colors.magnolia};

    & > *:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.coolGray};
    }
  `}
`;

const Row = styled('div')`
  ${({ theme }) => css`
    padding: 1rem;
    & h2 {
      color: ${theme.colors.marineBlue};
      text-transform: capitalize;
    }
  `}
`;

const Change = styled('button')`
  ${({ theme }) => css`
    color: ${theme.colors.coolGray};
    background-color: transparent;
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
