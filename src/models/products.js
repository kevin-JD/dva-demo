import { delay } from 'dva/saga';

export default {
  namespace: 'products',
  state: {
    counter: 1,
  },
  effects: {
    *asyncDecr({ payload }, { call, put }) {
      yield call(delay, 1000);
      yield put({type: 'decrement' });
    }
  },
  reducers: {
    'increment'(state, action) {
      return {
        counter: state.counter + 1
      }
    },
    'decrement'(state, action) {
      return {
        counter: state.counter - 1
      }
    }
  }
}
