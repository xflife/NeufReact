/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

import * as ActionsType from '../utils/ActionsType'

export function demoStore( state = null, action) {
  switch (action.type) {
    case ActionsType.GET_BOOK_LIST:
      return action.store
    default:
      return state
  }
}