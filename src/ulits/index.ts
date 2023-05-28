import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';
import { FormPageEnum } from '../interfaces/providerinterface.ts';
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
