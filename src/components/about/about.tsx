import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';

import './about.css';

interface AboutProps {
    refs: {
        home: {current: HTMLElement}
    }
}

class About extends Component<AboutProps> {

    render() {
        return (
            <div className="about--wrap">
                <div className="about--upperwrap">
                    <div className="about--imagewrap">
                        <div className="about--img"></div>
                        <div className="about--iconwrap">
                            <LinkOrScroll href="#" classN="about--icon">
                                <i className="fab fa-linkedin-in"></i>
                            </LinkOrScroll>
                            <LinkOrScroll href="#" classN="about--icon">
                                <i className="fab fa-github"></i>
                            </LinkOrScroll>
                            <LinkOrScroll href="#" classN="about--icon">
                                <i className="fab fa-vk"></i>
                            </LinkOrScroll>
                        </div>
                    </div>
                    <div className="about--titlewrap">
                        <div className="about--smalltext small-text">
                            MY NAME IS BORISS
                        </div>
                        <h3 className="about--title">
                            I develop a front-end for your projects
                        </h3>
                        <p className="about--text">
                            Two and a half years ago I started my journey as a developer and now I am a Information Technology student in the correspondence course. 
                            I’m soundly approaching a job search and therefore I will be glad to get a job as a front-end developer in your company as an intern. The main thing for me is the capability to grow as a specialist. I am ready to fully devote myself to work, while following the internal rules of the company.  
                            As a former military man, I have the following qualities:  
                        </p>
                        <div className="about--tipswrap">
                            <div className="about--tipswrap2">
                                <i className="fas fa-check"></i>
                                <div className="about--tip">
                                    Disciplined
                                </div>
                            </div>  
                            <div className="about--tipswrap2">
                                <i className="fas fa-check"></i>
                                <div className="about--tip">
                                    Hardworking
                                </div>
                            </div> 
                            <div className="about--tipswrap2">
                                <i className="fas fa-check"></i>
                                <div className="about--tip">
                                    Purposeful
                                </div>
                            </div> 
                        </div>
                        <div className="about--btnwrap">
                        <LinkOrScroll classN="about--btn">
                            <div>
                                <i className="fas fa-download"></i>
                                <span>
                                    DOWNLOAD RESUME
                                </span>
                            </div>
                        </LinkOrScroll>
                        <LinkOrScroll classN="about--btn2">
                            <div>
                                <i className="fas fa-coffee"></i>
                                <span>
                                    INVITE ME FOR COFFEE
                                </span>
                            </div>
                        </LinkOrScroll>
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
};

export default About;
