import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import handleResponse from '../../actions/handleResponse';
import clearMessage from '../../actions/clearMessage';

import './contact.css';

interface ContactProps {
    handleResponse: (aswer: string) => {
        type: 'HANDLE_RESPONSE',
        payload: string
    }
    clearMessage: () => {
        type: 'CLEAR_MESSAGE'
    }
}

class Contact extends Component<ContactProps> {
    
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const name = ((e.target as HTMLElement).querySelector("#name") as HTMLInputElement);
        const mail = ((e.target as HTMLElement).querySelector("#mail") as HTMLInputElement);
        const text = ((e.target as HTMLElement).querySelector("#text") as HTMLInputElement);
        
        if(!name.value || !mail.value || !text.value) {
            this.props.handleResponse('empty-fields');
            setTimeout(this.props.clearMessage, 4000);
            return;
        }

        if(name.value.length > 30 || mail.value.length > 30  || text.value.length > 400 ) {
            this.props.handleResponse('too-long');
            setTimeout(this.props.clearMessage, 4000);
            return;
        }
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://borissarhipov.me/server/index.php?mail=' + escape(mail.value) + '&name=' + escape(name.value) + '&text=' + escape(text.value));

        xhr.send();

        xhr.onerror = () => {
            this.props.handleResponse('error');
            setTimeout(this.props.clearMessage, 4000);
            return;
        };

        xhr.onload = () => {
            this.props.handleResponse(xhr.responseText);
            setTimeout(this.props.clearMessage, 4000);
            if(xhr.responseText === 'message-sent') {
                name.value = '';
                mail.value = '';
                text.value = '';
            }
        };
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
                        SEND A MESSAGE
                    </button>
                </form>    
            </div>
        );    
    }
};

export default connect(null, { handleResponse, clearMessage } )(Contact);