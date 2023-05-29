import React, { createElement } from 'react';
import { usePageSelect } from '../hooks';

export const Pages: React.FC = () => {
  return <>{createElement(usePageSelect())}</>;
};
