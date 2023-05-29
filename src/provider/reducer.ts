import { FormActions } from './actions.ts';
import { FilterActions, FormPageEnum, FormStateType, timePlanEnum } from '../interfaces';

export const FormState: FormStateType = {
  activePage: FormPageEnum.yourInfo,
  planData: { timePlan: timePlanEnum.monthly },
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
    default:
      return FormState;
  }
};
