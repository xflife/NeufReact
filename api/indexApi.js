/**
 * 文件说明: api -- 请求接口js
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import Q from 'q';
import HttpClient from '../assets/src/redux/utils/httpClient';

/*
* index
* */
export function indexQuestion(data) {
  let defer = Q.defer();
  HttpClient.post('/help/getIndexProblem', data)
    .then((res) => {
      defer.resolve(res);
    }, (err)=> {
      defer.reject(err);
    });
  return defer.promise;
}
