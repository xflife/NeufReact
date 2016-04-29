/**
 * 文件说明: 路径拦截器
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

import Config from '../../../../config';

export default {
  request: (config) => {
//正则表达式含义： 排除后缀为.html | 排除前缀为http: https:
    if (!/.+(?=\.html$)/.test(config.url) && !/^(?=(http\:|https\:)).*/.test(config.url)) {
      config.url = Config.API_PROXY_CONFIG.API_PATH + config.url;
    }
    return config;
  }
};