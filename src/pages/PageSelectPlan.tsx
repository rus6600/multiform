import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';

export const PageSelectPlan: React.FC = () => {
  const state = useContext(FormContext);
  console.log(state);

  return <div>PageSelectPlan</div>;
};
