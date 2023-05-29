import { FormActions } from '../provider/actions.ts';
import { AddOnsData, FormDataType, inputFieldsType, PlanDataType } from './componentsProps.ts';

export const FormPageEnum = {
  yourInfo: 'YOUR INFO',
  selectPlan: 'SELECT PLAN',
  addOns: 'ADD ONS',
  summary: 'SUMMARY',
  exit: 'EXIT',
} as const;

export type pagesEnum = (typeof FormPageEnum)[keyof typeof FormPageEnum];

type ErrorsType = {
  [FormPageEnum.yourInfo]: Array<inputFieldsType>;
  [FormPageEnum.selectPlan]: boolean;
  [FormPageEnum.addOns]: boolean;
};

export type FormStateType = {
  activePage: pagesEnum;
  formData: FormDataType;
  planData?: Partial<PlanDataType>;
  addOnsData?: AddOnsData;
  errors: ErrorsType;
};

export type MapPayload = {
  [FormActions.changePage]: pagesEnum;
  [FormActions.setFormData]: FormDataType;
  [FormActions.setPlanData]: Partial<PlanDataType>;
  [FormActions.setAddOnsData]: AddOnsData;
  [FormActions.setErrors]: ErrorsType;
};

export type ActionMap<M extends Record<(typeof FormActions)[keyof typeof FormActions], MapPayload[keyof MapPayload]>> =
  {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };

export type FilterActions = ActionMap<MapPayload>[keyof ActionMap<MapPayload>];

export type FormContextType = {
  formState: FormStateType;
  changePage: (page: pagesEnum) => void;
  setFormData: (formData: FormDataType) => void;
  setPlanData: (planData: Partial<PlanDataType>) => void;
  setAddOnsData: (addOnsData: AddOnsData) => void;
  setErrors: (errors: ErrorsType) => void;
};
