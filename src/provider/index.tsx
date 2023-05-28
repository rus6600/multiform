import React, { useReducer } from 'react';

import { BasePageProps } from '../interfaces';
import { FormReducer, FormState } from './reducer.ts';
import { FormContext, GetFormContext } from './context.ts';

export const Provider: React.FC<BasePageProps> = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, FormState);

  return <FormContext.Provider value={GetFormContext(state, dispatch)}>{children}</FormContext.Provider>;
};
