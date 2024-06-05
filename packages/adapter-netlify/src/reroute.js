import { reroute } from '__HOOKS__';

/**
 * @param {Request} request
 * @returns {Promise<URL | undefined>}
 */
export default async function middleware(request) {
	const url = new URL(request.url);
	const pathname = reroute({ url });
	return pathname ? new URL(pathname, request.url) : undefined;
}
