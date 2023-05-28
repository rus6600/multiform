import React from 'react';
import { FilterActions, FormContextType, FormStateType, pagesEnum } from '../interfaces/providerinterface.ts';
import { FormActions } from './actions.ts';

export const FormContext = React.createContext<FormContextType>({} as FormContextType);

export const GetFormContext = (formState: FormStateType, dispatch: React.Dispatch<FilterActions>): FormContextType => {
  return {
    formState,
    changePage: (payload: pagesEnum) => dispatch({ type: FormActions.changePage, payload }),
  };
};
