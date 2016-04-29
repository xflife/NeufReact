/**
 * 文件说明: 客户端接口请求代理
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

import request from 'superagent';
import Q from 'q';
import pathInterceptor from './pathInterceptor';


/**
 * 拦截器
 * @type {{request: Array, requestError: Array, response: Array, responseError: Array}}
 */
let interceptors = [pathInterceptor];
//let interceptors = [pathInterceptor, tokenInterceptor];

const serverRequest = (config = {}) => {
  config.headers = config.headers ? config.headers : {};
  //设置content-type
  if (!config.upload) {
    if(config.headers.type !== 'form'){
      Object.assign(config.headers, {
        'Content-Type': 'application/json'
      });
    }
  }
  //如果为服务端请求,构造请求完整路径,防止请求默认的80端口
  const env = process.env.NODE_ENV || 'development';
  let BASE_URL;
  if (env == 'development') {
    // 开发环境,使用正向代理
    BASE_URL = !process.browser ? ('http://127.0.0.1:' + (process.env.PORT || 3030)) : '';
  }else {
    // 非开发环境,使用
    BASE_URL = process.env.API_HOST || '';
  }
  let defer = Q.defer();
  let req = request(config.method, BASE_URL + config.url);
  //
  if (config.upload) {
    const fields = config.data.fields;
    req.attach(config.data.name, config.data.file, config.data.file.name);
    fields.map((field) => {
      req.field(field.name, field.value);
    });
  } else {
    if (/post/i.test(config.method)) {
      req.send(config.data)
    } else {
      req.query(config.params)
    }
  }
  if (config.headers.type === 'form') {
    req.type('form');
    delete config.headers.type;
    delete config.headers['content-type'];
    delete config.headers['Content-Type'];
  }
  // 添加接口超时设置
  if (config.headers.timeout) {
    req.timeout(config.headers.timeout);
  }else {
    req.timeout(30*1000);
  }
  req.set(config.headers || {});
  req.end((error, response) => {
    if (error) {
      defer.reject({code: response.statusCode, data: response.body});
    }
    defer.resolve(response && response.body);
  });
  return defer.promise;
};

function http(option = {}) {
  let chain = [serverRequest, undefined];
  let promise = Q.when(option);
  for (let i = 0, len = interceptors.length; i < len; i++) {
    let interceptor = interceptors[i];
    if (interceptor.request || interceptor.requestError) {
      chain.unshift(interceptor.request, interceptor.requestError);
    }
    if (interceptor.response || interceptor.responseError) {
      chain.push(interceptor.response, interceptor.responseError);
    }
  }

  while (chain.length) {
    let thenFn = chain.shift();
    let rejectFn = chain.shift();

    promise = promise.then(thenFn, rejectFn);
  }
  return promise;
}

function get(url, params={}, headers={}) {
  const config = {
    method: 'GET',
    params,
    url,
    headers
  };
  return http(config);
}

function post(url, data={}, headers={}) {
  const config = {
    method: 'POST',
    url,
    data,
    headers
  };
  return http(config);
}

function upload(url, data={}, headers={}) {
  const config = {
    method: 'POST',
    url,
    data,
    headers,
    upload: true
  };
  return http(config);
}

export default {
  http,
  get,
  post,
  upload,
  interceptors
};
