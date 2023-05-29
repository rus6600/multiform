import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';
import { FormPageEnum } from '../interfaces';
import { PageSelectPlan } from '../pages/PageSelectPlan.tsx';
import { PageYourInfo } from '../pages/PageYourInfo.tsx';
import { PageAddOns } from '../pages/PageAddOns.tsx';
import { PageSummary } from '../pages/PageSummary.tsx';

export const usePageSelect = (): React.FC => {
  const {
    formState: { activePage },
  } = useContext(FormContext);
  if (FormPageEnum.selectPlan === activePage) return PageSelectPlan;
  if (FormPageEnum.addOns === activePage) return PageAddOns;
  if (FormPageEnum.summary === activePage) return PageSummary;
  return PageYourInfo;
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const getEntries = <T extends Record<any, any>>(obj: T) => Object.entries(obj) as Entries<T>;

export const isInArray = <T extends U, U>(arr: ReadonlyArray<T>, el: U): el is T => {
  return arr.includes(el as T);
};

export const removeKey = <T>(key: keyof T, { [key]: _, ...rest }: T) => rest;
