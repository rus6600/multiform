import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';

export const PageSummary: React.FC = () => {
  const test = useContext(FormContext);
  console.log(test);
  return <div>PageSummary</div>;
};
