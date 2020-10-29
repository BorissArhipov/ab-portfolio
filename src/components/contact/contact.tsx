import * as React from 'react';
import { Component } from 'react';

import './contact.css';

class Contact extends Component {

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const name = ((e.target as HTMLElement).querySelector("#name") as HTMLInputElement).value;
        const mail = ((e.target as HTMLElement).querySelector("#mail") as HTMLInputElement).value;
        const text = ((e.target as HTMLElement).querySelector("#text") as HTMLInputElement).value;
        
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
        });

        xhr.open('GET', 'https://borissarhipov.me/server/index.php?mail=' + mail + '&name=' + name + '&text=' + text);

        xhr.send();
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
                            <input id="name" type="text" placeholder="Name" className="contact--input1 contact--input"/>  
                            <div className="contact--border1 contact--border"></div>  
                        </div>
                        <div className="contact--inputcon2">
                            <input id="mail" type="text" placeholder="E-mail" className="contact--input2 contact--input"/>  
                            <div className="contact--border2 contact--border"></div>   
                        </div>
                    </div>
                    <textarea id="text" placeholder="Message..." className="contact--textarea"></textarea>
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