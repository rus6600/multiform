import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';
import { FormPageEnum } from '../interfaces';
import { PageSelectPlan } from '../pages/PageSelectPlan.tsx';
import { PageYourInfo } from '../pages/PageYourInfo.tsx';
import { PageAddOns } from '../pages/PageAddOns.tsx';
import { PageSummary } from '../pages/PageSummary.tsx';
import { PageExit } from '../pages/PageExit.tsx';

export const usePageSelect = (): React.FC => {
  const {
    formState: { activePage },
  } = useContext(FormContext);
  if (FormPageEnum.selectPlan === activePage) return PageSelectPlan;
  if (FormPageEnum.addOns === activePage) return PageAddOns;
  if (FormPageEnum.summary === activePage) return PageSummary;
  if (FormPageEnum.exit === activePage) return PageExit;

  return PageYourInfo;
};
