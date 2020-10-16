import { itemsTypes } from '../../types/types';

const itemsFunc = () => {
    const tetris = require('../../img/tetris.jpg');
    const portfolio = require('../../img/portfolio.jpg');
    const sweet = require('../../img/sweet.jpg');

    const items: itemsTypes["items"] = [
        {
            key: 1,
            title: 'Tetris',
            collection: 'pet',
            img: tetris.default,
            text: `
                Typescript implementation of the famous game.
            `,
            respon: [
                'Building up a Typescript project', 
                'Implementing the OOP',
                'Implementing the collision check pathern',
                'Using the HTML Canvas'
            ],
            tehn: ['HTML', 'CSS', 'Typescript', 'Git', 'Webpack'],
            demo: 'https://tetris.borissarhipov.me/',
            git: 'https://github.com/BorissArhipov/tetris-ts'
        },
        {
            key: 2,
            title: 'Portfolio',
            collection: 'pet',
            img: portfolio.default,
            text: `
                Another good opportunity to check my skill was the creation of this portfolio website.
            `,
            respon: [
                'Content management',
                'Building up a TSX project', 
                'Implementing the OOP',
                'Implementing the component approach',
                'Using the Redux store'
            ],
            tehn: ['HTML', 'CSS', 'Typescript', 'React', 'Redux', 'Git', 'Webpack'],
            demo: null,
            git: 'https://github.com/BorissArhipov/ab-portfolio'
        },
        {
            key: 3,
            title: 'Sweet Baby Dreams',
            collection: 'free',
            img: sweet.default,
            text: `
                An online shop that was made on freelance for a sewing workshop.
            `,
            respon: [
                'Content management',
                'Building up a Wordpress project', 
                'Rewriting the base theme',
                'Using Wordpress and Woocommerce hooks and filters'
            ],
            tehn: ['HTML', 'CSS', 'PHP', 'Wordpress', 'Git'],
            demo: 'https://sweetbabydreams.ee/',
            git: null
        },
    ];

    return items;
}


export default itemsFunc;