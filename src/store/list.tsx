import * as types from './types';
interface initStore {
    form:any[]
}
const initialState: initStore = {
    form:[
        {
            name:'甲',
            age:'12',
            tel:'123443244443',
            address:'幸福花园'
        },
        {
            name:'乙',
            age:'24',
            tel:'174667111',
            address:'天上人间'
        }, 
        {
            name:'丙',
            age:'36',
            tel:'119120',
            address:'居无定所'
        }
    ]
}
const itemReducer = function(state = initialState, action:any) :initStore{
    switch (action.type) {
        case types.ADD:
            return { ...state, form:[...state.form,action.payload]};
        case types.DEL:
            return { ...state, form:[...state.form.slice(0,action.idx),...state.form.slice(action.idx)] };
        case types.EDI:
            state.form.splice(action.idx,1,action.payload)
            return { ...state, form:[...state.form]}
        default:
            return state;
    }
}

export default itemReducer;