import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { asyncUser } from '../actions';

class UserPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props);
    const { dispatch, asyncUser } = this.props;
    // const { isFetching, error, user } = this.props.user;
    const { error, user } = this.props.user; // isFetching 移到dva-loading处理
    let isFetching = this.props.loading.effects['user/fetch'];

    let data;
    if(error) {
      data = error;
    } else if(isFetching) {
      data = 'loading...';
    } else {
      data = user && user.name;
    }
    return (
      <div>
        <p>{data}</p>
        <p>&nbsp;</p>
        <p><Button type="primary" onClick={()=>asyncUser()}>incr</Button>&nbsp;&nbsp;</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { asyncUser })(UserPage);
