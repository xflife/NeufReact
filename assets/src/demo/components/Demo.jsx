/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
         hello,demo.
        </div>
    )
  }
}

Demo.propTypes = {};

Demo.defaultProps = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Demo);

