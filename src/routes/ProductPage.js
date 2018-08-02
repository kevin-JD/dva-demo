import React, { Component } from 'react';
import { connect } from 'dva';
import propTypes from 'prop-types';
import { Button } from 'antd';
import styles from './ProductPage.css';
import { increment, asyncDecr } from '../actions';

class ProductPage extends Component {
  constructor(props, context) {
    console.log(props);
    super();
  }
  render() {
    const { products, dispatch, increment, asyncDecr } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>结果 {products.counter}</div>
        <div>
          <p className={styles['p-wrapper']}>
            <Button type="primary" onClick={()=>dispatch({type:'products/increment',payload:1})}>incr</Button>&nbsp;&nbsp;
            <Button type="primary" onClick={()=>dispatch({type:'products/asyncDecr',payload:1})}>incr</Button>
          </p>
          <p className={styles['p-wrapper']}>
            <Button type="primary" onClick={()=>increment()}>increment</Button>&nbsp;&nbsp;
            <Button type="primary" onClick={()=>asyncDecr()}>asyncDecr</Button>
          </p>
          <Button type="primary">decr</Button>
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  counter: propTypes.object
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { increment, asyncDecr })(ProductPage);
