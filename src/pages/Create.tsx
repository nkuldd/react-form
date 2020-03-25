import React,{Component} from 'react';
import { Form, Input, Button} from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
interface State{
  name:string,
  age:number|string,
  tel:'',
  address:''
}
class Create extends Component<RouteComponentProps,State>{
    constructor(props:any){
        super(props);
        this.state = {
            name:'',
            age:null,
            tel:'',
            address:''                  
        }
        this.handleInputChange = this.handleInputChange.bind(this);//表单改变
       // this.submitForm = this.submitForm.bind(this);//创建
        this.cancelForm = this.cancelForm.bind(this);//取消创建
        this.onFinished = this.onFinished.bind(this);//校验成功跳转
        this.onFinishedFailed = this.onFinishedFailed.bind(this)//校验失败
    }
    handleInputChange(event: any): void {//输入项改变
        const target = event.target;
        const value = target.value;
        const item = target.name;
        const temp = this.state;
        temp[item] =value;
        this.setState(temp)
      }  
  //submitForm(e: any) {//创新新项目
    //console.log(2)
    //const newItem =  this.state;
    //let list =JSON.parse(window.localStorage.getItem('li')) ;
    //list.push(newItem);
   // window.localStorage.setItem('li',JSON.stringify(list));
    //this.props.history.push('/Index');
  //}
  cancelForm(e:any){
      this.props.history.push('/Index')
  }
  onFinished(e:any){
    console.log('success')
    const newItem =  this.state;
    let list =JSON.parse(window.localStorage.getItem('li')) ;
    list.push(newItem);
    window.localStorage.setItem('li',JSON.stringify(list));
    this.props.history.push('/Index');
  }
  onFinishedFailed(e:any){
    console.log('error')
  }
  render():any{
    const layout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
          },
      };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    return (
        <Form {...layout} onFinishFailed={this.onFinishedFailed} onFinish={this.onFinished}>
        <h1 style={{color:'#3399FF',marginLeft:'35%'}}>新建用户信息</h1>
        <Form.Item
          label="名字"
          name="name"          
          rules={[{ required: true, message: '请填写名字!' }]
        }
        >
          <Input onChange={this.handleInputChange} name='name'/>
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请填写年龄!'},{pattern: new RegExp(/^[1-9]\d*$/, "g"),message:'请填写正确年龄'}]}
        >
          <Input onChange={this.handleInputChange} name='age'/>
        </Form.Item>
        <Form.Item
          label="联系方式"
          name="tel"
          rules={[{ required: true, message: '请填写联系方式!'}]}
        >
          <Input onChange={this.handleInputChange} name='tel'/>
        </Form.Item>
        <Form.Item
          label="住址"
          name="address"
          rules={[{ required: true, message: '请填写住址!'}]}
        >
          <Input onChange={this.handleInputChange} name='address'/>
        </Form.Item>  
        <Form.Item {...tailLayout} >
          <Button type="primary" htmlType="submit" /*onClick={this.submitForm}*/>
            保存
          </Button>
          <Button type="primary" danger style={{marginLeft:'50px'}} htmlType="button" onClick={this.cancelForm}>
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }

}

export default withRouter(Create);
    
    
