import React from 'react';

import { FilterActions, FormContextType, FormStateType } from '../interfaces';
import { FormActions } from './actions.ts';

export const FormContext = React.createContext<FormContextType>({} as FormContextType);

export const GetFormContext = (formState: FormStateType, dispatch: React.Dispatch<FilterActions>): FormContextType => {
  return {
    formState,
    changePage: (payload) => dispatch({ type: FormActions.changePage, payload }),
    setFormData: (payload) => dispatch({ type: FormActions.setFormData, payload }),
    setPlanData: (payload) => dispatch({ type: FormActions.setPlanData, payload }),
    setAddOnsData: (payload) => dispatch({ type: FormActions.setAddOnsData, payload }),
    setErrors: (payload) => dispatch({ type: FormActions.setErrors, payload }),
  };
};
