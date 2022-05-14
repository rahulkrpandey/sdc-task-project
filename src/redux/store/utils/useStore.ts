//import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { SelectorState, ActionDispatch } from "../Store";

export const useActionDispatch = () => useDispatch<ActionDispatch>();
export const useTypedSelector: TypedUseSelectorHook<SelectorState> =
  useSelector;
