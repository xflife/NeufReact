/**
 * 文件说明: 路径拦截器
 * 详细描述: 添加接口请求baseUrl
 * 创建者: 陈明峰
 * 创建时间: 2016/8/12
 * 变更记录:
 */
import Config from '../../../../config';
import ls from 'local-storage';
let Cookies = require('cookies-js');

export default {
  request: (config) => {
    //获取token和uid,调试模式下获取测试帐号
    // const tfToken = Cookies.get ? (Cookies.get(Config.API_PROXY_CONFIG.STORAGE_KEY.TOKEN) || (Config.API_PROXY_CONFIG.DEBUG ? Config.API_PROXY_CONFIG.TEST_ACCOUNT.TOKEN : null)) : (Config.API_PROXY_CONFIG.DEBUG ? Config.API_PROXY_CONFIG.TEST_ACCOUNT.TOKEN : null);
    // const tfUid = Cookies.get ? (Cookies.get(Config.API_PROXY_CONFIG.STORAGE_KEY.UID) || (Config.API_PROXY_CONFIG.DEBUG ? Config.API_PROXY_CONFIG.TEST_ACCOUNT.UID : null)) : (Config.API_PROXY_CONFIG.DEBUG ? Config.API_PROXY_CONFIG.TEST_ACCOUNT.UID : null);
    if (!config.headers) {
      config.headers = {};
    }
    const tfToken = Cookies('tf-token');
    const tfUid = Cookies('tf-uid');

    // 如果headers中已有tf-token和tf-uid,则不再覆盖
    if (tfToken && tfUid && !config.headers['tf-token'] && !config.headers['tf-uid']) {
      Object.assign(config.headers, {
        'tf-token': tfToken,
        'tf-uid': tfUid
      });
    }
    return config;
  }
};
