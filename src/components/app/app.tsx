import * as React from 'react';
import { Component } from 'react';
import Menu from '../menu/menu';
import Home from '../home/home';
import About from '../about/about';
import Available from '../available/available';

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
                                    home: this.home
                                }}
                            />
                        </div>    
                    </div>  
                </section>
                <section className="about" ref={this.about}>
                    <div className="container">
                        <About
                            refs={{
                                home: this.home
                            }}
                        />
                    </div>
                </section>
                <section className="available">
                    <div className="available--shadow">
                        <div className="container">
                            <Available
                                refs={{
                                    home: this.home
                                }}
                            />
                        </div>    
                    </div>
                </section>
                <section className="portfolio" ref={this.portfolio}>
                
                </section>
                <section className="contact" ref={this.contact}>
                
                </section>    
            </div>
        );
    }
}


export default App;