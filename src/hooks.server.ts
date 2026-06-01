import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { handle as authHandle } from './lib/auth/authHandler';

const contentSecurityPolicy = [
	"default-src 'self' blob: data: https://*.basemaps.cartocdn.com",
	"font-src 'self'",
	"img-src 'self' https://*.basemaps.cartocdn.com data: blob:",
	"object-src 'none'",
	"script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com blob: data:",
	"style-src 'self' 'unsafe-inline'"
].join('; ');

const securityHeaders: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const securedResponse = new Response(response.body, response);
	const getSetCookie = (response.headers as Headers & { getSetCookie?: () => string[] })
		.getSetCookie;

	if (typeof getSetCookie === 'function') {
		for (const cookie of getSetCookie.call(response.headers)) {
			securedResponse.headers.append('set-cookie', cookie);
		}
	} else {
		const setCookie = response.headers.get('set-cookie');
		if (setCookie) securedResponse.headers.set('set-cookie', setCookie);
	}

	securedResponse.headers.set('X-Content-Type-Options', 'nosniff');
	securedResponse.headers.set('X-Frame-Options', 'DENY');
	securedResponse.headers.set('Content-Security-Policy', contentSecurityPolicy);

	return securedResponse;
};

export const handle = sequence(securityHeaders, authHandle);
