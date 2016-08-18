/**
 * 文件说明: 路径拦截器
 * 详细描述: 添加接口请求baseUrl
 * 创建者: 陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import Config from '../../../../config';

export default {
  request: (config) => {
    //正则表达式含义： 排除后缀为.html | 排除前缀为http: https:
    if (!/.+(?=\.html$)/.test(config.url) && !/^(?=(http\:|https\:)).*/.test(config.url)) {
      config.url = Config.API_PROXY_CONFIG.path + config.url;
    }
    return config;
  }
};
