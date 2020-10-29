const handleResponse = (answer: string) => {
    return {
        type: 'HANDLE_RESPONSE',
        payload: answer
    };
}

export default handleResponse;