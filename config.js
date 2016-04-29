/**
 * 文件说明: 配置文件
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

module.exports = {
  // 接口代理配置
  API_PROXY_CONFIG: {
    DEBUG: true,
    ENV: process.env.NODE_ENV || 'development',
    // 接口服务器配置
    API_HOST: process.env.API_HOST || 'http://www.timeface.cn',
    API_PATH: process.env.API_PATH || '/tf',

    changeOrigin: true,
    websockets: false,
    // 本地存储键值
    STORAGE_KEY: {
      TOKEN: 'tf-token',
      UID: 'tf-uid'
    },
    // 测试环境帐号
    TEST_ACCOUNT: {
      TOKEN: '90d3e5e7069bd85700df17cbf59d92a8',
      UID: '407988047842'
    },
    // pathRewrite: 规则重写
    pathRewrite: {

    }
  },
  // 需要裁剪uid的路径
  NEED_CUT_UID_PATH: [

  ]
};