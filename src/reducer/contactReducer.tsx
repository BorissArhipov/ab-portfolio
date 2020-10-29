import { contactReducerProps } from '../types/types';

const initialState: contactReducerProps = {
    message: null,
    color: null
}

const contactReducer = (state = initialState, action: {type: string, payload?: any}) => {
    switch (action.type) {
        case 'HANDLE_RESPONSE':
            if(action.payload === 'error') {
                return {
                    ...state,
                    message: 'Something went wrong! Please try again later.',
                    color: '#ff3c37'
                };  
            }

            if(action.payload === 'wrong-server') {
                return {
                    ...state,
                    message: 'You are not allowed to use this server.',
                    color: '#ff3c37'
                };  
            }

            if(action.payload === 'empty-fields') {
                return {
                    ...state,
                    message: 'All fields are required.',
                    color: '#a27e0f'
                };  
            }

            if(action.payload === 'too-long') {
                return {
                    ...state,
                    message: 'You entered the value that is too long.',
                    color: '#a27e0f'
                };  
            }

            if(action.payload === 'message-sent') {
                return {
                    ...state,
                    message: 'Your message was successfully sent.',
                    color: '#2e811e'
                };  
            }

            if(action.payload === 'downloaded') {
                return {
                    ...state,
                    message: 'CV has successfully downloaded',
                    color: '#2e811e'
                };  
            }
        
            return {
                ...state
            };
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                message: null,
                color: null
            };

        default:
            return {
                ...state
            };
    }
}

export default contactReducer;