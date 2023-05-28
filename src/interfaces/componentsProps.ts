import React from 'react';

export type BasePageProps = {
  children?: React.ReactNode;
};

export type inputsType = 'name' | 'email' | 'number';

export const inputEnum: Record<inputsType, inputsType> = {
  name: 'name',
  email: 'email',
  number: 'number',
} as const;

export type inputFieldsType = (typeof inputEnum)[keyof typeof inputEnum];

export type FormDataType = Record<inputFieldsType, string>;
