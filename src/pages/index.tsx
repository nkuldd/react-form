import React, { Component } from 'react';
import {Table,Button} from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store/store';
import {deleteItem} from '../store/action'
interface Props{
    list:{form:any[]}
  }
interface State {
    formList:any[]
}
class Index extends Component<RouteComponentProps&Props,State>{
    constructor(props:any){
        super(props);
        this.state = {
            formList:this.props.list.form                
        }
        this.createItem = this.createItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
  createItem(event:any){//跳转至新建页
     this.props.history.push('/create');
  }
  editItem(event:any){//跳转至详情修改页
      const index = event.target.getAttribute('data-index')
      const item = this.state.formList[index];
      item.index = index;
      this.props.history.push({
          pathname:'/Edit',
          state:item
      })
  }
  deleteItem(event:any){//删除
      const newList = this.state.formList;
      let idx = event.target.getAttribute('data-index')
      newList.splice(idx, 1);
      this.setState({
      formList:newList
    });    
    store.dispatch(deleteItem(idx))
  }
  render():any{
    const columns = [
        {
            title: '姓名',
            key:'name',
            dataIndex: 'name',            
        },
        {
            title: '年龄',
            key:'age',
            dataIndex: 'age',            
        },
        {
            title: '联系方式',
            key:'tel',
            dataIndex: 'tel',            
        },
        {
            title: '住址',
            key:'address',
            dataIndex: 'address',            
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: 'operation',
            render: (text, record, index) => {
            return <div>
                <Button type='link' data-index={index} onClick={this.editItem}>编辑</Button>
                <Button type='link' danger data-index={index} onClick={this.deleteItem}>删除</Button>
                </div>
            }
        }      

    ]
    //const data = this.state.formList.map((item, index) =>{item.key = item.name;return item} );
    const da = this.state.formList.length===0?[]:this.state.formList.map((item, index) =>{item.key = item.name;return item} );
    return (
        <div style={{width:'80%'}}>
            <Button type="primary" style={{margin:'2%'}} onClick={this.createItem}>新建项目</Button>
            <Table dataSource={da} columns={columns} pagination={false}/>
        </div>
        
    );
  }

}
const mapStateToProps = function(store:any) {
    return {
      list: store.list
    };
  };
      
export default withRouter(connect(mapStateToProps)(Index));   
 