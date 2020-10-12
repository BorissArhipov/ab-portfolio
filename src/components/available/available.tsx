import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';

import './available.css';

interface AvailableProps {
    refs: {
        home: {current: HTMLElement}
    }
}

class Available extends Component<AvailableProps> {

    render() {
        return (
            <div className="available--wrap">
                <small className="available--small small-text">
                    I'M AVAILABLE
                </small>
                <h3 className="available--title">
                    Let's start a project together!
                </h3>
                <LinkOrScroll classN="available--btn">
                    CONTACT ME
                </LinkOrScroll>
            </div>
        );    
    }
};

export default Available;