// Static meta for known routes (title, description, image)
const staticMeta = {
  '/en': ['Modern Banking Meets Digital Currency | Matera', 'Matera provides next-gen banking technology for stablecoins, instant payments, and QR codes. Trusted by 2/3 of top global banks.', '/matera-logo.svg'],
  '/en/contact-us': ['Contact Us | Matera', 'Get in touch with Matera. Offices in New York and São Paulo.', null],
  '/en/about-us': ['About Us | Matera', 'Matera is the leading banking technology provider. 1,100+ employees, 280+ clients, 90M+ digital accounts since 1987.', null],
  '/en/stablecoin': ['Digital Twin for Stablecoins | Matera', 'Connect stablecoins with traditional financial services. Matera and Circle enable USDC within mobile and online banking.', null],
  '/en/solutions/digital-twin': ['Digital Twin for Real-Time Payments | Matera', 'Unlock real-time payments without replacing your core. Powers 24x7 banking with instant authorization.', null],
  '/en/solutions/qr-code-solutions': ['QR Code Payment Solutions | Matera', 'End-to-end QR code payment solutions. Supports FedNow, RTP, ACH. Proven at scale.', null],
  '/en/solutions/wallet-as-a-service': ['Wallet as a Service | Matera', 'Mobile wallet APIs for payments, prepaid cards, QR codes, loyalty and more.', null],
  '/en/blog': ['Blog | Matera', 'Insights on instant payments, stablecoins, QR codes, and banking technology.', null],
  '/en/press': ['Press | Matera', 'Matera in the news. Coverage from American Banker, Forbes, Bloomberg, and more.', null],
  '/en/whitepapers': ['White Papers | Matera', 'Free whitepapers on instant payments, Pix, stablecoins, and QR codes.', null],
  '/en/podcasts': ['Podcasts | Matera', 'Podcast episodes on payments, QR codes, stablecoins, and banking innovation.', null],
  '/en/privacy-policy': ['Privacy Policy | Matera', 'How we collect, use, and protect your personal information.', null],
  '/br': ['Tecnologia para Instituições Financeiras | Matera', 'Matera — tecnologia de ponta para bancos, fintechs e instituições financeiras. Core banking, pagamentos, crédito, Pix e mais.', null],
  '/br/blog': ['Blog | Matera', 'Conteúdo sobre pagamentos, Pix, crédito, core banking e tecnologia financeira.', null],
  '/br/cases': ['Cases | Matera', 'Conheça os cases de sucesso da Matera com instituições financeiras.', null],
  '/br/solucoes': ['Soluções | Matera', 'Soluções completas para o mercado financeiro. Core banking, pagamentos, crédito e mais.', null],
  '/br/sobre-nos': ['Sobre Nós | Matera', 'Matera — líder em tecnologia bancária. 1.100+ colaboradores, 280+ clientes, 90M+ contas digitais.', null],
  '/br/fale-conosco': ['Fale Conosco | Matera', 'Entre em contato com a Matera. Escritórios em Campinas e São Paulo.', null],
};

// Dynamic content routes: pattern → JSON index path
const dynamicRoutes = [
  { pattern: /^\/en\/blog\/(.+)$/, index: '/data/en/blog/index.json' },
  { pattern: /^\/en\/press\/(.+)$/, index: '/data/en/press/index.json' },
  { pattern: /^\/en\/whitepapers\/(.+)$/, index: '/data/en/whitepapers/index.json' },
  { pattern: /^\/en\/podcasts\/(.+)$/, index: '/data/en/podcasts/index.json' },
  { pattern: /^\/br\/blog\/(.+)$/, index: '/data/br/blog/index.json' },
  { pattern: /^\/br\/cases\/(.+)$/, index: '/data/br/cases/index.json' },
];

function buildMetaTags(title, description, image, url) {
  const origin = 'https://matera.com';
  const fullImage = image ? (image.startsWith('http') ? image : origin + image) : origin + '/matera-logo.svg';
  const fullUrl = url ? origin + url : '';
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${fullImage}" />
    ${fullUrl ? `<meta property="og:url" content="${fullUrl}" />` : ''}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${fullImage}" />`;
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

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

    // Inject meta tags into HTML responses for SEO
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      let meta = null;

      // Check static routes
      const staticEntry = staticMeta[url.pathname];
      if (staticEntry) {
        meta = buildMetaTags(staticEntry[0], staticEntry[1], staticEntry[2], url.pathname);
      }

      // Check dynamic content routes
      if (!meta) {
        for (const route of dynamicRoutes) {
          const match = url.pathname.match(route.pattern);
          if (match) {
            try {
              const indexRes = await env.ASSETS.fetch(new Request(new URL(route.index, url.origin)));
              if (indexRes.ok) {
                const index = await indexRes.json();
                const entry = index.find(e => e.slug === match[1]);
                if (entry) {
                  const title = escapeHtml(entry.title) + ' | Matera';
                  const desc = escapeHtml(entry.excerpt || entry.description || '');
                  meta = buildMetaTags(title, desc, entry.thumbnail, url.pathname);
                }
              }
            } catch {}
            break;
          }
        }
      }

      // Inject meta into HTML
      if (meta) {
        let html = await response.text();
        // Replace the static <title> and inject meta before </head>
        html = html.replace(/<title>Matera<\/title>/, '');
        html = html.replace('</head>', meta + '\n  </head>');
        response = new Response(html, response);
        response.headers.set('content-type', 'text/html; charset=utf-8');
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
