import { AddedUser, EditedUser, User } from "../../models/userModel";
import ActionType from "./action-types";

interface GetUserRequestAction {
  type: ActionType.GET_USER_REQUEST;
}

interface GetUserSuccessAction {
  type: ActionType.GET_USER_SUCCESS;
  payload: User[]
}

interface GetUserFailAction {
  type: ActionType.GET_USER_FAIL;
  payload: string;
}

interface AddUser {
  type: ActionType.ADD_USER;
  payload: AddedUser
}

interface EditUser {
  type: ActionType.EDIT_USER;
  payload: {
    id: number,
    values: EditedUser,
  }
}

interface DeleteUser {
  type: ActionType.DELETE_USER;
  payload: number
}

export type Action = 
  | GetUserRequestAction 
  | GetUserSuccessAction 
  | GetUserFailAction
  | AddUser
  | EditUser
  | DeleteUser
