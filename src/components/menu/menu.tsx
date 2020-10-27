import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';
import { connect } from 'react-redux';
import handleScroll from '../../actions/handleScroll';
import { handleRefs } from '../../types/types';
import { linkReducerProps } from '../../types/types';
import { coLinkReducerProps } from '../../types/types';

import './menu.css';

interface MenuProps {
    refs: {
        home: React.RefObject<HTMLElement>
        about: React.RefObject<HTMLElement>
        portfolio: React.RefObject<HTMLElement>
        contact: React.RefObject<HTMLElement>
    }
    handleScroll?: (offset: number, refs: handleRefs) => {
        type: 'HANDLE_SCROLL',
        payload: {offset: number, refs: handleRefs}
    }
    coLinkReducer: linkReducerProps
}


class Menu extends Component<MenuProps> {

    componentDidMount() {
        const {home, about, portfolio, contact} = this.props.refs;
        window.addEventListener('scroll', () => {
            this.props.handleScroll(window.pageYOffset, {
                home: home.current.offsetTop,
                about: about.current.offsetTop,
                portfolio: portfolio.current.offsetTop,
                contact: contact.current.offsetTop
            })
        });
    }
    
    componentWillUnmount() {
        const {home, about, portfolio, contact} = this.props.refs;
        window.removeEventListener('scroll', () => {
            this.props.handleScroll(window.pageYOffset, {
                home: home.current.offsetTop,
                about: about.current.offsetTop,
                portfolio: portfolio.current.offsetTop,
                contact: contact.current.offsetTop
            })
        });
    }

    render() {
        const {header, home, about, portfolio, contact} = this.props.coLinkReducer;
        return (
            <header className={header}>
                <div className="container">
                    <div className="header--wrap">
                        <LinkOrScroll
                            classN="header--logo" 
                            scrollTarget={this.props.refs.home}
                        />
                        <nav className="header--nav">
                            <LinkOrScroll 
                                classN={home} 
                                scrollTarget={this.props.refs.home}
                            >
                                HOME
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN={about} 
                                scrollTarget={this.props.refs.about}
                            >
                                ABOUT
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN={portfolio} 
                                scrollTarget={this.props.refs.portfolio}
                            >
                                PORTFOLIO
                            </LinkOrScroll>
                            <LinkOrScroll
                                classN={contact}
                                scrollTarget={this.props.refs.contact}
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

function mapStateToProps( {coLinkReducer}: coLinkReducerProps) {
    return {
        coLinkReducer
    }
}

export default connect(mapStateToProps, { handleScroll })(Menu);