import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../menu/menu';


class App extends Component {
    
    public home: React.RefObject<HTMLElement>;
    
    constructor(props: any) {
        super(props);
        this.home = React.createRef();
    }
    
    render() {
        return (
            <div>
                <ConnectedMenu
                    refs={{
                        home: this.home
                    }}
                />
                <section className="home" ref={this.home}>
                    <div className="container">
                        hello world
                    </div>
                </section>    
            </div>
            
        );
    }
}

const ConnectedMenu = connect(null, null, null, { forwardRef: true })(Menu);

export default App;