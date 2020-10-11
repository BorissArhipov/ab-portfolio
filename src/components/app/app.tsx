import * as React from 'react';
import { Component } from 'react';
import Menu from '../menu/menu';
import Home from '../home/home';
import About from '../about/about';

import './app.css';

class App extends Component {
    
    public home: React.RefObject<HTMLElement>;
    
    constructor(props: any) {
        super(props);
        this.home = React.createRef();
    }
    
    render() {
        return (
            <div>
                <Menu
                    refs={{
                        home: this.home
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
                <section className="about">
                    <div className="container">
                        <About
                            refs={{
                                home: this.home
                            }}
                        />
                    </div>
                </section>    
            </div>
        );
    }
}


export default App;