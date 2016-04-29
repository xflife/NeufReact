/**
 * 文件说明: 请求数据文件
 * 详细描述: 
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

import Q from 'q';
import HttpClient from '../utils/httpClient';
import * as ActionsType from '../utils/ActionsType';

//获得小编信息
export function getEditorInfo(params) {
  let defer = Q.defer();
  return (dispatch) => {
    HttpClient.post('/book/homerecommend', params, {type: 'form'})
        .then((res)=> {
            dispatch({
              type: ActionsType.GET_BOOK_LIST,
              store: res.data
            });
          defer.resolve(res);
        }, (err)=> {
          dispatch({
            type: ActionsType.ERROR_MESSAGE,
            error: err
          });
          defer.reject(err);
        });
    return defer.promise;
  }
}