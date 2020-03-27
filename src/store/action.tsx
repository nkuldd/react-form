import * as types from './types';
// 添加项目
export function addItem(payload:object) {
  return {
    type: types.ADD,
    payload
  };
}
// 删除项目
export function deleteItem(idx:number) {
  return {
    type: types.DEL,
    idx,
  };
}
//编辑项目
export function editItem(idx:number,payload:object){
    return{
        type:types.EDI,
        idx,
        payload
    }
    

}
