import { TypedUseSelectorHook, useSelector as _useSelector } from "react-redux";
import { RootState } from "../store";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;