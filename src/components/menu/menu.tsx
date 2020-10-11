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
   
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header--wrap">
                        <LinkOrScroll
                            classN="header--logo" 
                            scrollTarget={this.props.refs.home}
                        />
                        <nav className="header--nav">
                            <LinkOrScroll 
                                classN="header--link" 
                                scrollTarget={this.props.refs.home}
                            >
                                HOME
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN="header--link" 
                                scrollTarget={this.props.refs.home}
                            >
                                ABOUT
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN="header--link" 
                                scrollTarget={this.props.refs.home}
                            >
                                PORTFOLIO
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN="header--link" 
                                scrollTarget={this.props.refs.home}
                            >
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