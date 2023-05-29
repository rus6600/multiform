import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Button, Input, PageLayout } from '../components/ui';
import { FormDataType, inputEnum, inputFieldsType, inputsType } from '../interfaces';
import { getEntries, isInArray } from '../ulits';
import { FormContext } from '../provider/context.ts';
import { FormPageEnum } from '../interfaces';

export const PageYourInfo: React.FC = () => {
  const { changePage, setFormData, formState } = useContext(FormContext);

  const [formData, addFormData] = useState<FormDataType>({
    name: '',
    email: '',
    number: '',
  });
  const [errors, setErrors] = useState<Array<inputFieldsType>>([]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, number } = formData;
    if (!formState.formData && (!name || !email || !number)) {
      setErrors(
        getEntries(formData).reduce((previousValue, [name, value]) => {
          if (!value) return [...previousValue, name];
          return previousValue;
        }, [] as Array<inputFieldsType>),
      );
      return;
    } else {
      setErrors([]);
      !formState.formData && setFormData(formData);
      changePage(FormPageEnum.selectPlan);
    }
  };

  const inputHandler = (inputData: { type: (typeof inputEnum)[keyof typeof inputEnum]; value: string }) => {
    const { type, value } = inputData;
    addFormData((prevState) => {
      return {
        ...prevState,
        ...{ [type]: value },
      };
    });
  };

  return (
    <PageLayout title="Personal info" text="Please provide your name, email address, and phone number">
      <Form onSubmit={submitHandler}>
        {(Object.keys(inputEnum) as Array<inputsType>).map((type) => (
          <Input
            key={type}
            name={type}
            value={(formState.formData && formState.formData[type]) || formData[type]}
            placeholder={`enter your ${type}`}
            error={isInArray(errors, inputEnum[type])}
            onChange={(e) => inputHandler({ type, value: e.target.value })}
          />
        ))}
        <Button text={'Next Step'} type="submit" />
      </Form>
    </PageLayout>
  );
};

const Form = styled('form')`
  display: flex;
  flex-grow: 1;
  margin-top: 2rem;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  & > *:last-child {
    margin-top: auto;
    margin-left: auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
