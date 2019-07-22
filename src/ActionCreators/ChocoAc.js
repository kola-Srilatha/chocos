import {
    GET_CHOCOS,GET_BRANDS,GET_CHOCOS_SUCCESS,GET_CHOCOS_FAIL, GET_BRANDS_SUCCESS, GET_BRANDS_FAIL,
     GET_CHOCO_DETAILS,GET_CHOCO_DETAILS_SUCCESS,GET_BRAND_DETAILS,GET_BRAND_DETAILS_SUCCESS
}from "../ActionTypes/ChocoAt";
export  function getChocos(){
    return{type:GET_CHOCOS};
}
export function getBrands(){
    return{type:GET_BRANDS};
}

export  function getSuccess(chocolates){
    return{type:GET_CHOCOS_SUCCESS,chocolates};
}
export function getFail(error)
{
    return{type:GET_CHOCOS_FAIL,error};
}
export function getBrandsSuccess(brands){
    return{type:GET_BRANDS_SUCCESS,brands};
}
export function getBrandsFail(error){
    return{type:GET_BRANDS_FAIL,error};
    }

    export function getChocoDetailsAC(id){
        return{type:GET_CHOCO_DETAILS,id};
    }
    export function getChocoDetailsSuccess(ChocoDetails){
    
        return {type:GET_CHOCO_DETAILS_SUCCESS,ChocoDetails}
    }
    export function getBrandDetailsAC(id){
        return{type:GET_BRAND_DETAILS,id};
    }
    export function getBrandDetailsSuccess(BrandDetails){
    
        return {type:GET_BRAND_DETAILS_SUCCESS,BrandDetails}
    }
    