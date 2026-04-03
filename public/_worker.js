export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const country = request.cf?.country || '';

    // Geo-redirect only on the bare root path
    if (url.pathname === '/') {
      const target = country === 'BR' ? '/br' : '/en';
      return Response.redirect(new URL(target, url.origin), 302);
    }

    // Serve static asset if it exists
    let response = await env.ASSETS.fetch(request);

    // SPA fallback: non-asset paths get index.html (replaces _redirects)
    if (response.status === 404) {
      const isAsset = /\.(js|css|png|jpe?g|gif|svg|ico|woff2?|json|mp4|webp|pdf|txt|xml)$/i.test(url.pathname);
      if (!isAsset) {
        response = await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
      }
    }

    // Set country cookie so the frontend can show the correct flag
    if (country) {
      response = new Response(response.body, response);
      response.headers.append('Set-Cookie', `cf-country=${country}; Path=/; SameSite=Lax; Max-Age=86400`);
    }

    return response;
  }
};
