import { useDispatch } from "react-redux";
import {bindActionCreators} from "redux";
import {appActionCreators} from "../../redux/reducers/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(appActionCreators, dispatch);
}