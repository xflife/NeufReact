/**
 * 文件说明: actions -- dispatch 分发的js
 * 详细描述:
 * 创建者:   陈明峰
 * 创建时间: 2016/8/05
 * 变更记录:
 */

import * as Types from '../utils/actionsTypes.js';
import * as Apis from '../../../../api/indexApi.js';

// index
export function indexQuestion(data) {
  return (dispatch) => {
    Apis.indexQuestion(data)
      .then((res)=> {
        dispatch({
          type: Types.GET_INCEX_DATA,
          store: res.data
        });
      }, (err)=> {
        dispatch({
          type: Types.ERROR_MESSAGE
        });
      })
  }

}
