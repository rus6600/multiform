import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';

export const PageAddOns: React.FC = () => {
  const state = useContext(FormContext);
  console.log(state);
  return <div>PageAddOns</div>;
};
