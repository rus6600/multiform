import { FormActions } from './actions.ts';
import { FilterActions, FormPageEnum, FormStateType } from '../interfaces/providerinterface.ts';

export const FormState: FormStateType = {
  activePage: FormPageEnum.yourInfo,
};

export const FormReducer = (FormState: FormStateType, action: FilterActions): FormStateType => {
  switch (action.type) {
    case FormActions.changePage:
      return {
        ...FormState,
        activePage: action.payload,
      };

    default:
      return FormState;
  }
};
