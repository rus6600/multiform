import React from 'react';
import { FormContextType } from '../interfaces/providerinterface.ts';

export const FormContext = React.createContext<FormContextType>({} as FormContextType);
