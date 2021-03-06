import * as React from 'react';
import { Component } from 'react';
import LinkOrScroll from '../linkOrScroll/linkOrScroll';
import { connect } from 'react-redux';
import handleResponse from '../../actions/handleResponse';
import clearMessage from '../../actions/clearMessage';

import './about.css';

interface AboutProps {
    refs: {
        contact: {current: HTMLElement}
    }
    handleResponse: (aswer: string) => {
        type: 'HANDLE_RESPONSE',
        payload: string
    }
    clearMessage: () => {
        type: 'CLEAR_MESSAGE'
    }
}

class About extends Component<AboutProps> {

    handleDownload() {
        fetch('https://borissarhipov.me/cv/CV.pdf')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'CV.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                this.props.handleResponse('downloaded');
                setTimeout(this.props.clearMessage, 4000);
            })
            .catch(() => {
                this.props.handleResponse('error');
                setTimeout(this.props.clearMessage, 4000);
            })
    }
    
    render() {
        return (
            <div className="about--wrap">
                <div className="about--upperwrap">
                    <div className="about--imagewrap">
                        <div className="about--img"></div>
                        <div className="about--iconwrap">
                            <LinkOrScroll href="https://www.linkedin.com/in/boriss-arhipov/" classN="about--icon">
                                <i className="fab fa-linkedin-in"></i>
                            </LinkOrScroll>
                            <LinkOrScroll href="https://github.com/BorissArhipov" classN="about--icon">
                                <i className="fab fa-github"></i>
                            </LinkOrScroll>
                            <LinkOrScroll href="https://vk.com/id206259387" classN="about--icon">
                                <i className="fab fa-vk"></i>
                            </LinkOrScroll>
                        </div>
                    </div>
                    <div className="about--titlewrap">
                        <div className="about--smalltext small-text">
                            MY NAME IS BORISS
                        </div>
                        <h3 className="about--title">
                            I will develop a front-end for your projects
                        </h3>
                        <p className="about--text">
                            Two and a half years ago I started my journey as a developer and now I am an Information Technology student in the correspondence course. 
                            I’m soundly approaching a job search and therefore I will be glad to get a job as a front-end developer in your company as a trainee. The main thing for me is the capability to grow as a specialist. I am ready to fully devote myself to work, while following the internal rules of the company.  
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
                        <button 
                            className="about--btn"
                            onClick={() => this.handleDownload()}
                        >
                            <div>
                                <i className="fas fa-download"></i>
                                <span>
                                    DOWNLOAD RESUME
                                </span>
                            </div>
                        </button>
                        <LinkOrScroll 
                            classN="about--btn2"
                            scrollTarget={this.props.refs.contact}
                        >
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
                <div className="about--lowerwrap">
                    <div className="about--experiencewrap">
                        <h3 className="about--subtitle subtitle">
                            Work experience
                        </h3>
                        <div className="about--experience">
                            <div className="about--organization">
                                EDF
                            </div>
                            <div className="about--time">
                                &nbsp;
                            </div>
                            <div className="about--info">
                                <h4 className="about--job">
                                    Machine gunner
                                </h4>
                                <p className="about--date">
                                    2017 - 2019
                                </p>
                                <ul className="about--tipslist">
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Discipline
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Teamwork
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about--experience">
                            <div className="about--organization">
                                Freelance
                            </div>
                            <div className="about--time about--time-black">
                                &nbsp;
                            </div>
                            <div className="about--info">
                                <h4 className="about--job">
                                    Developer
                                </h4>
                                <p className="about--date">
                                    2019 - now
                                </p>
                                <ul className="about--tipslist">
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Front-end
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Wordpress
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                More...
                                            </div>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="about--subtitle subtitle">
                            Education
                        </h3>
                        <div className="about--experience">
                            <div className="about--organization">
                                Synergy<br/> University
                            </div>
                            <div className="about--time">
                                &nbsp;
                            </div>
                            <div className="about--info">
                                <h4 className="about--job">
                                    Student
                                </h4>
                                <p className="about--date">
                                    2019 - now
                                </p>
                                <ul className="about--tipslist">
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Baccalaureus degree
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Cources
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Tests and exams
                                            </div>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about--experience">
                            <div className="about--organization">
                                Self-<br/> education
                            </div>
                            <div className="about--time about--time-black">
                                &nbsp;
                            </div>
                            <div className="about--info">
                                <h4 className="about--job">
                                    Student
                                </h4>
                                <p className="about--date">
                                    2019 - now
                                </p>
                                <ul className="about--tipslist">
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Documentation
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                Books
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                    <div className="about--tipswrap2">
                                            <i className="fas fa-check"></i>
                                            <div className="about--tip">
                                                OSSU
                                            </div>
                                        </div> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about--skillswrap">
                        <h3 className="about--subtitle subtitle">
                            Skills
                        </h3>
                        <div className="about--bar">
                            <span className="about--label">
                                HTML, CSS
                            </span>
                            <span className="about--number">
                                90%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '90%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                JavaScript, TypeScript
                            </span>
                            <span className="about--number">
                                90%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '90%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                React, Redux
                            </span>
                            <span className="about--number">
                                85%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '85%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                OOP, FOP, Algorithms
                            </span>
                            <span className="about--number">
                                80%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '80%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--languagewrap">
                            <div className="about--bar about--bar-circle">
                                <div className="about--number about--number-circle">
                                    85%
                                </div>
                                <div className="about--progress about--progress-circle">
                                    
                                    <div className="about--progress-left">
                                        <div style={{transform: "rotate(130deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                    <div className="about--progress-right">
                                        <div style={{transform: "rotate(180deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                </div>
                                <div className="about--label about--label-circle">
                                    Estonian
                                </div>
                            </div>
                            <div className="about--bar about--bar-circle">
                                <div className="about--number about--number-circle">
                                    85%
                                </div>
                                <div className="about--progress about--progress-circle">
                                    
                                    <div className="about--progress-left">
                                        <div style={{transform: "rotate(130deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                    <div className="about--progress-right">
                                        <div style={{transform: "rotate(180deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                </div>
                                <div className="about--label about--label-circle">
                                    English
                                </div>
                            </div>
                            <div className="about--bar about--bar-circle">
                                <div className="about--number about--number-circle">
                                    95%
                                </div>
                                <div className="about--progress about--progress-circle">
                                    
                                    <div className="about--progress-left">
                                        <div style={{transform: "rotate(162deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                    <div className="about--progress-right">
                                        <div style={{transform: "rotate(180deg)"}} className="about--progress-barcircle">&nbsp;</div>
                                    </div>
                                </div>
                                <div className="about--label about--label-circle">
                                    Russian
                                </div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                Jest, Enzyme
                            </span>
                            <span className="about--number">
                                70%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '70%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                PHP, MySQL, MongoDB
                            </span>
                            <span className="about--number">
                                70%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '70%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                Worldpress, Headless Wordpress, Apollo, GraphQL
                            </span>
                            <span className="about--number">
                                75%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '75%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                        <div className="about--bar">
                            <span className="about--label">
                                IT modeling using IDEF0, IDEF3
                            </span>
                            <span className="about--number">
                                85%
                            </span>
                            <div className="about--progress">
                                <div style={{width: '85%'}} className="about--progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="about--subtitle subtitle">
                    Hobby
                </h3>
                <div className="about--hobbywrap">
                    <div className="about--hobbyitem">
                        <i className="fas fa-dumbbell"></i>
                        <h4 className="about--itemtitle">
                            Sport
                        </h4>
                    </div>
                    <div className="about--hobbyitem">
                        <i className="fas fa-hiking"></i>
                        <h4 className="about--itemtitle">
                            Hiking
                        </h4>
                    </div>
                    <div className="about--hobbyitem">
                        <i className="fas fa-bullseye"></i>
                        <h4 className="about--itemtitle">
                            Shooting
                        </h4>
                    </div>
                    <div className="about--hobbyitem">
                        <i className="fas fa-edit"></i>
                        <h4 className="about--itemtitle">
                            Web Design
                        </h4>
                    </div>
                </div>
            </div>
        );    
    }
};

export default connect(null, { handleResponse, clearMessage })(About);
