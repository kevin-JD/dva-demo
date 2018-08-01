import dva from 'dva';
import { createBrowserHistory as browserHistory } from 'history';
import 'antd/dist/antd.css';
import './index.css';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next store', store.getState());
  return result;
};

const error = store => next => action => {
  try{
    next(action);
  } catch(e) {
    console.log(`error ${e}`);
  }
};

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory(),
  onAction: [logger, error]
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/producs').default);t
require('./models').default.forEach(key => {
  app.model(key.default);
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
