# Prelaunch Status USD Halo

## Geimplementeerd in code

1. Join waitlist-flow met validatie, loading/succes/foutstatus en lokale fallback.
2. ErrorBoundary en 404-pagina met route-afhandeling.
3. SEO-basis: route-specifieke title/description, Open Graph, Twitter tags, canonical URL.
4. Robots en sitemap in public.
5. FAQ-zoekfunctie op Help-pagina.
6. Copy-to-clipboard utility op Wallet-pagina.
7. Placeholder-secties voor loading/empty/error in Wallet, Rewards en Commerce.
8. Analytics-wrapper met provider-keuze via environment (`none`, `gtm`, `posthog`, `auto`).
9. Tracking hooks voor page views, CTA-clicks en navigatie-clicks.
10. Analytics-bootstrap voor GTM/PostHog via runtime environment keys.
11. Accessibility-pass: skip-link, landmarks, ARIA uitbreidingen, status live regions, button type-correcties.
12. Runtime config-contract in `src/config/runtime.ts`.
13. Waitlist service-laag met API endpoint ondersteuning en lokale fallback.
14. Testfundering met Vitest + Testing Library (smoke/behavior tests).
15. CI-workflow voor lint, test en build op push en pull request.
16. Video-optimalisatie met poster en preload-hints.
17. JSON-LD structured data voor Organization en WebSite in HTML shell.
18. Projectdocumentatie bijgewerkt in README (Nederlands).
19. Productieklare backend API met persistent waitlist-opslag, rate limiting en admin-export (JSON + CSV).
20. Full-stack deploy-check script (`deploy:check`) met frontend + backend teststappen.
21. Docker deployment flow toegevoegd met statische frontend serving via backend.

## Handmatig of extern (niet volledig in code af te ronden)

1. Definitieve productie-domein controleren in:
   - `VITE_SITE_URL`
   - `public/robots.txt`
   - `public/sitemap.xml`
2. Analytics provider keys invullen (`VITE_GTM_ID` of `VITE_POSTHOG_KEY` + host).
3. Lighthouse baseline draaien in target-omgeving en scoregrenzen vastleggen.

## Definition of Done voor prelaunch

1. `npm run lint` slaagt.
2. `npm run test:run` slaagt.
3. `npm run backend:test` slaagt.
4. `npm run build` slaagt.
5. CI-workflow slaagt op de hoofdbranch.
6. Externe configuraties hierboven zijn ingevuld en gevalideerd.
