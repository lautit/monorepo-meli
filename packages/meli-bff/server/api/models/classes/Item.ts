import IDetails from '../interfaces/Details';
import IDescription from '../interfaces/Description';

export default class Item {
	// constructor(
	// 	id: string,
	// 	title: string,
	// 	price: {
	// 		currency: string;
	// 		amount: number;
	// 		decimals: number;
	// 	},
	// 	picture: string,
	// 	condition: string,
	// 	free_shipping: boolean,
	// 	sold_quantity: number,
	// 	description: string,
	// ) { }

	constructor(details: IDetails, description: IDescription) {}
}
