'use client';

import { Provider } from 'react-redux';
import { store } from './store'; // Правильний імпорт store

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
