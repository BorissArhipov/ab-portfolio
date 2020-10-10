import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';

import './menu.css';

interface MenuProps {
    refs: {
        home: {current: HTMLElement}
    }
}

class Menu extends Component<MenuProps> {

    public header: React.RefObject<HTMLElement>;

    constructor(props: any) {
        super(props);
        this.header = React.createRef();
    }
    
    render() {
        return (
            <header ref={this.header} className="header">
                <div className="container">
                    <div className="header--wrap">
                        <LinkOrScroll/>
                        <nav className="header--nav">
                            <LinkOrScroll 
                                scrollTarget={this.props.refs.home}
                            >
                                HOME
                            </LinkOrScroll>
                            <LinkOrScroll
                                scrollTarget={this.props.refs.home}
                            >
                                ABOUT
                            </LinkOrScroll>
                            <LinkOrScroll>
                                PORTFOLIO
                            </LinkOrScroll>
                            <LinkOrScroll>
                                CONTACT
                            </LinkOrScroll>
                        </nav>
                    </div>
                </div>
            </header>
        );    
    }
};

export default Menu;