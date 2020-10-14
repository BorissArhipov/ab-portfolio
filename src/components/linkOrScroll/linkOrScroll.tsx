import * as React from 'react';

interface LinkOrScrollProps {
    classN?: string;
    scrollTarget?: React.RefObject<HTMLElement>;
    children?: string | React.ReactElement;
    href?: string
}

const LinkOrScroll: React.FC<LinkOrScrollProps> = props => {

    const Tag = props.href ? 'a' : 'button';
    return (
        <Tag 
            className={props.classN}
            href={props.href}
        >
            {props.children}
        </Tag>
    );
};

export default LinkOrScroll;