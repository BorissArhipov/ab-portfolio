import { itemsTypes } from '../../types/types';

const itemsFunc = () => {
    const tetris = require('../../img/tetris.jpg');
    const portfolio = require('../../img/portfolio.jpg');
    const sweet = require('../../img/sweet.jpg');
    const trello = require('../../img/trello.jpg');
    const shop = require('../../img/shop.jpg');
    const stwars = require('../../img/stwars.jpg');
    const snake = require('../../img/snake.jpg');
    const test = require('../../img/test.jpg');

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
                Another good opportunity to check my skill was the creating of this portfolio website.
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
        {
            key: 4,
            title: 'Trello clone',
            collection: 'pet',
            img: trello.default,
            text: `
                Simple clone of a trello app from trello.com. Clone uses the LocalStorage to save boards and list you made.
            `,
            respon: [
                'Building up a React project', 
                'Implementing the OOP',
                'Implementing the component approach',
                'Using the Redux store',
                'Implementing the React DnD and the React Router',
            ],
            tehn: ['HTML', 'CSS', 'React', 'Redux', 'React DnD', 'React Router', 'Git', 'Webpack'],
            demo: 'https://trello.borissarhipov.me/',
            git: 'https://github.com/BorissArhipov/small-trello'
        },
        {
            key: 5,
            title: 'Snake',
            collection: 'pet',
            img: snake.default,
            text: `
                Typescript implementation of the snake game.
            `,
            respon: [
                'Building up a Typescript project', 
                'Implementing the OOP',
                'Implementing the collision check pathern',
                'Using the CSS Grid'
            ],
            tehn: ['HTML', 'CSS', 'Typescript', 'CSS Grid', 'Git', 'Webpack'],
            demo: 'https://snake.borissarhipov.me/',
            git: 'https://github.com/BorissArhipov/ts-snake'
        },
        {
            key: 6,
            title: 'React Shop',
            collection: 'pet',
            img: shop.default,
            text: `
                The React shop project was made in order to pratice usage of the Apollo and GraphQL libraries. The database of this project is MongoDB.
            `,
            respon: [
                'Building up a React project', 
                'Implementing the OOP',
                'Implementing the component approach',
                'Using the Redux store',
                'Implementing Apollo-GraphQl queries and GraphQL schemes',
            ],
            tehn: ['HTML', 'CSS', 'React', 'Redux', 'Apollo', 'GraphQL', 'Express', 'MongoDB', 'Git', 'Webpack'],
            demo: 'https://reactshop.borissarhipov.me/',
            git: 'https://github.com/BorissArhipov/reactShop'
        },
        {
            key: 7,
            title: 'Star Wars DB',
            collection: 'pet',
            img: stwars.default,
            text: `
                This application displays the information about characters, ships and planets from Star Wars movies. The app was created in order to practice in using Rest API and React. The database is located on swapi.dev.
            `,
            respon: [
                'Building up a React project', 
                'Implementing the OOP',
                'Implementing the component approach',
                'Using the Rest API',
            ],
            tehn: ['HTML', 'CSS', 'React', 'Fetch API', 'Git', 'Webpack'],
            demo: 'https://starwarsdb.borissarhipov.me/',
            git: 'https://github.com/BorissArhipov/StarwarsDBApp'
        },
        {
            key: 8,
            title: 'React tests',
            collection: 'pet',
            img: test.default,
            text: `
                This project was made in order to practice wrinting unit tests for React app.
            `,
            respon: [
                'Writing unit tests for React Components', 
                'Implementing mock data to tests',
            ],
            tehn: ['React', 'Jest', 'Enzyme', 'Git'],
            demo: null,
            git: 'https://github.com/BorissArhipov/react-test'
        },
    ];

    return items;
}


export default itemsFunc;