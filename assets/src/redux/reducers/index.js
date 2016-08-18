/**
 * 文件说明:根reducer
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import {combineReducers} from 'redux';
import {indexQuestionStore} from './indexReaucers';

const rootReducer = combineReducers({
    indexQuestionStore
});
export default rootReducer;
