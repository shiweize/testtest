
    import React, { Component } from 'react';
    // ===== split 此处注释不能删除 ===== //
    import { Input,Layout } from 'antd';
    // ===== split 此处注释不能删除 ===== //
    import styles from 'indexStyle.less'
    
    class adc extends Component {
        constructor () {
            super();
            this.state = {

            }
        }
        componentDidMount(){

        }

        render() {
            return (
                // ===== split 此处注释不能删除 ===== //
                <div style={{"padding":"20px","margin":"0px","background":"#f5f5f5","overflow":"hidden"}}> 
                    <div style={{"padding":"20px","margin":"0px","background":"#f5f5f5","overflow":"hidden"}}> 
                        这是一个div
                        <Input placeholder={"这是一个输入框"}/> 
                    </div>
                    <Layout style={{"background":"#f5f5f5"}}> 
                        <Layout.Header style={{"minHeight":20,"height":"50px","padding":0}}>  
                        </Layout.Header> 
                    </Layout> 
                </div>
               // ===== split 此处注释不能删除 ===== //
            
            )
        }
    }
    export default adc;