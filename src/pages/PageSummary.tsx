import React from 'react';
import { BasePageProps } from '../interfaces';

interface PageSummaryProps extends BasePageProps {}

export const PageSummary: React.FC<PageSummaryProps> = ({ children }) => {
  return <div>PageSummary</div>;
};
