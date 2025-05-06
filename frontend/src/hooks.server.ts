/** @type {import('@sveltejs/kit').Handle} */
export const handle: any = async ({ event, resolve }: any) => {
	const theme = event.cookies.get('siteTheme');
	const response = await resolve(event, {
		transformPageChunk: ({ html }: any) => html.replace('class=""', `class="${theme}"`)
	});
	return response;
};