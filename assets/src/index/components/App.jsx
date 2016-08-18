import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as indexAction from '../../redux/actions/indexAction.js';
import './../style/index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({},indexAction), props.dispatch);
  }

  componentDidMount() {
    this.actions.indexQuestion();
  }
  render () {
    console.log('this',this.props);
    return (
      <div>Hello world</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);
