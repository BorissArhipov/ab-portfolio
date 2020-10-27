import * as React from 'react';

interface LinkOrScrollProps {
    classN?: string;
    scrollTarget?: React.RefObject<HTMLElement>;
    children?: string | React.ReactElement;
    href?: string
}

const LinkOrScroll: React.FC<LinkOrScrollProps> = props => {

    const Tag = props.href ? 'a' : 'button';

    const handleClick = () => {
        if(!props.scrollTarget) {
            return;
        }

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

export default LinkOrScroll;