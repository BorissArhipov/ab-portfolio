import * as React from 'react';
import { Component } from 'react';

import './footer.css';

class Footer extends Component {
    componentDidMount() {
        let spinner: HTMLDivElement = document.querySelector('.spinner');
        spinner.classList.add("fadeOut");
        spinner.addEventListener("animationend", (e) => {
            if (e.type === "animationend") {
                spinner.style.display = "none";
            }
        }, false);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer--con">
                        <a href="https://www.linkedin.com/in/boriss-arhipov/" className="footer--link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/BorissArhipov" className="footer--link">
                            GitHub
                        </a>
                        <a href="https://vk.com/id206259387" className="footer--link">
                            VK
                        </a>
                    </div>
                </div>
            </footer>
        );
    }    
}
    

export default Footer;