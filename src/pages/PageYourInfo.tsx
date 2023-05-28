import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Input } from '../components/ui';
import { inputEnum, inputFieldsType, inputsType } from '../interfaces';
import { getEntries, isInArray } from '../ulits';

export const PageYourInfo: React.FC = () => {
  const [formData, setFormData] = useState<Record<inputFieldsType, string>>({
    name: '',
    email: '',
    number: '',
  });
  const [errors, setErrors] = useState<Array<inputFieldsType>>([]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, number } = formData;
    if (!name || !email || !number) {
      setErrors(
        getEntries(formData).reduce((previousValue, [name, value]) => {
          if (!value) return [...previousValue, name];
          return previousValue;
        }, [] as Array<inputFieldsType>),
      );
      return;
    }
    setErrors([]);
  };

  const inputHandler = (inputData: { type: (typeof inputEnum)[keyof typeof inputEnum]; value: string }) => {
    const { type, value } = inputData;
    setFormData((prevState) => {
      return {
        ...prevState,
        ...{ [type]: value },
      };
    });
  };

  return (
    <Wrapper>
      <Title>Personal info</Title>
      <Text>Please provide your name, email address, and phone number</Text>
      <Form onSubmit={submitHandler}>
        {(Object.keys(inputEnum) as Array<inputsType>).map((type) => (
          <Input
            name={type}
            value={formData[type]}
            placeholder={`enter your ${type}`}
            error={isInArray(errors, inputEnum[type])}
            onChange={(e) => inputHandler({ type, value: e.target.value })}
          />
        ))}
        <button type="submit"> submit</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;

  flex-direction: column;
`;

const Title = styled('h1')`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.colors.marineBlue};
  `}
`;

const Text = styled('p')`
  ${({ theme }) => css`
    color: ${theme.colors.coolGray};
  `}
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
