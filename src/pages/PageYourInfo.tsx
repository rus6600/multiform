import React, { useContext } from 'react';
import styled from 'styled-components';

import { Input, PageLayout } from '../components/ui';
import { inputEnum, inputsType } from '../interfaces';
import { FormContext } from '../provider/context.ts';
import { FormPageEnum } from '../interfaces';
import { isInArray } from '../helpers';

export const PageYourInfo: React.FC = () => {
  const { formState, setFormData } = useContext(FormContext);

  const inputHandler = ({ type, value }: { type: (typeof inputEnum)[keyof typeof inputEnum]; value: string }) => {
    setFormData({ ...formState.formData, [type]: value });
  };

  return (
    <PageLayout title="Personal info" text="Please provide your name, email address, and phone number">
      <InputWrapper>
        {(Object.keys(inputEnum) as Array<inputsType>).map((type) => (
          <Input
            key={type}
            name={type}
            type={type}
            value={formState.formData && formState.formData[type]}
            placeholder={`enter your ${type}`}
            error={isInArray(formState.errors[FormPageEnum.yourInfo], type)}
            onChange={(e) => inputHandler({ type, value: e.target.value })}
          />
        ))}
      </InputWrapper>
    </PageLayout>
  );
};

const InputWrapper = styled('div')`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
  background-color: red;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
