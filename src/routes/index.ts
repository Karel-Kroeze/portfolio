import type { RequestHandler } from '@sveltejs/kit';
import path from 'node:path';
import sample from 'lodash/sampleSize';

const getCaption = (file) => {
	return path.basename(file, path.extname(file)).replace(/-/g, ' ');
};

export const get: RequestHandler = async () => {
	const selected = sample(import.meta.glob('/src/lib/photos/*'), 6);
	const images = await Promise.all(
		selected.map(async (f) => {
			const src = (await f()).default;
			return {
				src: (await import('../../' + src + '?w=250&h=250')).default,
				caption: getCaption(src)
			};
		})
	);

	return {
		body: { images }
	};
};
