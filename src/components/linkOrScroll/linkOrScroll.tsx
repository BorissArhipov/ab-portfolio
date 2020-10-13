import * as React from 'react';

interface LinkOrScrollProps {
    classN?: string;
    scrollTarget?: React.RefObject<HTMLElement>;
    children?: string | React.ReactElement;
    scrollToTarget?: (target: string) => void;
    href?: string
}

const LinkOrScroll: React.FC<LinkOrScrollProps> = props => {

    const Tag = props.href ? 'a' : 'button';

    const scrollToTarget = () => {
        if(!props.scrollTarget) {
            return;
        }
    }
    
    return (
        <Tag 
            className={props.classN}
            onClick={scrollToTarget}
            href={props.href}
        >
            {props.children}
        </Tag>
    );
};

export default LinkOrScroll;