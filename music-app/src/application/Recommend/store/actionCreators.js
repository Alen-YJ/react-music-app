import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data)=>({
    type:actionTypes.CHANGE_BANNER,
    data:fromJS(data)
})

export const changeRecommendList = (data)=>({
    type:actionTypes.CHANGE_RECOMMEND_LIST,
    data:fromJS(data)
})

export const changeLoading = (data)=>({
    type:actionTypes.CHANGE_LOADING,
    data:data
})

export const getBannerList = ()=>{
    return (dispatch)=>{
        getBannerRequest().then(data=>{
            dispatch(changeBannerList(data.banners))
        }).catch(()=>{
            console.error('轮播图数据传输错误')
        })
    }
}

export const getRecommendList = ()=>{
    return (dispatch)=>{
        dispatch(changeLoading(true))
        getRecommendListRequest().then(data=>{
            dispatch(changeRecommendList(data.result))
            dispatch(changeLoading(false))
        }).catch(()=>{
            console.error('推荐歌单数据传输错误')
        })
    }
}