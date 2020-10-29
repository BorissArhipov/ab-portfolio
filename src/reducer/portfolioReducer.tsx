import { portfolioReducerProps } from '../types/types';

const initialState: portfolioReducerProps = {
    col: 'all',
    all: 'portfolio--btn portfolio--btn-active',
    pet: 'portfolio--btn',
    free: 'portfolio--btn'
}

const portfolioReducer = (state = initialState, action: {type: string, payload?: any}) => {
    switch (action.type) {
        case 'HANDLE_COL_CHANGE':
            if(action.payload === state.col) {
                return {
                    ...state
                }
            }
            if(action.payload === 'all') {
                return {
                    ...state,
                    col: 'all',
                    all: 'portfolio--btn portfolio--btn-active',
                    pet: 'portfolio--btn',
                    free: 'portfolio--btn'
                }
            }
            if(action.payload === 'pet') {
                return {
                    ...state,
                    col: 'pet',
                    all: 'portfolio--btn',
                    pet: 'portfolio--btn portfolio--btn-active',
                    free: 'portfolio--btn'
                }
            }
            if(action.payload === 'free') {
                return {
                    ...state,
                    col: 'free',
                    all: 'portfolio--btn',
                    pet: 'portfolio--btn',
                    free: 'portfolio--btn portfolio--btn-active'
                }
            }
            return {
                ...state
            }
        default:
            return {
                ...state
            };
    }
}

export default portfolioReducer;