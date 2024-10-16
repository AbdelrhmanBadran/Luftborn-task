export class Card {
    header: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating!: Rating;
    
    constructor(
        header:string,
        id:number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: Rating
    )
    {
        this.header = header
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.category = category
        this.image = image
        this.rating = rating
    }
}

interface Rating {
    rate: number;
    count: number;
}