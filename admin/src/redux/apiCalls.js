import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requetMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, 
  deleteProductStart, 
  deleteProductSuccess,
   getProductFailure, 
   getProductStart, 
   getProductSuccess, 
   updateProductFailure, 
   updateProductStart,
   updateProductSuccess
  } from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data))
  } catch(err){
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data.data))
  } catch(err){
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id))
  } catch(err){
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data.data))
  } catch(err){
    dispatch(addProductFailure());
  }
};