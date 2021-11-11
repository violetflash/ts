import { useDispatch } from "react-redux";
import {bindActionCreators} from "redux";
import { ActionCreators } from '../../store/action-creators/';

//связываем все экшн-креэйторы с диспатчем
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
};
