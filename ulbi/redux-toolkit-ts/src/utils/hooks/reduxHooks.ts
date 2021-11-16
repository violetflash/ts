import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchT, RootStateT} from "../../redux";

export const useAppDispatch = () => useDispatch<AppDispatchT>();

export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;