import * as todoActionCreators from './todos';
import * as userActionCreators from './user';

export const ActionCreators =  {
    ...todoActionCreators,
    ...userActionCreators
}
