import React, { Component } from 'react';
import { connect } from 'dva';
import propTypes from 'prop-types';
import { Button } from 'antd';
import styles from './ProductPage.css';

class ProductPage extends Component {
  constructor() {
    super();
  }
  render() {
    const { products, dispatch } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>结果 {products.counter}</div>
        <div>
          <Button type="primary" onClick={()=>dispatch({type:'products/increment',payload:1})}>incr</Button>
          <Button type="primary" onClick={()=>dispatch({type:'products/asyncDecr',payload:1})}>incr</Button>
          {/* <Button type="primary">incr</Button> */}
          &nbsp;&nbsp;
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

export default connect(mapStateToProps)(ProductPage);
