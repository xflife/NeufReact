/**
 * 文件说明: eslint配置文件
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}