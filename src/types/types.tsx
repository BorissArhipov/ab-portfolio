export interface handleRefs {
    home: number
    about: number
    portfolio: number
    contact: number
}

export interface coLinkReducerProps {
    coLinkReducer: {
        header: string
        home: string
        about: string
        portfolio: string
        contact: string
    }
}

export interface linkReducerProps {
    header: string
    home: string
    about: string
    portfolio: string
    contact: string
}

export interface itemsTypes {
    items: {
        key: number,
        collection: string,
        img: string,
        text: string,
        href: string
    }[]
}

export interface coPortfolioReducerProps {
    coPortfolioReducer: {
        col: string
        all: string
        pet: string
        free: string
    }
}

export interface portfolioReducerProps {
    col: string
    all: string
    pet: string
    free: string
}
