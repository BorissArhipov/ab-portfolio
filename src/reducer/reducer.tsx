import { combineReducers } from 'redux';
import linkReducer from './linkReducer';
import portfolioReducer from './portfolioReducer';
import contactReducer from './contactReducer';


const reducer = combineReducers({
    coLinkReducer: linkReducer,
    coPortfolioReducer: portfolioReducer,
    coContactReducer: contactReducer
});
  
export default reducer;