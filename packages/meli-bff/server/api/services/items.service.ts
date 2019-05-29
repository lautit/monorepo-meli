import axios from 'axios';
import L from '../../common/logger';

export class ItemsService {
	async search(query: string): Promise<any> {
		const URL: string = [process.env.MELI_BASE, process.env.MELI_SEARCH].join(``);
		L.debug(`calling ${URL}`);
		const { data: result }: any = await axios.get(URL, {
			params: {
				q: query,
			},
		});
		L.info(result, `found`);
		return result;
	}

	async retrieve(id: string): Promise<object> {
		const item = await this.fetchItem(id);
		const description = await this.fetchDescription(id);
		return { item, description };
	}

	async fetchItem(id: string): Promise<any> {
		const URL_ITEM: string = [process.env.MELI_BASE, process.env.MELI_RETRIEVE, id].join(``);
		try {
			L.debug(`calling ${URL_ITEM}`);
			const { data: item }: any = await axios.get(URL_ITEM);
			L.info(item, `found`);
			return item;
		} catch (err) {
			L.error(err, `error fetching item`);
			return `couldn't fetch`;
		}
	}

	async fetchDescription(id: string): Promise<any> {
		const URL_DESC: string = [
			process.env.MELI_BASE,
			process.env.MELI_RETRIEVE,
			id,
			`/description`,
		].join(``);
		try {
			L.debug(`calling ${URL_DESC}`);
			const { data: description }: any = await axios.get(URL_DESC);
			L.info(description, `found`);
			return description;
		} catch (err) {
			L.error(err, `error fetching description`);
			return `couldn't fetch`;
		}
	}
}

export default new ItemsService();
