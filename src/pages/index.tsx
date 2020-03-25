import React, { Component } from 'react';
import {Table,Button} from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
interface State {
    page :number,
    formList:any[]
}
class Index extends Component<RouteComponentProps,State>{
    constructor(props:any){
        super(props);
        this.state = {
            page:0,
            formList:[
                {
                    name:'1',
                    age:'12',
                    tel:'123443244443',
                    address:'幸福花园'
                },
                {
                    name:'12',
                    age:'24',
                    tel:'174667111',
                    address:'j天上人间'
                },
            ]                  
        }
        this.createItem = this.createItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
  createItem(event:any){
     this.props.history.push('/create');
     let obj = JSON.stringify(this.state.formList) ;
     window.localStorage.setItem('li',obj)
  }
  editItem(event:any){
      const index = event.target.getAttribute('data-index')
      const page = event.target.getAttribute('data-page')
      console.log('111',page,index)
      const item = this.state.formList[index];
      item.index = index;
      this.props.history.push({
          pathname:'/Edit',
          state:item
      })
  }
  deleteItem(event:any){
      const newList = this.state.formList;
      newList.splice(event.target.getAttribute('data-index'), 1);
      this.setState({
      formList:newList
    });    
    let obj = JSON.stringify(newList) ;
    window.localStorage.setItem('li',obj)
  }
  componentWillMount(){
      let li = window.localStorage.getItem('li');
      let storage = JSON.parse(li);
      console.log('s',storage);
      this.setState({
          formList:storage
      })      
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
    const data = this.state.formList.map((item, index) =>{item.key = item.name;return item} );
    return (
        <div style={{width:'80%'}}>
            <Button type="primary" style={{margin:'2%'}} onClick={this.createItem}>新建项目</Button>
            <Table dataSource={data} columns={columns} pagination={false}/>
        </div>
        
    );
  }

}

export default withRouter(Index);
 