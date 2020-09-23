import { pubtrade } from 'services/public'
import { Showerror } from 'utils'

export default {
  namespace:'',

  state:{
    
  },

  subscriptions: {
    setUp({ dispatch,history }) {
      history.listen((location) => {
        
      })
    }
  },

  effects: {
    * qry ({ payload }, { put, call, select }) {
      const data = yield call(pubtrade, payload);
      if(data.RET_CODE=='0000'){
           yield put({
             type:'SAVE_ITEM',
             payload: {
               
             },
           })
      }else{
         Showerror(data.RET_MSG)
      }
    },
  },

  reducers: {
    SAVE_ITEM(state,{ payload }){
      return {
        ...state,
        ...payload
      }
    }
  }
}