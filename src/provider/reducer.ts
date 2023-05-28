import { FormActions } from './actions.ts';
import { FilterActions, FormPageEnum, FormStateType } from '../interfaces';

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
    case FormActions.setFormData:
      return {
        ...FormState,
        formData: action.payload,
      };
    case FormActions.setPlanData:
      return {
        ...FormState,
        planData: action.payload,
      };
    default:
      return FormState;
  }
};
