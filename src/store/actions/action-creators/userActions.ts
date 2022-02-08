import axios from "axios";
import { Dispatch } from "redux";

import { Action } from "..";
import { AddedUser, User } from "../../../models/userModel";
import ActionType from "../action-types";

const url = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_USER_REQUEST
    });

    const { data } = await axios.get<User[]>(url);

    dispatch({
      type: ActionType.GET_USER_SUCCESS,
      payload: data,
    })
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_USER_FAIL,
      payload: error.message 
    })
  }
}

export const AddUser = (values: AddedUser): Action => ({
  type: ActionType.ADD_USER,
  payload: values
})