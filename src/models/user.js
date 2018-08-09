import axios from 'axios';

export default {

  namespace: 'user',

  state: {
    isFetching: false,
    error: null,
    user: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(_, { call, put }) {  // eslint-disable-line
      yield put({ type: 'fetch/star' });
      try {
        const user = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({type: 'fetch/success', user: user });
      } catch (e) {
        yield put({ type: 'fetch/error', error: e.message });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    'fetch/star'(state, action) {
      return {
        isFetching: true,
        error: null,
        user: null
      }
    },
    'fetch/success'(state, action) {
      return {
        isFetching: false,
        error: null,
        user: action.user.data[0]
      }
    },
    'fetch/error'(state, action) {
      return {
        isFetching: false,
        error: action.error,
        user: null,
      }
    }
  },

};
