const initialState = {

}

const reducer = (state = initialState, action: {type: string}) => {
    switch (action.type) {

        default:
            return {
                ...state
            };
    }
}

export default reducer;