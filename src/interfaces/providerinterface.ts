import { FormActions } from '../provider/actions.ts';

export const FormPageEnum = {
  yourInfo: 'YOUR_INFO',
  selectPlan: 'SELECT_PLAN',
  addOns: 'ADD_ONS',
  summary: 'SUMMARY',
} as const;

export type pagesEnum = (typeof FormPageEnum)[keyof typeof FormPageEnum];

export type FormStateType = {
  activePage: pagesEnum;
};

export type MapPayload = {
  [FormActions.changePage]: pagesEnum;
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
};
