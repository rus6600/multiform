import React from 'react';

export type BasePageProps = {
  children?: React.ReactNode;
};

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

export type inputsType = 'name' | 'email' | 'number';

export const inputEnum: Record<inputsType, inputsType> = {
  name: 'name',
  email: 'email',
  number: 'number',
} as const;

export type inputFieldsType = (typeof inputEnum)[keyof typeof inputEnum];

export type FormDataType = Record<inputFieldsType, string>;

export type plans = 'arcade' | 'advanced' | 'pro';

export const plansEnum: Record<plans, plans> = {
  arcade: 'arcade',
  advanced: 'advanced',
  pro: 'pro',
} as const;

export type plansType = { name: plans; monthly: number; yearly: number; logo: string };

export type timePlan = 'monthly' | 'yearly';

export const timePlanEnum: Record<timePlan, timePlan> = {
  monthly: 'monthly',
  yearly: 'yearly',
};

export type PlanDataType = {
  plan: plans;
  timePlan: timePlan;
  price: number;
};

export type addOns = 'online service' | 'larger storage' | 'customizable profile';

export type addOnsType = Array<{ name: addOns; text: string; monthly: number; yearly: number }>;

export type AddOnsData = { [K in addOns]?: number };
