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
                title: 'Tetris',
                collection: 'pet',
                img: '',
                text: `
                    Typescript implementation of the famous game.
                `,
                respon: [
                    'Building up a Typescript project', 
                    'Implementing the OOP',
                    'Implementing the collision check pathern',
                    'Using the HTML Canvas'
                ],
                tehn: ['HTML', 'CSS', 'Typescript', 'Git', 'Webpack'],
                demo: 'https://tetris.borissarhipov.me/',
                git: 'https://github.com/BorissArhipov/tetris-ts'
            },
            {
                key: 2,
                title: 'title',
                collection: 'pet',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                respon: ['', ''],
                tehn: ['heh', 'meh'],
                demo: '#',
                git: '#'
            },
            {
                key: 3,
                title: 'title',
                collection: 'free',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                respon: ['', ''],
                tehn: ['heh', 'meh'],
                demo: '#',
                git: '#'
            },
            {
                key: 4,
                title: 'title',
                collection: 'pet',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                respon: ['', ''],
                tehn: ['heh', 'meh'],
                demo: null,
                git: '#'
            },
            {
                key: 5,
                title: 'title',
                collection: 'free',
                img: '',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto molestias eius ea aut qui soluta nam quidem tempore, voluptatem quo. Delectus ipsam nulla quis nisi officia laborum ab dolorum labore',
                respon: ['', ''],
                tehn: ['heh', 'meh'],
                demo: '#',
                git: '#'
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
                            let demoOrWebpage: React.ReactElement | null = null;
                            let toRepo: React.ReactElement | null = null;
                            let respon: React.ReactElement[] | null = null;
                            let tehn: React.ReactElement[] | null = null;
                            if(item.collection === 'pet' && item.demo != null) {
                                demoOrWebpage = (
                                    <LinkOrScroll
                                        href={item.demo}
                                        classN="portfolio--link"
                                    >
                                        To demo
                                    </LinkOrScroll> 
                                );
                                toRepo = (<LinkOrScroll
                                            href={item.git}
                                            classN="portfolio--link-blue"
                                        >
                                            To repository
                                        </LinkOrScroll>)
                            } else if(item.collection === 'pet' && item.demo === null) {
                                toRepo = (<LinkOrScroll
                                    href={item.git}
                                    classN="portfolio--link-blue"
                                >
                                    To repository
                                </LinkOrScroll>)
                            } else {
                                demoOrWebpage = (
                                    <LinkOrScroll
                                        href={item.demo}
                                        classN="portfolio--link"
                                    >
                                        To webpage
                                    </LinkOrScroll> 
                                );
                            }

                            respon = item.respon.map(resp => {
                                return (
                                    <li key={item.key + resp}>
                                        {resp}
                                    </li>
                                )
                            })

                            tehn = item.tehn.map(teh => {
                                return (
                                    <div key={item.key + teh} className="portfolio--tipswrap">
                                        <i className="fas fa-check"></i>
                                        <div className="about--tip">
                                            {teh}
                                        </div>
                                    </div> 
                                )
                            })

                            if(col === 'all' || item.collection === col) {
                                return (
                                    <li className="portfolio--con"
                                        key={item.key}
                                    >
                                        <div 
                                            className="portfolio--img" 
                                            style={{backgroundImage: `url(${item.img})`}}
                                        ></div>
                                        <div className="portfolio--con2">
                                            <h3 className="portfolio--subtitle subtitle">
                                                {item.title}
                                            </h3>
                                            <p className="portfolio--text">
                                                {item.text}
                                            </p> 
                                            <p className="portfolio--text">
                                                Responsibilities:
                                            </p>
                                            <ul className="portfolio--list">
                                                {respon}
                                            </ul>
                                            <p className="portfolio--text">
                                                Technologies:
                                            </p>
                                            <div className="portfolio--iconcon">
                                                {tehn}
                                            </div>
                                            <div className="portfolio--btncon">
                                                {demoOrWebpage}
                                                {toRepo}
                                            </div> 
                                        </div>
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