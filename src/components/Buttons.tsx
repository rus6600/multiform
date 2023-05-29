import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './ui';
import { FormPageEnum, inputEnum, inputFieldsType } from '../interfaces';
import { getEntries, validateEmail } from '../helpers';
import { FormContext } from '../provider/context.ts';

export const Buttons: React.FC = () => {
  const { formState, changePage, setErrors } = useContext(FormContext);

  const moveForward = () => {
    if (formState.activePage === FormPageEnum.yourInfo) {
      setErrors({
        ...formState.errors,
        ...{
          [FormPageEnum.yourInfo]: getEntries(formState.formData).reduce((acc, [name, value]) => {
            if (!value || (name === inputEnum.email && !validateEmail(formState.formData.email))) {
              return [...acc, name];
            }
            return [...acc];
          }, [] as Array<inputFieldsType>),
        },
      });
      if (formState.formData.name && formState.formData.email && formState.formData.number) {
        changePage(FormPageEnum.selectPlan);
      }
    }
    if (formState.activePage === FormPageEnum.selectPlan) {
      if (formState.planData && Object.keys(formState.planData).length > 1) {
        setErrors({
          ...formState.errors,
          ...{
            [FormPageEnum.selectPlan]: false,
          },
        });
        changePage(FormPageEnum.addOns);
      } else {
        setErrors({
          ...formState.errors,
          ...{
            [FormPageEnum.selectPlan]: true,
          },
        });
      }
    }
    if (formState.activePage === FormPageEnum.addOns) {
      if (formState.addOnsData && Object.keys(formState.addOnsData).length > 0) {
        changePage(FormPageEnum.summary);
        setErrors({
          ...formState.errors,
          ...{
            [FormPageEnum.addOns]: false,
          },
        });
      } else {
        setErrors({
          ...formState.errors,
          ...{
            [FormPageEnum.addOns]: true,
          },
        });
      }
    }
    if (formState.activePage === FormPageEnum.summary) {
      changePage(FormPageEnum.exit);
    }
  };

  const moveBackwards = () => {
    if (formState.activePage === FormPageEnum.selectPlan) {
      changePage(FormPageEnum.yourInfo);
    }
    if (formState.activePage === FormPageEnum.addOns) {
      changePage(FormPageEnum.selectPlan);
    }
    if (formState.activePage === FormPageEnum.summary) {
      changePage(FormPageEnum.addOns);
    }
  };

  return (
    <Wrapper>
      {formState.activePage !== FormPageEnum.yourInfo && (
        <Button text={'Go Back'} variant={'tertiary'} onClick={moveBackwards}></Button>
      )}
      <Button
        text="Next Step"
        onClick={moveForward}
        variant={formState.activePage === FormPageEnum.summary ? 'secondary' : 'primary'}></Button>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    margin-top: auto;
    border-radius: 1rem;
    justify-content: space-between;
    background-color: ${theme.colors.white};

    & > *:last-child {
      margin-left: auto;
    }

    @media (max-width: 600px) {
      margin-top: 0;
      box-shadow: 0 4px 24px rgba(63, 69, 80, 0.12);
    }
  `}
`;
