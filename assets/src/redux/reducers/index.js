/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */
/**
 * 文件说明: 根reducer
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */
import { combineReducers } from 'redux'
import { demoStore } from './demoReducers'


const rootReducer = combineReducers({
  demoStore
});

export default rootReducer