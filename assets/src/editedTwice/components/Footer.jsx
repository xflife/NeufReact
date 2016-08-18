/**
 * 二次编辑底部 -- 智能组件
 */
//其他的轮子
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//自己造的轮子
//轮子的形状
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
      <div className="selectFooter">
        <div className="contentBox clearfix">
          <p className="pull-left" />
          <div className="pull-right">
            <span className="reSelectBtn">设置本书权限：</span>
            <select name="powers" ref="powers">
              <option value="0">公开</option>
              <option value="1">私密</option>
            </select>
            <span className="makeABookBtn">完成</span>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStoreToProps)(EditedWrap);
