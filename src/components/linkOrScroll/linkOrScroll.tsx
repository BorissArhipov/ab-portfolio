import * as React from 'react';
import { connect } from 'react-redux';
import closeBurger from '../../actions/closeBurger';

interface LinkOrScrollProps {
    classN?: string;
    scrollTarget?: React.RefObject<HTMLElement>;
    children?: string | React.ReactElement;
    href?: string;
    closeBurger?: () => {
        type: 'CLOSE_BURGER'
    }
}

const LinkOrScroll: React.FC<LinkOrScrollProps> = props => {

    const Tag = props.href ? 'a' : 'button';

    const handleClick = () => {
        if(!props.scrollTarget) {
            return;
        }
        
        props.closeBurger();

        props.scrollTarget.current.scrollIntoView({ 
            behavior: 'smooth' 
        });

    }

    return (
        <Tag 
            className={props.classN}
            href={props.href}
            onClick={() => handleClick()}
        >
            {props.children}
        </Tag>
    );
};

export default connect(null, { closeBurger })(LinkOrScroll);