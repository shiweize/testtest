import React,{Component} from 'react';
import {connect} from 'dva';

class Users extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>HelloWorld</div>
    )
  }
}
export default connect(({users}) => ({users}))(Users)