import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, SINGLE_PRODUCT_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    singleProduct:{}
}

 export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, isLoading: true }
        case GET_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, product:payload }
        case SINGLE_PRODUCT_SUCCESS :
            return { ...state, isLoading: false, singleProduct:payload }
        case PRODUCT_FAILURE:
            return { ...state, isLoading: false,isError:true }
        default: return state
    }
}
