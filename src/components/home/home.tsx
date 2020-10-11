import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';

import './home.css';

interface HomeProps {
    refs: {
        home: {current: HTMLElement}
    }
}

class Home extends Component<HomeProps> {

    render() {
        return (
            <div className="container">
                <div className="home--textwrap">
                    <div className="home--smalltext small-text">
                        NICE TO MEET YOU
                    </div>
                    <h1 className="home--title">
                        Boriss Arhipov
                    </h1>
                    <h2 className="home--subtitle">
                        I'm a <span className="home--span">Front-end developer</span>
                    </h2>
                    <LinkOrScroll
                        classN="home--btn"
                    >
                        HIRE ME
                    </LinkOrScroll>  
                    <LinkOrScroll
                    classN="home--scroll"
                    >
                        <div className="home--scrollwrap">
                            <small>
                                SCROLL
                            </small>
                            <span className="home--scrollicon">
                                <span className="home--scrollicon-outer">
                                    <span className="home--scrollicon-inner">
                                        &nbsp;
                                    </span>
                                </span>
                            </span>    
                        </div>
                    </LinkOrScroll>  
                </div>
            </div>
        );    
    }
};

export default Home;