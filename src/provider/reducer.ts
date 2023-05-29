import { FormActions } from './actions.ts';
import { FilterActions, FormPageEnum, FormStateType, timePlanEnum } from '../interfaces';

export const FormState: FormStateType = {
  activePage: FormPageEnum.yourInfo,
  formData: { name: '', email: '', number: '' },
  planData: { timePlan: timePlanEnum.monthly },
  errors: {
    [FormPageEnum.yourInfo]: [],
    [FormPageEnum.selectPlan]: false,
    [FormPageEnum.addOns]: false,
  },
};

export const FormReducer = (FormState: FormStateType, action: FilterActions): FormStateType => {
  const { type, payload } = action;
  switch (type) {
    case FormActions.changePage:
      return {
        ...FormState,
        activePage: payload,
      };
    case FormActions.setFormData:
      return {
        ...FormState,
        formData: payload,
      };
    case FormActions.setPlanData:
      return {
        ...FormState,
        planData: payload,
      };
    case FormActions.setAddOnsData:
      return {
        ...FormState,
        addOnsData: payload,
      };
    case FormActions.setErrors:
      return {
        ...FormState,
        errors: payload,
      };
    default:
      return FormState;
  }
};
