import {applyMiddleware, combineReducers, createStore} from 'redux';
import {useSelector as rawUseSelector, TypedUseSelectorHook} from "react-redux";
import thunk from 'redux-thunk';
import reducers from "../reducers";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

//типизация стора. Получаем типизация состояния состояния помощью ф-ии getState
//этот тип будет знать ошибка редьюсорах ии типами данных с которыми работают редьюсоры
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
