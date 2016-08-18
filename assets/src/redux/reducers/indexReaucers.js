/**
 * 文件说明: store -- 存储 处理数据js
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import * as ActionsType from '../utils/actionsTypes';
import HttpClient from '../utils/httpClient';


/*
* index
* */
export function indexQuestionStore(state = [], action) {
  switch (action.type) {
    case ActionsType.GET_INCEX_DATA:
      return action.store;
    default:
      return state;
  }
}
