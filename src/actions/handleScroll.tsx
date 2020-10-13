import { handleRefs } from '../types/types';

const handleScroll = (offset: number, refs: handleRefs) => {
    return {
        type: 'HANDLE_SCROLL',
        payload: {offset, refs}
    };
}

export default handleScroll;