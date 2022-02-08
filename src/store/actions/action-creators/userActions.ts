import axios from "axios";
import { Dispatch } from "redux";

import { Action } from "..";
import { AddedUser, EditedUser, User } from "../../../models/userModel";
import convertTableData from "../../../Util/convertTableData";
import ActionType from "../action-types";

const url = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_USER_REQUEST
    });

    const { data } = await axios.get<User[]>(url);
    
    const convertedData = convertTableData(data);

    dispatch({
      type: ActionType.GET_USER_SUCCESS,
      payload: convertedData,
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

export const EditUser = (id: number, values: EditedUser): Action => ({
  type: ActionType.EDIT_USER,
  payload: {
    id,
    values
  }
})

export const DeleteUser = (id: number): Action => ({
  type: ActionType.DELETE_USER,
  payload: id
})
