import React from 'react';
import { BasePageProps } from '../interfaces';

interface PageAddOns extends BasePageProps {}

export const PageAddOns: React.FC<PageAddOns> = ({ children }) => {
  return <div>PageAddOns</div>;
};
