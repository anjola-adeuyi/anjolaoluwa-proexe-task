import { AddedUser, EditedUser, User } from "../../models/userModel";
import { Action } from "../actions";
import ActionType from "../actions/action-types";

interface UserState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const userReducer = (state: UserState = initialState, action: Action): UserState => {
  switch (action.type) {
    case ActionType.GET_USER_REQUEST:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_USER_FAIL:
      return { loading: false, error: action.payload, data: [] }
    case ActionType.ADD_USER:
      return { loading: false, error: null, data: addUser(state.data, action.payload) }
    case ActionType.EDIT_USER:
      return { loading: false, error: null, data: editUser(state.data, action.payload.id, action.payload.values) }
    case ActionType.DELETE_USER:
      return { loading: false, error: null, data: deleteUser(state.data, action.payload) }
    default:
      return state;
  }
}

export default userReducer;



// helper functions for Typescript type matching and mocking api types and index

const addUser = ( data: User[], values: AddedUser ): User[] => {
  const id = Math.max(0, Math.max(...data.map(({ id }) => id))) + 1;

  let username = "";
  if(!values.username) {
    username = values.name;
  } else {
    username = values.username;
  }

  return [
  { 
    id: id, 
    key: id,
    name: values.name, 
    email: values.email,
    username: username,
    address: {
    street: "",
    suite: "",
    city: "NYC",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  }, ...data ]}


const editUser = ( data: User[], id: number, values: EditedUser, ): User[] => data.map(user => ({
  ...user,
  key: user.id === id ? id : user.id,
  id: user.id === id ? id : user.id,
  email: user.id === id ? values.email : user.email,
  name: user.id === id ? values.name : user.name,
  username: user.id === id ? values.username : user.username,
}))

const deleteUser = (data: User[], id: number): User[] =>
data.filter((user) => user.id !== id);
