import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import itemsRouter from './api/controllers/items/router';
export default function routes(app: Application): void {
	app.use('/api/examples', examplesRouter);
	app.use('/api/items', itemsRouter);
}
