import * as React from 'react';
import { Component } from 'react';

import './contact.css';

class Contact extends Component {

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('submit');
    }
    
    render() {
        return (
            <div className="constact--con">
                <form className="contact--form" onSubmit={e => this.handleSubmit(e)}>
                    <div className="contact--smalltext small-text">
                        I DRINK COFFEE BLACK AS PITCH AND HOT AS HELL
                    </div>
                    <h3 className="contact--title">
                        Get in touch with me
                    </h3>
                    <div className="contact--infocon">
                        <i className="fas fa-envelope"></i>
                        <p className="contact--infotext">
                            contact@borissarhipov.me
                        </p>
                    </div>
                    <div className="contact--infocon">
                        <i className="fab fa-linkedin"></i>
                        <p className="contact--infotext">
                            linkedin.com/in/boriss-arhipov
                        </p>
                    </div>
                    <div className="contact--inputcon">
                        <div className="contact--inputcon2">
                            <input type="text" placeholder="Name" className="contact--input1 contact--input"/>  
                            <div className="contact--border1 contact--border"></div>  
                        </div>
                        <div className="contact--inputcon2">
                            <input type="text" placeholder="E-mail" className="contact--input2 contact--input"/>  
                            <div className="contact--border2 contact--border"></div>   
                        </div>
                    </div>
                    <textarea placeholder="Message..." className="contact--textarea"></textarea>
                    <div className="contact--border3 contact--border"></div>  
                    <button className="contact--btn" type="submit">
                        SEND MESSAGE
                    </button>
                </form>    
            </div>
        );    
    }
};

export default Contact;