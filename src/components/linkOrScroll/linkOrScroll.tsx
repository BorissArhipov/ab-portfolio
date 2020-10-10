import * as React from 'react';

interface LinkOrScrollProps {
    classN?: string;
    scrollTarget?: {current: HTMLElement};
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

        console.log(props.scrollTarget.current.offsetHeight)
    }
    
    return (
        <Tag 
            className={props.classN}
            onClick={scrollToTarget}
        >
            {props.children}
        </Tag>
    );
};

export default LinkOrScroll;