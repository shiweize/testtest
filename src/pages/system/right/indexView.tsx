import React, { Component } from 'react';
import { Layout } from "antd";
import { connect } from 'dva';
import handler from './handler';
import { ViewComponent, PageContext, Button, FormButtonGroup, SchemaForm } from '@ant-design/pro-skeleton';

class indexView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PageContext viewComponent={this}>
				<SchemaForm layout="normal" editable={true} labelTextAlign="right" labelAlign="left" autoAddColon={true}>
					<Button text="标题">标题</Button>
					<Button text="标题">标题</Button>
					<Button text="标题">标题</Button>
					<FormButtonGroup text="标题" size="default">
						<Button text="标题" disabled={false} onClick={add}>标题</Button>
					</FormButtonGroup>
					<Button text="标题">标题</Button>
					<Button text="标题">标题</Button>
				</SchemaForm>
				<Layout>
					<Layout.Sider collapsedWidth={80} collapsible={false} defaultCollapsed={false} reverseArrow={false} theme="drak" width={200}></Layout.Sider>
					<Layout.Content></Layout.Content>
				</Layout>
			</PageContext>;
  }

}

export default connect(({
  right
}) => ({
  right
}))(indexView);