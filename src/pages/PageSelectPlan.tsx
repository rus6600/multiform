import React, { useContext } from 'react';
import { FormContext } from '../provider/context.ts';
import { PageLayout, Switch } from '../components/ui';

export const PageSelectPlan: React.FC = () => {
  const state = useContext(FormContext);
  console.log(state);

  return (
    <PageLayout title="Select your plan" text="You have the option of monthly of yearly billinpg">
      <Switch />
    </PageLayout>
  );
};
