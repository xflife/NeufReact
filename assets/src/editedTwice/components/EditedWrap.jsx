/**
 * 二次编辑页面 -- 智能组件
 */
//其他的轮子
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//自己造的轮子
import Footer from './Footer.jsx';
//轮子的形状
import '../styles/editedTwice.less';
//轮子的背景

/**
 * 需要接收 store
 * @param  {object} store 全部的store
 * @return {Object}  此页面需要接收的store
 */
function mapStoreToProps(store) {
  return store;
}

class EditedWrap extends React.Component {

  constructor(props) {
    super(props);
    // this.actions = bindActionCreators(Object.assign({}), props.dispatch);
  }

  render() {
    return (
      <div>
        二次编辑页面
        <Footer />
      </div>
    )
  }

}

export default connect(mapStoreToProps)(EditedWrap);
