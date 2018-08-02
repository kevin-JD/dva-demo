import { delay } from 'dva/saga';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';

export default {
  namespace: 'products',
  state: {
    counter: 1,
  },
  effects: {
    *asyncDecr({ payload }, { call, put }) {
      yield call(delay, 1000);
      yield put({type: 'decrement' });
      // yield put( routerRedux.push('/') ); // 路由跳转
      yield put( routerRedux.push({
        pathname: '/',
        search: queryString.stringify({
          from: 'product',
          to: 'home'
        })
      }) ); // 路由跳转
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
