import { fetchProductsError } from "../slices/productSlice";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    const BASE_URL = 'https://fakestoreapi.com'
    if(action.type === 'api/makeCall'){
        next(action);  // so that it will be visible in actions of dev tools
        const {url, onStart, onSuccess, onError} = action.payload;
        dispatch({
            type: onStart,
        })
        fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type : onSuccess,
                payload: data,
            })
        })
        .catch(() => {
            dispatch({type: onError})
        })
    }
    else{
        next(action);
    }
}