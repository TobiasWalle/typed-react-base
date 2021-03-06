import { GenericStoreEnhancer, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { epic } from '../modules/root';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

/**
 * Create the store middleware for redux.
 * @return {GenericStoreEnhancer}
 */
export function getStoreMiddleware(history: History): GenericStoreEnhancer {
  const middlewares = [
    // Create middleware for redux-observables
    createEpicMiddleware(epic),
    routerMiddleware(history),
  ];

  return applyMiddleware(...middlewares);
}
