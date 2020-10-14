import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';
import { itemsTypes } from '../../types/types';
import handleColChange from '../../actions/handleColChange';
import { connect } from 'react-redux';
import {coPortfolioReducerProps} from '../../types/types';
import {portfolioReducerProps} from '../../types/types';

import './portfolio.css';

interface portfolioProps {
    handleColChange: (col: string) => {
        type: 'HANDLE_COL_CHANGE',
        payload: string
    }
    coPortfolioReducer: portfolioReducerProps
}

class Portfolio extends Component<portfolioProps> {
    render() {
        const items: itemsTypes["items"] = [
            {
                key: 1,
                collection: 'pet',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                href: '#'
            },
            {
                key: 2,
                collection: 'pet',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                href: '#'
            },
            {
                key: 3,
                collection: 'free',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                href: '#'
            },
            {
                key: 4,
                collection: 'pet',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                href: '#'
            },
            {
                key: 5,
                collection: 'free',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                href: '#'
            },
        ];
        const {col, all, pet, free} = this.props.coPortfolioReducer;
        return (
            <div className="portfolio--wrap">
                <div className="portfolio--smalltext small-text">
                    EAT, SLEEP, CODE, REPEAT
                </div>
                <h2 className="portfolio--title">
                    My projects
                </h2>
                <div className="portfolio--btnwrap">
                    <button
                        onClick={ () => this.props.handleColChange('all')}
                        className={all}
                    >
                        ALL
                    </button>
                    <button
                        onClick={ () => this.props.handleColChange('pet')}
                        className={pet}
                    >
                        PET
                    </button>
                    <button
                        onClick={ () => this.props.handleColChange('free')}
                        className={free}
                    >
                        LATEST FREELANCE
                    </button>
                </div>
                <ul className="portfolio--projects">
                    {
                        items.map(item => {
                            if(col === 'all' || item.collection === col) {
                                return (
                                    <li
                                        key={item.key}
                                    >
                                        <h3>
                                            {item.key}
                                        </h3>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );    
    }
};

function mapStateToProps( {coPortfolioReducer}: coPortfolioReducerProps) {
    return {
        coPortfolioReducer
    }
}

export default connect(mapStateToProps, { handleColChange })(Portfolio);