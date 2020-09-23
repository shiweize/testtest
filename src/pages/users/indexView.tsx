import React, { Component } from 'react';
import { UField, SchemaForm, PageContext, Button } from "@ant-design/pro-skeleton";
import { Layout } from "antd";
import { connect } from 'dva';

class indexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: ''
    };
  }

  a = () => {
    console.log(123);
    return <div>123</div>;
  };

  render() {
    const {
      abc
    } = this.state;
    const column = [{
      title: '123',
      render: (text, record) => {
        return <div>123</div>;
      }
    }];
    return <PageContext viewComponent={this}>
				
				<SchemaForm layout="normal" editable={true} labelTextAlign="right" labelAlign="left" autoAddColon={true}>
					<UField type="Input" label="标签" required={false} editable={true} display={true} allowClear={true} disabled={false} placeholder="请输入" checkable={true}></UField>
					<Button id="71efbdb0-cfec-11ea-964f-e1fcf572c321" text="标题" onClick={this.a}>标题</Button>
					<Button id="71efbdb0-cfec-11ea-964f-e1fcf572c321" text="标题" onClick={this.a}>标题</Button>
					<UField type="Input" label="123" required={false} editable={true} display={true} allowClear={true} disabled={false} placeholder="请输入" checkable={true}></UField>
				</SchemaForm>
			</PageContext>;
  }

}

export default connect(({
  users
}) => ({
  users
}))(Users);