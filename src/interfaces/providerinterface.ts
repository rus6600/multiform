import { FormActions } from '../provider/actions.ts';
import { AddOnsData, FormDataType, PlanDataType } from './componentsProps.ts';

export const FormPageEnum = {
  yourInfo: 'YOUR INFO',
  selectPlan: 'SELECT PLAN',
  addOns: 'ADD ONS',
  summary: 'SUMMARY',
} as const;

export type pagesEnum = (typeof FormPageEnum)[keyof typeof FormPageEnum];

export type FormStateType = {
  activePage: pagesEnum;
  formData?: FormDataType;
  planData?: PlanDataType;
  addOnsData?: Array<AddOnsData>;
};

export type MapPayload = {
  [FormActions.changePage]: pagesEnum;
  [FormActions.setFormData]: FormDataType;
  [FormActions.setPlanData]: PlanDataType;
  [FormActions.setAddOnsData]: Array<AddOnsData>;
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
  setPlanData: (planData: PlanDataType) => void;
  setAddOnsData: (addOnsData: Array<AddOnsData>) => void;
};
