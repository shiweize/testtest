import request from '../utils/request'

export async function pubtrade (params){
    return request({
        url:'/ebank//dealWebTrade.do',
        method:'post',
        data:{
            source_type:'EBNK',
            ...params
        }
    })
}