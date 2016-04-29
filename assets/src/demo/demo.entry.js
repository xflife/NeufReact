/**
 * 文件说明:
 * 详细描述:
 * 创建者: 陳明峰
 * 创建时间: 16/4/29
 * 变更记录:
 */

import '../library/index'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Demo from './components/Demo.jsx'
import ConfigureStore from '../redux/utils/configureStore'

const store = ConfigureStore(undefined, window.__INITIALSTATE__)
const rootElement = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
      <Demo />
    </Provider>
    , rootElement)