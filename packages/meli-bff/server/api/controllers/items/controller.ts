import ItemsService from '../../services/items.service';
import { Request, Response } from 'express';

import L from '../../../common/logger';

export class Controller {
	search(req: Request, res: Response): void {
		L.debug(`searching ${req.query.q}`);
		ItemsService.search(req.query.q).then(r => {
			if (r) res.json(r);
			else res.status(404).end();
		});
	}

	retrieve(req: Request, res: Response): void {
		L.debug(`retrieving ${req.params.id}`);
		ItemsService.retrieve(req.params.id).then(r => {
			if (r) res.json(r);
			else res.status(204).end();
		});
	}
}
export default new Controller();
