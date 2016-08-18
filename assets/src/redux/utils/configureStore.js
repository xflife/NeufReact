/**
 * 文件说明: 配置reducer 合并服务端过来的数据
 * 详细描述:
 * 创建者:  陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import RootReducer from '../reducers';

module.exports = function (rootReducer = RootReducer, initialState = {}) {
	//const store = createStoreWithMiddleware(rootReducer, initialState);
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(thunk)
		//applyMiddleware(createLogger())
		//window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	return store;
};
