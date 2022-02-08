import { AddedUser, User } from "../../models/userModel";
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

export type Action = 
  | GetUserRequestAction 
  | GetUserSuccessAction 
  | GetUserFailAction
  | AddUser
