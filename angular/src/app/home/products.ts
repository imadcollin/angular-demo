import { IProduct } from './products';
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}
export class product implements IProduct {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string,
    ) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
    }

    calaculatePrice(product: number): number {
        //Calc all pizzes prices
        if (product != null && product > 140) {

            return product - 15;
        }
        else if (product != null && product > 240) {
            return product - 35;

        }
        return product;
    }
    

}