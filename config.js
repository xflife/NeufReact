/**
 * 文件说明: 配置文件
 * 详细描述:
 * 创建者: 陈明峰
 * 创建时间: 2016/08/12
 * 变更记录:
 */

module.exports = {
	// 接口代理配置
	API_PROXY_CONFIG: {
		DEBUG: true,
		path: '/tc',
		host: 'http://'+WEBSITE_HOST,
		changeOrigin: true,
		websockets: false,
		// 本地存储键值
		STORAGE_KEY: {
			TOKEN: 'tf-token',
			UID: 'tf-uid'
		},
		// 测试环境帐号
		TEST_ACCOUNT: {
			//TOKEN: '90d3e5e7069bd85700df17cbf59d92a8',
			//UID: '407988047842'
		},
		// pathRewrite: 规则重写
		pathRewrite: {
			//'/oldApi': '/newApi'
		}
	},
	//服务端接口服务器配置
	API_SERVER: {
		host: 'http://'+ WEBSITE_HOST,
		path: '/tc'
	},

	//默认TDK
	TDK: {
		title: '',
		description: '',
		keywords: ''
	},

	// 可以公开访问的路径
	VALID_USER_CENTER_PATH:[],
  // MOCK 数据 开启
  NODE_ENV_MOCK: false,

  // resetCss 标签和地址
  RESE_CSS_URL:'<link href="//cdn.bootcss.com/meyer-reset/2.0/reset.min.css" rel="stylesheet">',
  // 百度统计代码
  BAIDU_CODE: '<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?cfa10242ad04277ae2a1ff2c15508841";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();</script><script>(function(){var b=document.createElement("script");b.src="//push.zhanzhang.baidu.com/push.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})();</script>'
};
