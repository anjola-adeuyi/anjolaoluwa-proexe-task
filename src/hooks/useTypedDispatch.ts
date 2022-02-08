import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export const useTypedDispatch = () => {
  const dispatch: Dispatch = useDispatch();

  return dispatch
};
