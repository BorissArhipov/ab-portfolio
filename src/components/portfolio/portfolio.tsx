import * as React from 'react';
import { Component } from 'react';
import handleColChange from '../../actions/handleColChange';
import { connect } from 'react-redux';
import {coPortfolioReducerProps} from '../../types/types';
import {portfolioReducerProps} from '../../types/types';
import PortfolioList from '../portfolioList/portfolioList';


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
        const {all, pet, free} = this.props.coPortfolioReducer;
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
                <PortfolioList/>
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