import * as React from 'react';
import { connect } from 'react-redux';
import itemsFunc from '../portolioItems/portfolioItems';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';
import {coPortfolioReducerProps} from '../../types/types';
import {portfolioReducerProps} from '../../types/types';

interface PortfolioListProps {
    coPortfolioReducer: portfolioReducerProps
}

const PortfolioList: React.FC<PortfolioListProps> = (props) => {
    const items = itemsFunc();
    const { col } = props.coPortfolioReducer;
    return (
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
                                    style={{backgroundImage: `url(${item.img}`}}
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
    );
}

function mapStateToProps( {coPortfolioReducer}: coPortfolioReducerProps) {
    return {
        coPortfolioReducer
    }
}

export default connect(mapStateToProps)(PortfolioList)