import * as React from 'react';
import { Component } from 'react';
import Menu from '../menu/menu';
import Home from '../home/home';
import About from '../about/about';
import Available from '../available/available';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

import './app.css';

class App extends Component {
    
    public home: React.RefObject<HTMLElement>;
    public about: React.RefObject<HTMLElement>;
    public portfolio: React.RefObject<HTMLElement>;
    public contact: React.RefObject<HTMLElement>;
    
    constructor(props: any) {
        super(props);
        this.home = React.createRef();
        this.about = React.createRef();
        this.portfolio = React.createRef();
        this.contact = React.createRef();
    }
    
    render() {
        return (
            <div>
                <Menu
                    refs={{
                        home: this.home,
                        about: this.about,
                        portfolio: this.portfolio,
                        contact: this.contact
                    }}
                />
                <section className="home" ref={this.home}>
                    <div className="home--wrapper">
                        <div className="container">
                            <Home
                                refs={{
                                    contact: this.contact,
                                    about: this.about
                                }}
                            />
                        </div>    
                    </div>  
                </section>
                <section className="about" ref={this.about}>
                    <div className="container">
                        <About
                            refs={{
                                contact: this.contact
                            }}
                        />
                    </div>
                </section>
                <section className="available">
                    <div className="available--shadow">
                        <div className="container">
                            <Available
                                refs={{
                                    contact: this.contact
                                }}
                            />
                        </div>    
                    </div>
                </section>
                <section className="portfolio" ref={this.portfolio}>
                    <div className="container">
                        <Portfolio/>
                    </div>
                </section>
                <section className="contact" ref={this.contact}>
                    <div className="container">
                        <Contact/>
                    </div>
                </section>  
                <Footer/>  
            </div>
        );
    }
}


export default App;