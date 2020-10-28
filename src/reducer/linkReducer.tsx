const initialState = {
    header: 'header',
    home: 'header--link active',
    about: 'header--link',
    portfolio: 'header--link',
    contact: 'header--link',
    burger: 'header--mob'
}

const linkReducer = (state = initialState, action: {type: string, payload?: any}) => {
    switch (action.type) {
        case 'HANDLE_SCROLL':
            if(action.payload.offset < 10) {
                return{
                    ...state,
                    header: 'header',
                    home: 'header--link link--active',
                    about: 'header--link',
                    portfolio: 'header--link',
                    contact: 'header--link'
                }
            }
            if(action.payload.offset > 10 && action.payload.refs.about > action.payload.offset) {
                return {
                    ...state,
                    header: 'header header--black',
                    home: 'header--link link--active',
                    about: 'header--link',
                    portfolio: 'header--link',
                    contact: 'header--link'
                }
            }
            if (
                    action.payload.offset > 10 &&
                    action.payload.refs.about < action.payload.offset &&
                    action.payload.refs.portfolio > action.payload.offset
            ) {
                return {
                    ...state,
                    header: 'header header--black',
                    home: 'header--link',
                    about: 'header--link link--active',
                    portfolio: 'header--link',
                    contact: 'header--link'
                }
            }
            if (
                action.payload.offset > 10 &&
                action.payload.refs.portfolio < action.payload.offset &&
                action.payload.refs.contact > action.payload.offset
            ) {
                return {
                    ...state,
                    header: 'header header--black',
                    home: 'header--link',
                    about: 'header--link',
                    portfolio: 'header--link link--active',
                    contact: 'header--link'
                }
            }
            if (
                action.payload.offset > action.payload.refs.contact
            ) {
                return {
                    ...state,
                    header: 'header header--black',
                    home: 'header--link',
                    about: 'header--link',
                    portfolio: 'header--link',
                    contact: 'header--link link--active'
                }
            }
            return {
                ...state
            }   
        case 'TOGGLE_BURGER':
            if(state.burger === 'header--mob') {
                return {
                    ...state,
                    burger: 'header--mob burger--active'
                }
            }

            if(state.burger === 'header--mob burger--active') {
                return {
                    ...state,
                    burger: 'header--mob'
                }
            }

            return {
                ...state
            }
        
        case 'CLOSE_BURGER':
            
            return {
                ...state,
                burger: 'header--mob'
            }
    

        default:
            return {
                ...state
            };
    }
}

export default linkReducer;