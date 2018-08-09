import { createAction } from 'redux-actions';

export const increment = createAction('products/increment');
export const decrement = createAction('products/decrement');
export const asyncDecr = createAction('products/asyncDecr');

export const asyncUser = createAction('user/fetch');
