import React from 'react'

const productReducer = () => {
    switch (action) {
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            };
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            }
        case "MY_API_DATA":
            const Men_data=action.payload.filter((currElem)=>{
                return currElem[0];
            })
            const Women_data=action.payload.filter((currElem)=>{
                return currElem[1];
            })
            const Kids_data=action.payload.filter((currElem)=>{
                return currElem[2];
            })
            return{
                products:action.payload,
                Men:Men_data,
                Women:Women_data,
                Kids:Kids_data,
            }
        default:
            return state;
    }
}

export default productReducer
