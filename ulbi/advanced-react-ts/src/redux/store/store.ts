import {applyMiddleware, combineReducers, createStore} from 'redux';
import {useSelector as rawUseSelector, TypedUseSelectorHook} from "react-redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from "../reducers";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//типизация стора. Получаем типизация состояния состояния помощью ф-ии getState
//этот тип будет знать о редьюсорах и типах данных с которыми работают редьюсоры
export type RootState = ReturnType<typeof store.getState>;

//получаем тип диспатча нашего стора
export type AppDispatch = typeof store.dispatch;

//типизируем useSelector
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
