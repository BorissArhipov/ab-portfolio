import * as React from 'react';

import './footer.css';

const Footer: React.FC = () => {
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

export default Footer;