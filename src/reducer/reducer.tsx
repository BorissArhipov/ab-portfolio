import { combineReducers } from 'redux';
import linkReducer from './linkReducer';
import portfolioReducer from './portfolioReducer';


const reducer = combineReducers({
    coLinkReducer: linkReducer,
    coPortfolioReducer: portfolioReducer,
});
  
export default reducer;