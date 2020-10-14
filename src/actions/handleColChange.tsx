const handleColChange = (col: string) => {
    return {
        type: 'HANDLE_COL_CHANGE',
        payload: col
    };
}

export default handleColChange;